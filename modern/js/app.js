/**
 * SAJJAD MAHMUD® - MODERN CREATIVE DEVELOPER PORTFOLIO
 * Main Application Orchestration (GSAP, Magnetic, Cursor, Preloader, Form, Time)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. PRELOADER COUNTDOWN
  const preloader = document.getElementById('preloader');
  const counterEl = document.getElementById('preloader-counter');
  const barEl = document.getElementById('preloader-bar');

  let count = 0;
  const loadInterval = setInterval(() => {
    count += Math.floor(Math.random() * 8) + 4;
    if (count > 100) count = 100;

    if (counterEl) counterEl.textContent = `${count.toString().padStart(2, '0')}%`;
    if (barEl) barEl.style.width = `${count}%`;

    if (count === 100) {
      clearInterval(loadInterval);
      setTimeout(() => {
        if (preloader) preloader.classList.add('loaded');
        initScrollAnimations();
      }, 350);
    }
  }, 40);

  // 2. CUSTOM CURSOR WITH SPRING PHYSICS
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
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    if (cursorFollower) {
      cursorFollower.style.left = `${followerX}px`;
      cursorFollower.style.top = `${followerY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover states on interactables
  const hoverables = document.querySelectorAll('a, button, .project-media-wrapper, .blog-card, .skill-card, input, textarea');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => cursorFollower && cursorFollower.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursorFollower && cursorFollower.classList.remove('hovered'));
  });

  window.addEventListener('mousedown', () => cursorFollower && cursorFollower.classList.add('clicking'));
  window.addEventListener('mouseup', () => cursorFollower && cursorFollower.classList.remove('clicking'));

  // 3. MAGNETIC BUTTONS (PHYSICAL PULL)
  const magneticElements = document.querySelectorAll('[data-magnetic]');
  magneticElements.forEach(elem => {
    elem.addEventListener('mousemove', (e) => {
      const rect = elem.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      elem.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    elem.addEventListener('mouseleave', () => {
      elem.style.transform = 'translate(0px, 0px)';
      elem.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });

    elem.addEventListener('mouseenter', () => {
      elem.style.transition = 'none';
    });
  });

  // 4. NAVBAR SCROLL EFFECT
  const navbar = document.querySelector('.modern-nav');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 5. 3D TILT EFFECT ON PROJECT CARDS
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

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

  // 6. DHAKA LIVE TIME (UTC+6)
  function updateDhakaTime() {
    const timeEl = document.getElementById('live-dhaka-time');
    if (!timeEl) return;

    const options = {
      timeZone: 'Asia/Dhaka',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const now = new Intl.DateTimeFormat('en-US', options).format(new Date());
    timeEl.textContent = `${now} (GMT+6)`;
  }
  updateDhakaTime();
  setInterval(updateDhakaTime, 1000);

  // 7. COPY EMAIL TO CLIPBOARD WITH TOAST
  const copyEmailBtn = document.getElementById('copy-email-trigger');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'sajjadmahmudsuton@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email copied to clipboard: ' + email);
      }).catch(() => {
        showToast('Email: sajjadmahmudsuton@gmail.com');
      });
    });
  }

  function showToast(message) {
    const existing = document.querySelector('.custom-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #B7FF5A;
      color: #08090B;
      padding: 12px 24px;
      border-radius: 9999px;
      font-family: 'Space Grotesk', monospace;
      font-size: 13px;
      font-weight: 700;
      z-index: 100000;
      box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 20px rgba(183, 255, 90, 0.4);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);

    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // 8. CONTACT FORM WITH GENUINELY FREE EMAILJS INTEGRATION
  const contactForm = document.getElementById('modern-contact-form');
  if (contactForm && typeof emailjs !== 'undefined') {
    const EMAILJS_PUBLIC_KEY = 'jt_E_2wOZ0XhwSTyF';
    const EMAILJS_SERVICE_ID = 'service_sajjad';
    const EMAILJS_TEMPLATE_ID = 'template_wwymg5f';
    const EMAILJS_AUTO_REPLY_TEMPLATE_ID = 'template_891ymr7';

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (e) {}

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
      submitBtn.disabled = true;

      const templateParams = {
        from_name: document.getElementById('form-name').value,
        from_email: document.getElementById('form-email').value,
        subject: document.getElementById('form-subject').value || 'Portfolio Contact Inquiry',
        message: document.getElementById('form-message').value,
        to_email: 'sajjadmahmudsuton@gmail.com',
        time: new Date().toLocaleString()
      };

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
          emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTO_REPLY_TEMPLATE_ID, templateParams).catch(() => {});
          if (window.SajjadAnalytics) window.SajjadAnalytics.logContactSubmission();

          showToast('✓ Message transmitted successfully! Sajjad will respond shortly.');
          contactForm.reset();
        })
        .catch((err) => {
          console.error('Email error:', err);
          showToast('Notice: Direct transmission failed. Please email sajjadmahmudsuton@gmail.com');
        })
        .finally(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // 9. MOBILE MENU DRAWER TOGGLE
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // 10. GSAP SCROLL ANIMATIONS
  function initScrollAnimations() {
    if (typeof gsap === 'undefined') return;

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero content reveal
    gsap.from('.hero-content > *', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });

    // Reveal on scroll sections
    gsap.utils.toArray('.section').forEach(sec => {
      gsap.from(sec.querySelectorAll('.section-head, .about-grid, .projects-container, .skills-grid, .timeline-grid, .blog-grid, .contact-wrapper'), {
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out'
      });
    });
  }
});

