/**
 * SAJJAD MAHMUD® - ULTRA-REALISTIC DYNAMIC DAY & NIGHT CELESTIAL SKY ENGINE
 * Driven by Bangladesh Local Time (Asia/Dhaka UTC+6)
 *
 * 6 Environmental Stages:
 * A. Sunrise (5:00 AM – 8:00 AM)
 * B. Sunny Day (8:00 AM – 3:00 PM)
 * C. Golden Hour & Afternoon (3:00 PM – 5:00 PM)
 * D. Sunset (5:00 PM – 7:00 PM)
 * E. Night Sky: Moon & Stars (7:00 PM – 12:00 AM)
 * F. Haunted Midnight (12:00 AM – 5:00 AM)
 */

(function initCelestialSkyEngine() {
  // Global Stage Definitions
  const CELESTIAL_STAGES = {
    sunrise: {
      id: 'sunrise',
      bengali: 'সূর্যোদয়',
      name: 'Sunrise',
      timeSpan: '5:00 AM – 8:00 AM',
      themeClass: 'theme-sunrise',
      sunVisible: true,
      moonVisible: false,
      starsVisible: false,
      hauntedVisible: false,
      desc: 'Visible sun rising from below the horizon with golden morning aura and soft dawn fog.'
    },
    day: {
      id: 'day',
      bengali: 'রোদেলা দুপুর',
      name: 'Sunny Day',
      timeSpan: '8:00 AM – 3:00 PM',
      themeClass: 'theme-day',
      sunVisible: true,
      moonVisible: false,
      starsVisible: false,
      hauntedVisible: false,
      desc: 'Clear blue daylight sky, bright realistic sunlight, and natural shadows.'
    },
    afternoon: {
      id: 'afternoon',
      bengali: 'পড়ন্ত বিকেল',
      name: 'Golden Hour',
      timeSpan: '3:00 PM – 5:00 PM',
      themeClass: 'theme-afternoon',
      sunVisible: true,
      moonVisible: false,
      starsVisible: false,
      hauntedVisible: false,
      desc: 'Warm golden sunlight, lowering sun angle, long natural shadows and amber glow.'
    },
    sunset: {
      id: 'sunset',
      bengali: 'সূর্যাস্ত',
      name: 'Sunset',
      timeSpan: '5:00 PM – 7:00 PM',
      themeClass: 'theme-sunset',
      sunVisible: true,
      moonVisible: false,
      starsVisible: false,
      hauntedVisible: false,
      desc: 'Sun slowly descending and visibly setting below the horizon into twilight.'
    },
    night: {
      id: 'night',
      bengali: 'শান্ত রাত',
      name: 'Night Sky',
      timeSpan: '7:00 PM – 12:00 AM',
      themeClass: 'theme-night',
      sunVisible: false,
      moonVisible: true,
      starsVisible: true,
      hauntedVisible: false,
      desc: 'Glowing moon, hundreds of twinkling stars, occasional shooting stars and drifting clouds.'
    },
    haunted: {
      id: 'haunted',
      bengali: 'ভৌতিক মাঝরাত',
      name: 'Haunted Midnight',
      timeSpan: '12:00 AM – 5:00 AM',
      themeClass: 'theme-haunted',
      sunVisible: false,
      moonVisible: true,
      starsVisible: true,
      hauntedVisible: true,
      desc: 'Mysterious cinematic horror wraiths running through drifting fog, moving shadows and eerie mist.'
    }
  };

  let manualOverrideStage = null; // null for auto Bangladesh time, or stage key

  // Get Current Bangladesh Time (Asia/Dhaka)
  function getDhakaTime() {
    const now = new Date();
    const dhakaStr = now.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });
    const dhakaDate = new Date(dhakaStr);
    const hours = dhakaDate.getHours();
    const minutes = dhakaDate.getMinutes();
    const seconds = dhakaDate.getSeconds();
    const totalMinutes = hours * 60 + minutes + (seconds / 60);

    return {
      date: dhakaDate,
      hours,
      minutes,
      seconds,
      totalMinutes,
      formattedTime: new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now)
    };
  }

  // Determine stage and progress (0.0 to 1.0) based on Bangladesh time
  function resolveCurrentStage() {
    const dhaka = getDhakaTime();
    const m = dhaka.totalMinutes;

    let stageKey = 'night';
    let progress = 0; // 0.0 to 1.0 within the stage

    if (m >= 300 && m < 480) {
      // 5:00 AM to 8:00 AM (180 mins) -> Sunrise
      stageKey = 'sunrise';
      progress = (m - 300) / 180;
    } else if (m >= 480 && m < 900) {
      // 8:00 AM to 3:00 PM (420 mins) -> Sunny Day
      stageKey = 'day';
      progress = (m - 480) / 420;
    } else if (m >= 900 && m < 1020) {
      // 3:00 PM to 5:00 PM (120 mins) -> Golden Hour
      stageKey = 'afternoon';
      progress = (m - 900) / 120;
    } else if (m >= 1020 && m < 1140) {
      // 5:00 PM to 7:00 PM (120 mins) -> Sunset
      stageKey = 'sunset';
      progress = (m - 1020) / 120;
    } else if (m >= 1140 && m < 1440) {
      // 7:00 PM to 12:00 AM (300 mins) -> Night
      stageKey = 'night';
      progress = (m - 1140) / 300;
    } else {
      // 12:00 AM to 5:00 AM (300 mins) -> Haunted Midnight
      stageKey = 'haunted';
      progress = m / 300;
    }

    const effectiveKey = manualOverrideStage || stageKey;
    const stageData = CELESTIAL_STAGES[effectiveKey] || CELESTIAL_STAGES.day;

    return {
      stageKey: effectiveKey,
      stageData,
      isAuto: manualOverrideStage === null,
      progress: Math.max(0, Math.min(1, progress)),
      dhaka
    };
  }

  // --- STARFIELD & SHOOTING STARS CANVAS ENGINE ---
  let starsCanvas = null;
  let starsCtx = null;
  let starsArray = [];
  let shootingStars = [];
  let starAnimFrame = null;

  function initStarfield() {
    starsCanvas = document.getElementById('sky-stars-canvas');
    if (!starsCanvas) return;
    starsCtx = starsCanvas.getContext('2d');

    function resizeStarfield() {
      if (!starsCanvas) return;
      starsCanvas.width = window.innerWidth;
      starsCanvas.height = window.innerHeight;
      createStars(Math.floor(window.innerWidth * 0.16));
    }

    function createStars(count) {
      starsArray = [];
      for (let i = 0; i < count; i++) {
        starsArray.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight * 0.75), // sky portion
          radius: Math.random() * 1.5 + 0.5,
          baseAlpha: Math.random() * 0.6 + 0.3,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    window.addEventListener('resize', resizeStarfield);
    resizeStarfield();

    // Occasional shooting stars trigger
    setInterval(() => {
      const { stageData } = resolveCurrentStage();
      if ((stageData.id === 'night' || stageData.id === 'haunted') && Math.random() < 0.6) {
        spawnShootingStar();
      }
    }, 4500);

    animateStarfield();
  }

  function spawnShootingStar() {
    if (!starsCanvas) return;
    const startX = Math.random() * (window.innerWidth * 0.7);
    const startY = Math.random() * (window.innerHeight * 0.4);
    const length = Math.random() * 120 + 80;
    const speed = Math.random() * 8 + 10;
    const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3; // diagonal down-right

    shootingStars.push({
      x: startX,
      y: startY,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      length: length,
      alpha: 1.0,
      decay: Math.random() * 0.025 + 0.015
    });
  }

  let starClock = 0;
  function animateStarfield() {
    starAnimFrame = requestAnimationFrame(animateStarfield);
    if (!starsCanvas || !starsCtx) return;

    const { stageData } = resolveCurrentStage();
    starsCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);

    if (!stageData.starsVisible) return;

    starClock += 0.05;

    // Render Twinkling Stars
    starsArray.forEach(star => {
      const twinkle = Math.sin(starClock * star.twinkleSpeed * 10 + star.phase);
      const alpha = Math.max(0.1, star.baseAlpha + twinkle * 0.35);

      starsCtx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      starsCtx.beginPath();
      starsCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      starsCtx.fill();
    });

    // Render Shooting Stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      s.x += s.dx;
      s.y += s.dy;
      s.alpha -= s.decay;

      if (s.alpha <= 0) {
        shootingStars.splice(i, 1);
        continue;
      }

      const grad = starsCtx.createLinearGradient(
        s.x, s.y,
        s.x - s.dx * 1.8, s.y - s.dy * 1.8
      );
      grad.addColorStop(0, `rgba(255, 255, 255, ${s.alpha})`);
      grad.addColorStop(0.3, `rgba(56, 189, 248, ${s.alpha * 0.8})`);
      grad.addColorStop(1, 'rgba(56, 189, 248, 0)');

      starsCtx.strokeStyle = grad;
      starsCtx.lineWidth = 2.2;
      starsCtx.beginPath();
      starsCtx.moveTo(s.x, s.y);
      starsCtx.lineTo(s.x - s.dx * 1.8, s.y - s.dy * 1.8);
      starsCtx.stroke();
    }
  }

  // --- HAUNTED MIDNIGHT CINEMATIC GHOST SILHOUETTES ENGINE ---
  let ghostLayer = null;
  function initHauntedGhosts() {
    ghostLayer = document.getElementById('haunted-ghost-layer');
    if (!ghostLayer) return;

    // Spawn periodic wandering cinematic shadow apparitions
    setInterval(() => {
      const { stageData } = resolveCurrentStage();
      if (stageData.id === 'haunted') {
        triggerHauntedApparition();
      }
    }, 7000);
  }

  function triggerHauntedApparition() {
    if (!ghostLayer) return;
    const ghostType = Math.random() > 0.5 ? 'ghost-runner' : 'ghost-hover';
    const apparition = document.createElement('div');
    apparition.className = `cinematic-ghost ${ghostType}`;

    // Randomize path and depth
    const scale = Math.random() * 0.6 + 0.7;
    const topPos = Math.random() * 35 + 50; // lower half of screen
    apparition.style.top = `${topPos}%`;
    apparition.style.transform = `scale(${scale})`;

    ghostLayer.appendChild(apparition);

    setTimeout(() => {
      apparition.remove();
    }, 8500);
  }

  // --- CELESTIAL ORB COORDINATES (Sun & Moon) ---
  function updateCelestialPositions(stageKey, progress) {
    const sunEl = document.getElementById('celestial-sun');
    const moonEl = document.getElementById('celestial-moon');
    const horizonGlow = document.getElementById('sky-horizon-glow');

    if (!sunEl || !moonEl) return;

    if (stageKey === 'sunrise') {
      // Sun ascends from below the horizon line up to 28% from top
      // progress 0.0 -> Y: 95% (at/below horizon), progress 1.0 -> Y: 28%
      const y = 92 - (progress * 64);
      const x = 20 + (progress * 25);
      sunEl.style.display = 'block';
      sunEl.style.top = `${y}%`;
      sunEl.style.left = `${x}%`;
      sunEl.style.opacity = '1';
      sunEl.style.transform = `scale(${0.9 + progress * 0.15})`;

      moonEl.style.display = 'none';
      if (horizonGlow) horizonGlow.style.opacity = '0.9';

    } else if (stageKey === 'day') {
      // Sun is high overhead traversing from 45% to 70% left
      const x = 42 + (progress * 28);
      const y = 14 + Math.sin(progress * Math.PI) * -5;
      sunEl.style.display = 'block';
      sunEl.style.top = `${y}%`;
      sunEl.style.left = `${x}%`;
      sunEl.style.opacity = '1';
      sunEl.style.transform = 'scale(1.15)';

      moonEl.style.display = 'none';
      if (horizonGlow) horizonGlow.style.opacity = '0.2';

    } else if (stageKey === 'afternoon') {
      // Sun descends in the afternoon (3pm - 5pm)
      const x = 70 + (progress * 12);
      const y = 20 + (progress * 38);
      sunEl.style.display = 'block';
      sunEl.style.top = `${y}%`;
      sunEl.style.left = `${x}%`;
      sunEl.style.opacity = '1';
      sunEl.style.transform = 'scale(1.08)';

      moonEl.style.display = 'none';
      if (horizonGlow) horizonGlow.style.opacity = '0.7';

    } else if (stageKey === 'sunset') {
      // SUNSET: Sun physically and visibly descends toward and slips below the horizon!
      // progress 0.0 -> y: 58%, progress 0.7 -> y: 84%, progress 1.0 -> y: 110% (visibly below horizon)
      const x = 80 + (progress * 6);
      const y = 55 + (progress * 52);
      sunEl.style.display = 'block';
      sunEl.style.top = `${y}%`;
      sunEl.style.left = `${x}%`;

      // Atmospheric fade as it slips below horizon
      const opacity = progress > 0.8 ? Math.max(0, 1 - (progress - 0.8) * 5) : 1;
      sunEl.style.opacity = opacity.toString();
      sunEl.style.transform = `scale(${1.05 - progress * 0.1})`;

      moonEl.style.display = 'none';
      if (horizonGlow) horizonGlow.style.opacity = (1 - progress * 0.4).toString();

    } else if (stageKey === 'night') {
      // Moon is glowing in the night sky (7pm - 12am)
      sunEl.style.display = 'none';

      const x = 74 - (progress * 28);
      const y = 15 + Math.sin(progress * Math.PI) * -4;
      moonEl.style.display = 'block';
      moonEl.style.top = `${y}%`;
      moonEl.style.left = `${x}%`;
      moonEl.style.opacity = '1';

      if (horizonGlow) horizonGlow.style.opacity = '0.15';

    } else if (stageKey === 'haunted') {
      // Haunted Midnight (12am - 5am) -> Eerie moon enveloped in fog
      sunEl.style.display = 'none';

      const x = 50 + (progress * 20);
      const y = 18 + Math.cos(progress * Math.PI) * 5;
      moonEl.style.display = 'block';
      moonEl.style.top = `${y}%`;
      moonEl.style.left = `${x}%`;
      moonEl.style.opacity = '0.85';

      if (horizonGlow) horizonGlow.style.opacity = '0.4';
    }
  }

  // --- CELESTIAL ORRERY HERO HUD CARD (100% Free of Personal Photo) ---
  function updateCelestialOrreryVisual(stageData, dhaka, progress) {
    const stageNameEl = document.getElementById('orrery-stage-name');
    const stageBnEl = document.getElementById('orrery-stage-bn');
    const orreryTimeEl = document.getElementById('orrery-dhaka-time');
    const orreryAngleEl = document.getElementById('orrery-solar-angle');
    const orreryIconEl = document.getElementById('orrery-celestial-icon');
    const orreryRingEl = document.getElementById('orrery-celestial-ring');

    if (stageNameEl) stageNameEl.textContent = stageData.name;
    if (stageBnEl) stageBnEl.textContent = stageData.bengali;
    if (orreryTimeEl) orreryTimeEl.textContent = dhaka.formattedTime;

    // Approximate solar/lunar elevation in degrees
    let elevationDeg = 0;
    if (stageData.id === 'sunrise') elevationDeg = Math.round(progress * 25);
    else if (stageData.id === 'day') elevationDeg = Math.round(25 + Math.sin(progress * Math.PI) * 45);
    else if (stageData.id === 'afternoon') elevationDeg = Math.round(55 - progress * 35);
    else if (stageData.id === 'sunset') elevationDeg = Math.round(Math.max(-5, 20 - progress * 25));
    else if (stageData.id === 'night') elevationDeg = Math.round(15 + Math.sin(progress * Math.PI) * 35);
    else if (stageData.id === 'haunted') elevationDeg = Math.round(35 - progress * 20);

    if (orreryAngleEl) orreryAngleEl.textContent = `${elevationDeg}° Altitude`;

    if (orreryIconEl) {
      if (stageData.sunVisible) {
        orreryIconEl.className = 'fas fa-sun orrery-sun-glow';
      } else if (stageData.id === 'haunted') {
        orreryIconEl.className = 'fas fa-ghost orrery-ghost-glow';
      } else {
        orreryIconEl.className = 'fas fa-moon orrery-moon-glow';
      }
    }

    if (orreryRingEl) {
      orreryRingEl.style.transform = `rotate(${Math.round(progress * 360)}deg)`;
    }
  }

  // --- SYNC ENGINE LOOP ---
  function syncCelestialEnvironment() {
    const { stageKey, stageData, isAuto, progress, dhaka } = resolveCurrentStage();

    // 1. Update Body Theme Class
    const body = document.body;
    Object.values(CELESTIAL_STAGES).forEach(s => body.classList.remove(s.themeClass));
    body.classList.add(stageData.themeClass);

    // 2. Update Celestial Positions (Sun & Moon)
    updateCelestialPositions(stageKey, progress);

    // 3. Update Celestial Orrery Hero Visual (No Personal Photo!)
    updateCelestialOrreryVisual(stageData, dhaka, progress);

    // 4. Update HUD Clock & Title Badges
    const clockEl = document.getElementById('atmosphere-clock-text');
    const titleBadge = document.getElementById('atmosphere-current-title');
    const navText = document.getElementById('nav-atmo-text');

    if (clockEl) clockEl.textContent = `${dhaka.formattedTime} (GMT+6)`;
    if (titleBadge) titleBadge.textContent = `${stageData.name} • ${stageData.bengali}`;
    if (navText) navText.textContent = `Dhaka ${dhaka.formattedTime} • ${stageData.bengali}`;

    // 5. Update WebGL Three.js Scene lighting & atmosphere
    if (window.updateThreeAtmosphere) {
      window.updateThreeAtmosphere(stageKey);
    }
  }

  // --- USER CONTROLS & MANUAL PREVIEW PILLS ---
  function initUserControls() {
    const pills = document.querySelectorAll('.atmo-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const target = pill.getAttribute('data-atmo');

        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        if (target === 'auto') {
          manualOverrideStage = null;
        } else {
          manualOverrideStage = target;
        }

        syncCelestialEnvironment();

        const cur = resolveCurrentStage();
        if (window.showToast) {
          window.showToast(`Environment: ${cur.stageData.name} (${cur.stageData.bengali})`);
        }
      });
    });
  }

  // Expose API globally
  window.CelestialSky = {
    getStage: resolveCurrentStage,
    setStage: (stageKey) => {
      manualOverrideStage = stageKey === 'auto' ? null : stageKey;
      syncCelestialEnvironment();
    }
  };

  // Launch on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initStarfield();
    initHauntedGhosts();
    initUserControls();
    syncCelestialEnvironment();
    setInterval(syncCelestialEnvironment, 1000);
  });
})();

