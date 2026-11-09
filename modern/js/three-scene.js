/**
 * SAJJAD MAHMUD® - MODERN PORTFOLIO
 * Three.js WebGL Interactive Creative Hero Visual
 * High Performance, Low Power, Responsive
 */

(function initThreeScene() {
  const container = document.getElementById('three-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 6.5;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const pointLightLime = new THREE.PointLight(0xB7FF5A, 3, 20);
  pointLightLime.position.set(4, 3, 4);
  scene.add(pointLightLime);

  const pointLightCyan = new THREE.PointLight(0x2EE6D6, 2.5, 20);
  pointLightCyan.position.set(-4, -3, 3);
  scene.add(pointLightCyan);

  // Group for rotation
  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // 1. Futuristic Torus Knot Wireframe Mesh
  const knotGeo = new THREE.TorusKnotGeometry(1.6, 0.48, 120, 24, 2, 3);
  const knotMat = new THREE.MeshPhysicalMaterial({
    color: 0x111622,
    emissive: 0x05070A,
    roughness: 0.2,
    metalness: 0.9,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    wireframe: false
  });
  const knotMesh = new THREE.Mesh(knotGeo, knotMat);
  mainGroup.add(knotMesh);

  // 2. Wireframe Overlay with Neon Accent
  const wireGeo = new THREE.TorusKnotGeometry(1.605, 0.482, 60, 16, 2, 3);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xB7FF5A,
    wireframe: true,
    transparent: true,
    opacity: 0.25
  });
  const wireMesh = new THREE.Mesh(wireGeo, wireMat);
  mainGroup.add(wireMesh);

  // 3. Floating Particle Cloud
  const particleCount = 180;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 8;
    particlePositions[i + 1] = (Math.random() - 0.5) * 8;
    particlePositions[i + 2] = (Math.random() - 0.5) * 6;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0xB7FF5A,
    size: 0.045,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // Interaction State
  let targetRotationX = 0;
  let targetRotationY = 0;
  let mouseX = 0;
  let mouseY = 0;
  let isVisible = true;

  // Window Resize
  function handleResize() {
    if (!container) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
  window.addEventListener('resize', handleResize);

  // Mouse Movement Parallax
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    targetRotationY = mouseX * 0.8;
    targetRotationX = -mouseY * 0.8;
  });

  // Intersection Observer to suspend rendering when not in view (battery & GPU friendly)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
    });
  }, { threshold: 0.1 });
  observer.observe(container);

  // Clock & Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return;

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    // Constant smooth rotation
    mainGroup.rotation.y += 0.35 * delta;
    mainGroup.rotation.x += 0.15 * delta;

    // Smooth lerp to mouse targets
    mainGroup.rotation.y += (targetRotationY - (mainGroup.rotation.y % (Math.PI * 2))) * 0.05;
    mainGroup.rotation.x += (targetRotationX - (mainGroup.rotation.x % (Math.PI * 2))) * 0.05;

    // Subtle breathing pulse
    const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
    mainGroup.scale.set(scale, scale, scale);

    // Particle floating wave
    particles.rotation.y = elapsedTime * 0.08;
    particles.rotation.x = elapsedTime * 0.04;

    renderer.render(scene, camera);
  }

  animate();
})();

