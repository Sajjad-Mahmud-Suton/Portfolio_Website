/**
 * SAJJAD MAHMUD® - ULTRA-MODERN THREE.JS WEBGL HERO VISUAL
 * Dynamic Bangladesh Time-of-Day Atmospheric Engine + Interactive Organic Polyhedron
 */

(function initHeroWebGL() {
  const container = document.getElementById('three-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  // Scene & Camera
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b1120, 0.075);

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
  const ambientLight = new THREE.AmbientLight(0x0f172a, 1.4);
  scene.add(ambientLight);

  const lightPrimary = new THREE.PointLight(0x38bdf8, 4.5, 25);
  lightPrimary.position.set(5, 4, 5);
  scene.add(lightPrimary);

  const lightSecondary = new THREE.PointLight(0x10b981, 3.5, 25);
  lightSecondary.position.set(-5, -4, 4);
  scene.add(lightSecondary);

  const lightTertiary = new THREE.PointLight(0x818cf8, 2.5, 20);
  lightTertiary.position.set(0, 5, -3);
  scene.add(lightTertiary);

  // Center Master Group
  const masterGroup = new THREE.Group();
  scene.add(masterGroup);

  // 1. Core Geometric Crystal (Icosahedron)
  const coreGeo = new THREE.IcosahedronGeometry(1.7, 2);
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0x0f172a,
    emissive: 0x070d1a,
    roughness: 0.15,
    metalness: 0.85,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    reflectivity: 0.95,
    wireframe: false
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  masterGroup.add(coreMesh);

  // 2. Futuristic Wireframe Hologram Overlay
  const wireGeo = new THREE.IcosahedronGeometry(1.715, 2);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  const wireMesh = new THREE.Mesh(wireGeo, wireMat);
  masterGroup.add(wireMesh);

  // 3. Dual Outer Orbit Rings
  const ringGeo1 = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
  const ringMat1 = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.4
  });
  const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
  ringMesh1.rotation.x = Math.PI * 0.35;
  masterGroup.add(ringMesh1);

  const ringGeo2 = new THREE.TorusGeometry(2.55, 0.015, 16, 100);
  const ringMat2 = new THREE.MeshBasicMaterial({
    color: 0x10b981,
    transparent: true,
    opacity: 0.3
  });
  const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
  ringMesh2.rotation.y = Math.PI * 0.45;
  masterGroup.add(ringMesh2);

  // 4. Particle Constellation
  const particleCount = 260;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    const radius = 2.2 + Math.random() * 2.6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
    particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particlePositions[i + 2] = radius * Math.cos(phi);
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x38bdf8,
    size: 0.048,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  masterGroup.add(particles);

  // 5. Spooky Phantom Wisps / Ghostly Fireflies Group
  const ghostCount = 45;
  const ghostGeo = new THREE.BufferGeometry();
  const ghostPositions = new Float32Array(ghostCount * 3);
  for (let i = 0; i < ghostCount * 3; i += 3) {
    ghostPositions[i] = (Math.random() - 0.5) * 6;
    ghostPositions[i + 1] = (Math.random() - 0.5) * 6;
    ghostPositions[i + 2] = (Math.random() - 0.5) * 6;
  }
  ghostGeo.setAttribute('position', new THREE.BufferAttribute(ghostPositions, 3));
  const ghostMat = new THREE.PointsMaterial({
    color: 0x00ff87,
    size: 0.08,
    transparent: true,
    opacity: 0, // initially hidden, visible in spooky mode
    blending: THREE.AdditiveBlending
  });
  const ghostParticles = new THREE.Points(ghostGeo, ghostMat);
  scene.add(ghostParticles);

  // ATMOSPHERIC PALETTES MAP
  const atmosphereThemes = {
    // 1. Sokal / Sunrise (সকাল - সূর্যোদয়)
    dawn: {
      primary: 0xf59e0b,
      secondary: 0xfb7185,
      tertiary: 0xfde047,
      wire: 0xfbbf24,
      ring1: 0xf59e0b,
      ring2: 0xf43f5e,
      particle: 0xfef08a,
      emissive: 0x271406,
      fog: 0x1c121e,
      ghostOpacity: 0
    },
    // 2. Dupur / High Noon (দুপুর - রোদেলা দুপুর)
    noon: {
      primary: 0x00f2fe,
      secondary: 0x38bdf8,
      tertiary: 0x38ef7d,
      wire: 0x00f2fe,
      ring1: 0x38bdf8,
      ring2: 0x10b981,
      particle: 0xbae6fd,
      emissive: 0x04192d,
      fog: 0x081b33,
      ghostOpacity: 0
    },
    // 3. Poronto Bikel / Golden Hour (পড়ন্ত বিকেল - সোনালী আভা)
    afternoon: {
      primary: 0xf59e0b,
      secondary: 0xea580c,
      tertiary: 0xd97706,
      wire: 0xfbbf24,
      ring1: 0xf59e0b,
      ring2: 0xd97706,
      particle: 0xfde68a,
      emissive: 0x231005,
      fog: 0x1c100a,
      ghostOpacity: 0
    },
    // 4. Sondha / Twilight (সন্ধ্যা - গোধূলি লগ্ন)
    dusk: {
      primary: 0xec4899,
      secondary: 0xa855f7,
      tertiary: 0x8b5cf6,
      wire: 0xd946ef,
      ring1: 0xa855f7,
      ring2: 0xf43f5e,
      particle: 0xf5d0fe,
      emissive: 0x1e0b29,
      fog: 0x150921,
      ghostOpacity: 0
    },
    // 5. Raat / Deep Night (রাত - শান্ত নিঝুম রাত)
    night: {
      primary: 0x38bdf8,
      secondary: 0x6366f1,
      tertiary: 0x10b981,
      wire: 0x38bdf8,
      ring1: 0x60a5fa,
      ring2: 0x818cf8,
      particle: 0xe0f2fe,
      emissive: 0x070d1a,
      fog: 0x060b14,
      ghostOpacity: 0
    },
    // 6. Majh Raat / Spooky Witching Hour (মাঝরাত - রহস্যময় ভৌতিক পরিবেশ)
    spooky: {
      primary: 0x00ff87,
      secondary: 0x8b5cf6,
      tertiary: 0x10b981,
      wire: 0x00ff87,
      ring1: 0x00ff87,
      ring2: 0xa855f7,
      particle: 0x6ee7b7,
      emissive: 0x04190c,
      fog: 0x040d08,
      ghostOpacity: 0.85
    }
  };

  // Switch Atmosphere Function
  function applyAtmosphereToThree(themeKey) {
    const t = atmosphereThemes[themeKey] || atmosphereThemes.night;

    lightPrimary.color.setHex(t.primary);
    lightSecondary.color.setHex(t.secondary);
    lightTertiary.color.setHex(t.tertiary);

    wireMat.color.setHex(t.wire);
    ringMat1.color.setHex(t.ring1);
    ringMat2.color.setHex(t.ring2);
    particleMat.color.setHex(t.particle);

    coreMat.emissive.setHex(t.emissive);
    scene.fog.color.setHex(t.fog);
    ghostMat.opacity = t.ghostOpacity;
  }

  // Expose globally for app.js
  window.updateThreeAtmosphere = applyAtmosphereToThree;

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
    lightSecondary.position.x = 4 + mouseX * 3;
    lightSecondary.position.y = 3 + mouseY * 3;
    lightPrimary.position.x = -4 - mouseX * 3;
    lightPrimary.position.y = -3 - mouseY * 3;
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

    // Ghostly wisps orbit float (creepy movement)
    if (ghostMat.opacity > 0) {
      ghostParticles.rotation.y = -elapsed * 0.12;
      ghostParticles.rotation.x = Math.sin(elapsed * 0.5) * 0.2;
    }

    renderer.render(scene, camera);
  }

  animate();
})();
