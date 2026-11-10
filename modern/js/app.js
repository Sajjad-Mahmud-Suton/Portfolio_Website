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

  // 7. DHAKA REALTIME CLOCK (UTC+6)
  function syncDhakaClock() {
    const clockEl = document.getElementById('live-dhaka-clock');
    if (!clockEl) return;

    const opts = {
      timeZone: 'Asia/Dhaka',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const formatted = new Intl.DateTimeFormat('en-US', opts).format(new Date());
    clockEl.textContent = `${formatted} (GMT+6)`;
  }
  syncDhakaClock();
  setInterval(syncDhakaClock, 1000);

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
