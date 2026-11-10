/**
 * SAJJAD MAHMUD® - ULTRA-MODERN THREE.JS WEBGL HERO VISUAL
 * Interactive Organic Polyhedron with Shifting Specular Light & Dynamic Particle Orbit
 */

(function initHeroWebGL() {
  const container = document.getElementById('three-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  // Scene & Camera
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 7.0;

  // Renderer with High Dynamic Range feeling
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Dynamic Lighting Setup
  const ambientLight = new THREE.AmbientLight(0x0a0c12, 1.2);
  scene.add(ambientLight);

  const lightLime = new THREE.PointLight(0xB7FF5A, 4.5, 25);
  lightLime.position.set(5, 4, 5);
  scene.add(lightLime);

  const lightCyan = new THREE.PointLight(0x2EE6D6, 3.5, 25);
  lightCyan.position.set(-5, -4, 4);
  scene.add(lightCyan);

  const lightViolet = new THREE.PointLight(0xA855F7, 2.5, 20);
  lightViolet.position.set(0, 5, -3);
  scene.add(lightViolet);

  // Center Group
  const masterGroup = new THREE.Group();
  scene.add(masterGroup);

  // 1. Core Geometric Crystal (Icosahedron)
  const coreGeo = new THREE.IcosahedronGeometry(1.7, 2);
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0x090b10,
    emissive: 0x05070a,
    roughness: 0.15,
    metalness: 0.85,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    reflectivity: 0.9,
    wireframe: false
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  masterGroup.add(coreMesh);

  // 2. Futuristic Wireframe Hologram Overlay
  const wireGeo = new THREE.IcosahedronGeometry(1.715, 2);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xB7FF5A,
    wireframe: true,
    transparent: true,
    opacity: 0.22
  });
  const wireMesh = new THREE.Mesh(wireGeo, wireMat);
  masterGroup.add(wireMesh);

  // 3. Dual Outer Orbit Rings
  const ringGeo1 = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
  const ringMat1 = new THREE.MeshBasicMaterial({
    color: 0x2EE6D6,
    transparent: true,
    opacity: 0.35
  });
  const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
  ringMesh1.rotation.x = Math.PI * 0.35;
  masterGroup.add(ringMesh1);

  const ringGeo2 = new THREE.TorusGeometry(2.55, 0.015, 16, 100);
  const ringMat2 = new THREE.MeshBasicMaterial({
    color: 0xB7FF5A,
    transparent: true,
    opacity: 0.25
  });
  const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
  ringMesh2.rotation.y = Math.PI * 0.45;
  masterGroup.add(ringMesh2);

  // 4. Particle Constellation
  const particleCount = 240;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    const radius = 2.2 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
    particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particlePositions[i + 2] = radius * Math.cos(phi);
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0xB7FF5A,
    size: 0.045,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  masterGroup.add(particles);

  // Mouse Physics & Parallax State
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  let isVisible = true;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    targetX = mouseX * 0.85;
    targetY = -mouseY * 0.85;

    // Shift point lights dynamically with mouse
    lightLime.position.x = 4 + mouseX * 3;
    lightLime.position.y = 3 + mouseY * 3;
    lightCyan.position.x = -4 - mouseX * 3;
    lightCyan.position.y = -3 - mouseY * 3;
  });

  // Resize Listener
  function onResize() {
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onResize);

  // Battery friendly view observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
    });
  }, { threshold: 0.05 });
  observer.observe(container);

  // Render Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return;

    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    // Constant planetary rotation
    masterGroup.rotation.y += 0.28 * delta;
    masterGroup.rotation.x += 0.12 * delta;

    // Smooth spring lerp toward mouse target
    masterGroup.rotation.y += (targetX - (masterGroup.rotation.y % (Math.PI * 2))) * 0.04;
    masterGroup.rotation.x += (targetY - (masterGroup.rotation.x % (Math.PI * 2))) * 0.04;

    // Orbit rings individual spin
    ringMesh1.rotation.z += 0.4 * delta;
    ringMesh2.rotation.z -= 0.3 * delta;

    // Organic breathing wave
    const breath = 1 + Math.sin(elapsed * 1.8) * 0.04;
    coreMesh.scale.set(breath, breath, breath);
    wireMesh.scale.set(breath, breath, breath);

    // Particle subtle float
    particles.rotation.y = elapsed * 0.06;

    renderer.render(scene, camera);
  }

  animate();
})();
