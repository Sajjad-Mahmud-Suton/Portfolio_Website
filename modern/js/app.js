/**
 * SAJJAD MAHMUD® - ULTRA-MODERN PORTFOLIO ORCHESTRATION
 * Lenis Smooth Scroll, GSAP Motion, 3D Tilt, Web Audio Sound, Preloader, Form
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. PRELOADER COUNTDOWN & REVEAL
  const preloader = document.getElementById('preloader');
  const counterEl = document.getElementById('preloader-counter');
  const barEl = document.getElementById('preloader-bar');

  let count = 0;
  const loadTimer = setInterval(() => {
    count += Math.floor(Math.random() * 9) + 4;
    if (count > 100) count = 100;

    if (counterEl) counterEl.textContent = `${count.toString().padStart(2, '0')}%`;
    if (barEl) barEl.style.width = `${count}%`;

    if (count === 100) {
      clearInterval(loadTimer);
      setTimeout(() => {
        if (preloader) preloader.classList.add('loaded');
        initScrollAnimations();
      }, 350);
    }
  }, 35);

  // 2. CUSTOM CURSOR WITH DYNAMIC STATE
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorFollower = document.querySelector('.cursor-follower');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  function renderCursor() {
    followerX += (mouseX - followerX) * 0.16;
    followerY += (mouseY - followerY) * 0.16;
    if (cursorFollower) {
      cursorFollower.style.left = `${followerX}px`;
      cursorFollower.style.top = `${followerY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover states
  document.querySelectorAll('a, button, input, textarea, .chat-chip').forEach(el => {
    el.addEventListener('mouseenter', () => cursorFollower && cursorFollower.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursorFollower && cursorFollower.classList.remove('hovered'));
  });

  // Project hover state with dynamic label
  document.querySelectorAll('.project-media-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
      if (cursorFollower) {
        cursorFollower.classList.add('project-view');
        cursorFollower.textContent = 'EXPLORE';
      }
    });
    box.addEventListener('mouseleave', () => {
      if (cursorFollower) {
        cursorFollower.classList.remove('project-view');
        cursorFollower.textContent = '';
      }
    });
  });

  window.addEventListener('mousedown', () => cursorFollower && cursorFollower.classList.add('clicking'));
  window.addEventListener('mouseup', () => cursorFollower && cursorFollower.classList.remove('clicking'));

  // 3. LENIS SMOOTH MOMENTUM SCROLLING
  let lenisInstance = null;
  if (typeof Lenis !== 'undefined') {
    lenisInstance = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof ScrollTrigger !== 'undefined') {
      lenisInstance.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // 4. PURE WEB AUDIO SYNTHESIZER SOUND DESIGN (100% Free)
  let audioCtx = null;
  let soundEnabled = localStorage.getItem('sm_portfolio_sound') === 'true';

  function playSynthTone(freq = 850, type = 'sine', duration = 0.045) {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.035, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    function refreshSoundUI() {
      soundBtn.innerHTML = soundEnabled ? '<i class="fas fa-volume-high"></i>' : '<i class="fas fa-volume-xmark"></i>';
      soundBtn.setAttribute('title', soundEnabled ? 'Sound FX Enabled' : 'Sound FX Muted');
    }
    refreshSoundUI();

    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem('sm_portfolio_sound', soundEnabled);
      refreshSoundUI();
      if (soundEnabled) playSynthTone(980, 'sine', 0.08);
    });
  }

  document.querySelectorAll('a, button, .chat-chip').forEach(el => {
    el.addEventListener('click', () => playSynthTone(750, 'sine', 0.035));
  });

  // 5. NAVBAR SCROLL GLASSMORPHISM
  const nav = document.querySelector('.modern-nav');
  window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // 6. 3D CARD TILT ON HERO CARD & PROJECT MEDIA
  const tiltItems = document.querySelectorAll('[data-tilt]');
  tiltItems.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });

  // 7. BANGLADESH TIME-OF-DAY ATMOSPHERIC ENGINE (Asia/Dhaka UTC+6)
  const ATMOSPHERE_MODES = {
    dawn: {
      key: 'dawn',
      title: '🌅 সকাল (Sunrise Dawn)',
      desc: 'Soft golden morning aura and fresh dawn light.'
    },
    noon: {
      key: 'noon',
      title: '☀️ দুপুর (Sunny High Noon)',
      desc: 'High-energy radiant daylight and crisp cyan reflections.'
    },
    afternoon: {
      key: 'afternoon',
      title: '🌇 বিকেল (Golden Hour)',
      desc: 'Warm molten amber glow and late afternoon light.'
    },
    dusk: {
      key: 'dusk',
      title: '🌆 সন্ধ্যা (Twilight Dusk)',
      desc: 'Sunset magenta, dusk violet, and twilight silhouette.'
    },
    night: {
      key: 'night',
      title: '🌌 রাত (Cosmic Night)',
      desc: 'Deep space midnight sapphire and sparkling starlight.'
    },
    spooky: {
      key: 'spooky',
      title: '👻 মাঝরাত (Spooky Witching Hour)',
      desc: 'Eerie supernatural mist, phantom emerald wisps, and haunted gothic vibe.'
    }
  };

  let currentAtmosphereMode = 'auto'; // 'auto' or explicit key

  function getDhakaHour() {
    const dhakaDate = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }));
    return dhakaDate.getHours();
  }

  function detectBangladeshAtmosphere() {
    const hour = getDhakaHour();
    if (hour >= 5 && hour < 9) return 'dawn';         // 05:00 - 08:59 AM (সকাল - সূর্যোদয়)
    if (hour >= 9 && hour < 16) return 'noon';        // 09:00 AM - 03:59 PM (দুপুর - রোদেলা দুপুর)
    if (hour >= 16 && hour < 18) return 'afternoon';  // 04:00 - 05:59 PM (পড়ন্ত বিকেল)
    if (hour >= 18 && hour < 20) return 'dusk';       // 06:00 - 07:59 PM (সন্ধ্যা - গোধূলি)
    if (hour >= 20 && hour < 24) return 'night';      // 08:00 - 11:59 PM (শান্ত রাত)
    return 'spooky';                                  // 00:00 - 04:59 AM (মাঝরাত - ভৌতিক পরিবেশ)
  }

  function applyAtmosphereTheme(atmoKey) {
    const meta = ATMOSPHERE_MODES[atmoKey] || ATMOSPHERE_MODES.night;

    // Remove existing theme classes from body
    document.body.classList.remove(
      'theme-dawn',
      'theme-noon',
      'theme-afternoon',
      'theme-dusk',
      'theme-night',
      'theme-spooky'
    );
    document.body.classList.add(`theme-${atmoKey}`);

    // Update HUD Badge Title
    const titleBadge = document.getElementById('atmosphere-current-title');
    if (titleBadge) {
      titleBadge.textContent = meta.title;
    }

    // Sync Three.js Scene Lighting & Fog
    if (window.updateThreeAtmosphere) {
      window.updateThreeAtmosphere(atmoKey);
    }
  }

  function syncAtmosphereEngine() {
    // 1. Digital Clock Display in Bangladesh Time (Asia/Dhaka)
    const clockEl = document.getElementById('atmosphere-clock-text');
    const heroDhakaClock = document.getElementById('live-dhaka-clock');
    const opts = {
      timeZone: 'Asia/Dhaka',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const nowDhaka = new Intl.DateTimeFormat('en-US', opts).format(new Date());

    if (clockEl) clockEl.textContent = `${nowDhaka} (GMT+6)`;
    if (heroDhakaClock) heroDhakaClock.textContent = `${nowDhaka} (GMT+6)`;

    // 2. Resolve Active Theme
    const effectiveAtmo = currentAtmosphereMode === 'auto'
      ? detectBangladeshAtmosphere()
      : currentAtmosphereMode;

    applyAtmosphereTheme(effectiveAtmo);
  }

  // Atmosphere Selector Buttons
  const atmoPills = document.querySelectorAll('.atmo-pill');
  atmoPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const target = pill.getAttribute('data-atmo');
      currentAtmosphereMode = target;

      atmoPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      syncAtmosphereEngine();
      playSynthTone(920, 'sine', 0.05);

      if (target === 'spooky') {
        showToast('👻 মাঝরাত Activated: Eerie phantom fog & witching hour atmosphere awakened.');
      } else if (target === 'auto') {
        showToast(`⚡ Auto Bangladesh Time Synchronized (${ATMOSPHERE_MODES[detectBangladeshAtmosphere()].title})`);
      }
    });
  });

  // Initialize and run Dhaka Clock & Engine
  syncAtmosphereEngine();
  setInterval(syncAtmosphereEngine, 1000);

  // 8. INTERACTIVE PROJECT CAROUSEL SLIDER ENGINE
  const carouselViewport = document.getElementById('projects-carousel-viewport');
  const carouselTrack = document.getElementById('projects-carousel-track');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const counterBadge = document.getElementById('carousel-counter-badge');
  const dotsContainer = document.getElementById('carousel-dots-pagination');
  const filterPills = document.querySelectorAll('.proj-filter-pill');
  const viewSliderBtn = document.getElementById('view-mode-slider');
  const viewGridBtn = document.getElementById('view-mode-grid');

  if (carouselTrack && carouselViewport) {
    let allSlides = Array.from(carouselTrack.querySelectorAll('.project-carousel-slide'));
    let activeCategory = 'all';
    let currentSlide = 0;
    let isGridMode = false;

    function getFilteredSlides() {
      if (activeCategory === 'all') return allSlides;
      return allSlides.filter(s => s.getAttribute('data-category') === activeCategory);
    }

    function renderPaginationDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      const visible = getFilteredSlides();

      visible.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === currentSlide ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to project ${idx + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(idx);
          playSynthTone(800, 'sine', 0.03);
        });
        dotsContainer.appendChild(dot);
      });
    }

    function updateCarouselState() {
      const visible = getFilteredSlides();
      if (visible.length === 0) return;

      if (currentSlide >= visible.length) currentSlide = visible.length - 1;
      if (currentSlide < 0) currentSlide = 0;

      // Update counter
      if (counterBadge) {
        const curStr = (currentSlide + 1).toString().padStart(2, '0');
        const totStr = visible.length.toString().padStart(2, '0');
        counterBadge.textContent = `${curStr} / ${totStr}`;
      }

      // Mark active slide
      allSlides.forEach(s => s.classList.remove('is-active-slide'));
      if (visible[currentSlide]) {
        visible[currentSlide].classList.add('is-active-slide');
      }

      // Update Dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((d, i) => {
          if (i === currentSlide) d.classList.add('active');
          else d.classList.remove('active');
        });
      }

      // Slide Position (if not in grid mode)
      if (!isGridMode) {
        const targetSlide = visible[currentSlide];
        if (targetSlide) {
          const slideRect = targetSlide.getBoundingClientRect();
          const slideWidth = targetSlide.offsetWidth;
          const gap = 26;
          const offset = currentSlide * (slideWidth + gap);
          carouselTrack.style.transform = `translateX(-${offset}px)`;
        }
      } else {
        carouselTrack.style.transform = 'none';
      }
    }

    function goToSlide(index) {
      const visible = getFilteredSlides();
      currentSlide = Math.max(0, Math.min(index, visible.length - 1));
      updateCarouselState();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const visible = getFilteredSlides();
        const nextIdx = currentSlide > 0 ? currentSlide - 1 : visible.length - 1;
        goToSlide(nextIdx);
        playSynthTone(700, 'sine', 0.04);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const visible = getFilteredSlides();
        const nextIdx = currentSlide < visible.length - 1 ? currentSlide + 1 : 0;
        goToSlide(nextIdx);
        playSynthTone(850, 'sine', 0.04);
      });
    }

    // Category Filter Handling
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        activeCategory = pill.getAttribute('data-filter');
        currentSlide = 0;

        // Hide non-matching slides, show matching
        allSlides.forEach(slide => {
          const cat = slide.getAttribute('data-category');
          if (activeCategory === 'all' || cat === activeCategory) {
            slide.style.display = 'flex';
          } else {
            slide.style.display = 'none';
          }
        });

        renderPaginationDots();
        updateCarouselState();
        playSynthTone(900, 'sine', 0.04);
      });
    });

    // View Mode Switcher: Slider vs Grid
    if (viewSliderBtn && viewGridBtn) {
      viewSliderBtn.addEventListener('click', () => {
        isGridMode = false;
        viewSliderBtn.classList.add('active');
        viewGridBtn.classList.remove('active');
        carouselViewport.classList.remove('is-grid-layout');
        if (prevBtn) prevBtn.style.display = 'flex';
        if (nextBtn) nextBtn.style.display = 'flex';
        if (counterBadge) counterBadge.style.display = 'block';
        updateCarouselState();
        playSynthTone(800, 'sine', 0.04);
      });

      viewGridBtn.addEventListener('click', () => {
        isGridMode = true;
        viewGridBtn.classList.add('active');
        viewSliderBtn.classList.remove('active');
        carouselViewport.classList.add('is-grid-layout');
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        if (counterBadge) counterBadge.style.display = 'none';
        carouselTrack.style.transform = 'none';
        playSynthTone(820, 'sine', 0.04);
      });
    }

    // Touch & Mouse Drag Gestures
    let startX = 0;
    let isDragging = false;

    carouselViewport.addEventListener('mousedown', (e) => {
      if (isGridMode) return;
      isDragging = true;
      startX = e.pageX;
    });

    window.addEventListener('mouseup', (e) => {
      if (!isDragging || isGridMode) return;
      isDragging = false;
      const endX = e.pageX;
      const diff = startX - endX;
      if (Math.abs(diff) > 45) {
        if (diff > 0) nextBtn && nextBtn.click();
        else prevBtn && prevBtn.click();
      }
    });

    carouselViewport.addEventListener('touchstart', (e) => {
      if (isGridMode) return;
      startX = e.touches[0].clientX;
    }, { passive: true });

    carouselViewport.addEventListener('touchend', (e) => {
      if (isGridMode) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) nextBtn && nextBtn.click();
        else prevBtn && prevBtn.click();
      }
    }, { passive: true });

    // Keyboard Arrow Keys when visible
    window.addEventListener('keydown', (e) => {
      if (isGridMode) return;
      const rect = carouselViewport.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === 'ArrowRight') nextBtn && nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn && prevBtn.click();
      }
    });

    // Window Resize Handling
    window.addEventListener('resize', () => {
      if (!isGridMode) updateCarouselState();
    });

    // Initial setup
    renderPaginationDots();
    updateCarouselState();
  }

  // 8. CLIPBOARD EMAIL WITH TOAST
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'sajjadmahmudsuton@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email copied to clipboard: ' + email);
      }).catch(() => {
        showToast('Email: sajjadmahmudsuton@gmail.com');
      });
    });
  }

  function showToast(msg) {
    const old = document.querySelector('.custom-toast');
    if (old) old.remove();

    const t = document.createElement('div');
    t.className = 'custom-toast';
    t.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #B7FF5A;
      color: #050608;
      padding: 12px 26px;
      border-radius: 9999px;
      font-family: 'Space Grotesk', monospace;
      font-size: 13px;
      font-weight: 700;
      z-index: 1000000;
      box-shadow: 0 10px 40px rgba(0,0,0,0.9), 0 0 25px rgba(183, 255, 90, 0.5);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    `;
    t.textContent = msg;
    document.body.appendChild(t);

    setTimeout(() => { t.style.transform = 'translateX(-50%) translateY(0)'; }, 10);
    setTimeout(() => {
      t.style.transform = 'translateX(-50%) translateY(20px)';
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 350);
    }, 3200);
  }

  // 9. EMAILJS FUNCTIONAL CONTACT FORM
  const contactForm = document.getElementById('modern-contact-form');
  if (contactForm && typeof emailjs !== 'undefined') {
    const PUBLIC_KEY = 'jt_E_2wOZ0XhwSTyF';
    const SERVICE_ID = 'service_sajjad';
    const TEMPLATE_ID = 'template_wwymg5f';
    const AUTO_REPLY_ID = 'template_891ymr7';

    try { emailjs.init(PUBLIC_KEY); } catch (e) {}

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const prevHtml = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
      submitBtn.disabled = true;

      const params = {
        from_name: document.getElementById('form-name').value,
        from_email: document.getElementById('form-email').value,
        subject: document.getElementById('form-subject').value || 'Portfolio Contact Inquiry',
        message: document.getElementById('form-message').value,
        to_email: 'sajjadmahmudsuton@gmail.com',
        time: new Date().toLocaleString()
      };

      emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
        .then(() => {
          emailjs.send(SERVICE_ID, AUTO_REPLY_ID, params).catch(() => {});
          if (window.SajjadAnalytics) window.SajjadAnalytics.logContactSubmission();

          showToast('✓ Message transmitted! Sajjad will respond shortly.');
          contactForm.reset();
        })
        .catch((err) => {
          console.error('Email error:', err);
          showToast('Notice: Direct transmission failed. Please email sajjadmahmudsuton@gmail.com');
        })
        .finally(() => {
          submitBtn.innerHTML = prevHtml;
          submitBtn.disabled = false;
        });
    });
  }

  // 10. MOBILE MENU TOGGLE
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const open = mobileDrawer.classList.contains('open');
      mobileBtn.innerHTML = open ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // 11. GSAP SCROLLTRIGGER ANIMATIONS
  function initScrollAnimations() {
    if (typeof gsap === 'undefined') return;
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    // Hero title & content
    gsap.from('.hero-left-editorial > *', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.14,
      ease: 'power3.out'
    });

    gsap.from('.holo-card-3d', {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2
    });

    // Reveal sections on scroll
    gsap.utils.toArray('.section-wrapper').forEach(sec => {
      gsap.from(sec.querySelectorAll('.section-editorial-header, .bento-card, .project-feature-row, .skill-matrix-card, .honor-item, .blog-editorial-card, .contact-dual-grid'), {
        scrollTrigger: {
          trigger: sec,
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        y: 45,
        opacity: 0,
        duration: 0.85,
        stagger: 0.15,
        ease: 'power3.out'
      });
    });
  }
});
