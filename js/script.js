/* ============================================
   PORTFOLIO WEBSITE - MAIN JAVASCRIPT
   Handles animations, interactivity, and form validation
   ============================================ */

// ==========================================
// 1. DOM CONTENT LOADED - INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initNavbar();
    initScrollAnimations();
    initParticles();
    initProjectFilters();
    initContactForm();
    initSmoothScroll();
    initThemeToggle();
});

// ==========================================
// THEME TOGGLE FUNCTIONALITY
// ==========================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Add transition class for smooth color change
            html.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Remove transition after animation
            setTimeout(() => {
                html.style.transition = '';
            }, 300);
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (theme === 'light') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
}

// ==========================================
// 2. NAVBAR FUNCTIONALITY
// ==========================================

/**
 * Initialize navbar - scroll effects and mobile menu
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect - adds shadow and reduces padding
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    });

    // Set active nav link based on current page
    setActiveNavLink();
}

/**
 * Set active class on current page's nav link
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==========================================
// 3. SCROLL ANIMATIONS (Fade-in on scroll)
// ==========================================

/**
 * Initialize Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');

    // Intersection Observer options
    const observerOptions = {
        root: null,              // Use viewport as root
        rootMargin: '0px',
        threshold: 0.1           // Trigger when 10% of element is visible
    };

    // Create observer
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ==========================================
// 4. PARTICLE BACKGROUND (Hero Section)
// ==========================================

/**
 * Initialize particle animation on canvas
 */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }

    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            // Gradient colors: teal to purple
            this.color = Math.random() > 0.5 ? 
                `rgba(20, 184, 166, ${this.opacity})` : 
                `rgba(168, 85, 247, ${this.opacity})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Create particles
    function createParticles() {
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        particles = [];
        for (let i = 0; i < Math.min(particleCount, 100); i++) {
            particles.push(new Particle());
        }
    }

    // Draw connections between nearby particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.2;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(20, 184, 166, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', function() {
        resizeCanvas();
        createParticles();
    });

    // Pause animation when tab is not visible (performance)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
}

// ==========================================
// 5. PROJECT FILTER FUNCTIONALITY
// ==========================================

/**
 * Initialize project filtering on projects page
 */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Get filter category
            const filter = this.getAttribute('data-filter');

            // Filter projects with animation
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // Trigger reflow for animation
                    void card.offsetWidth;
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ==========================================
// 6. CONTACT FORM VALIDATION
// ==========================================

/**
 * Initialize contact form validation and submission
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const fields = {
        name: {
            element: document.getElementById('name'),
            validate: (value) => value.trim().length >= 2,
            message: 'Please enter your name (at least 2 characters)'
        },
        email: {
            element: document.getElementById('email'),
            validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Please enter a valid email address'
        },
        subject: {
            element: document.getElementById('subject'),
            validate: (value) => value.trim().length >= 3,
            message: 'Please enter a subject (at least 3 characters)'
        },
        message: {
            element: document.getElementById('message'),
            validate: (value) => value.trim().length >= 10,
            message: 'Please enter a message (at least 10 characters)'
        }
    };

    // Real-time validation on blur
    Object.keys(fields).forEach(fieldName => {
        const field = fields[fieldName];
        if (field.element) {
            field.element.addEventListener('blur', function() {
                validateField(fieldName, field);
            });

            // Remove error on input
            field.element.addEventListener('input', function() {
                const formGroup = this.closest('.form-group');
                if (formGroup) {
                    formGroup.classList.remove('error');
                }
            });
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;

        // Validate all fields
        Object.keys(fields).forEach(fieldName => {
            const field = fields[fieldName];
            if (!validateField(fieldName, field)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Get form data
            const name = fields.name.element.value.trim();
            const email = fields.email.element.value.trim();
            const subject = fields.subject.element.value.trim();
            const message = fields.message.element.value.trim();

            // Create mailto link with form data
            const mailtoEmail = 'sajjadmahmudsuton@gmail.com';
            const mailtoSubject = encodeURIComponent(subject);
            const mailtoBody = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            );
            
            const mailtoLink = `mailto:${mailtoEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
            
            // Create a temporary anchor and click it (most reliable method)
            const tempLink = document.createElement('a');
            tempLink.href = mailtoLink;
            tempLink.style.display = 'none';
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);

            // Show success message with email link as backup
            const successMessage = document.querySelector('.form-success');
            if (successMessage) {
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 10px; color: var(--gradient-teal);"></i>
                    <h4>Ready to Send!</h4>
                    <p>Your email client should open. If it doesn't, <a href="${mailtoLink}" style="color: var(--gradient-teal); text-decoration: underline;">click here to send email</a></p>
                    <p style="margin-top: 10px; font-size: 0.9rem;">Or copy: <strong>sajjadmahmudsuton@gmail.com</strong></p>
                `;
                successMessage.classList.add('show');
            }

            // Reset form
            form.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage?.classList.remove('show');
            }, 5000);

            console.log('Form submitted - opening email client!');
        }
    });

    /**
     * Validate a single field
     */
    function validateField(fieldName, field) {
        if (!field.element) return true;

        const value = field.element.value;
        const formGroup = field.element.closest('.form-group');
        const errorElement = formGroup?.querySelector('.error-message');

        if (!field.validate(value)) {
            formGroup?.classList.add('error');
            if (errorElement) {
                errorElement.textContent = field.message;
            }
            return false;
        } else {
            formGroup?.classList.remove('error');
            return true;
        }
    }
}

// ==========================================
// 7. SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// 8. UTILITY FUNCTIONS
// ==========================================

/**
 * Debounce function to limit execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit execution to once per interval
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean}
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ==========================================
// 9. TYPING EFFECT (Optional - for hero)
// ==========================================

/**
 * Create typing effect for text
 * @param {HTMLElement} element - Element to type into
 * @param {string[]} texts - Array of texts to type
 * @param {number} speed - Typing speed in ms
 */
function typeWriter(element, texts, speed = 100) {
    if (!element) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function type() {
        const fullText = texts[textIndex];

        if (isDeleting) {
            currentText = fullText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = fullText.substring(0, charIndex + 1);
            charIndex++;
        }

        element.textContent = currentText;

        let typeSpeed = speed;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === fullText.length) {
            // Pause at end of word
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// Initialize typing effect if element exists
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const texts = ['Web Developer', 'UI/UX Designer', 'Creative Thinker'];
        typeWriter(typingElement, texts, 100);
    }
});

// ==========================================
// 10. BACK TO TOP BUTTON (Optional)
// ==========================================

/**
 * Create and handle back to top button
 */
function initBackToTop() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);

    // Add styles dynamically
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #14b8a6, #a855f7);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;

    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', initBackToTop);
// ==========================================
// 9. CV DOWNLOAD FUNCTIONALITY
// ==========================================

/**
 * Download CV - Opens CV page in new tab for printing/downloading
 */
function downloadCV(event) {
    if (event) {
        event.preventDefault();
    }
    
    // Open CV page in new window for print/download
    const cvWindow = window.open('assets/cv/cv.html', '_blank');
    
    // Show notification
    showDownloadNotification();
}

/**
 * Show download notification
 */
function showDownloadNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cv-download-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <div class="notification-text">
                <strong>CV Opening!</strong>
                <span>Use Ctrl+P or Print button to save as PDF</span>
            </div>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: linear-gradient(135deg, #14b8a6, #a855f7);
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(20, 184, 166, 0.4);
        z-index: 10000;
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        font-family: 'Poppins', sans-serif;
    `;
    
    const contentStyle = `
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    
    document.body.appendChild(notification);
    notification.querySelector('.notification-content').style.cssText = contentStyle;
    notification.querySelector('.notification-text').style.cssText = 'display: flex; flex-direction: column; gap: 2px;';
    notification.querySelector('.notification-text span').style.cssText = 'font-size: 0.85rem; opacity: 0.9;';
    notification.querySelector('i').style.cssText = 'font-size: 1.5rem;';
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 4000);
}

// Add click handlers to all CV download buttons
document.addEventListener('DOMContentLoaded', function() {
    const cvButtons = document.querySelectorAll('.btn-download, a[href*="resume.pdf"], a[href*="cv"]');
    
    cvButtons.forEach(button => {
        if (button.hasAttribute('download') || button.classList.contains('btn-download')) {
            button.addEventListener('click', downloadCV);
            button.removeAttribute('download');
            button.setAttribute('href', '#');
        }
    });
    
    // Initialize DateTime Widget
    initDateTimeWidget();
});

// ==========================================
// COMPACT DATE TIME WITH POPUP CALENDAR
// ==========================================
function initDateTimeWidget() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const ampmEl = document.getElementById('ampm');
    const dayNameEl = document.getElementById('dayName');
    const dayNumEl = document.getElementById('dayNum');
    const monthNameEl = document.getElementById('monthName');
    const yearEl = document.getElementById('year');
    const calendarMonthEl = document.getElementById('calendarMonth');
    const calendarDaysEl = document.getElementById('calendarDays');
    const dateToggle = document.getElementById('dateToggle');
    const calendarPopup = document.getElementById('calendarPopup');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    
    // Check if elements exist
    if (!hoursEl || !minutesEl || !secondsEl) return;
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    let currentCalendarDate = new Date();
    
    function updateDateTime() {
        const now = new Date();
        
        // Time (12-hour format)
        let hours = now.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
        ampmEl.textContent = ampm;
        
        // Date (compact)
        dayNameEl.textContent = '(' + daysShort[now.getDay()] + ')';
        dayNumEl.textContent = now.getDate().toString().padStart(2, '0');
        monthNameEl.textContent = monthsShort[now.getMonth()];
        yearEl.textContent = now.getFullYear();
    }
    
    function generateCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const today = new Date();
        
        // Update header
        calendarMonthEl.textContent = months[month] + ' ' + year;
        
        // First day of the month
        const firstDay = new Date(year, month, 1).getDay();
        // Days in current month
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        // Days in previous month
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        
        let html = '';
        
        // Previous month days
        for (let i = firstDay - 1; i >= 0; i--) {
            html += `<span class="other-month">${daysInPrevMonth - i}</span>`;
        }
        
        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
            const isToday = i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
            if (isToday) {
                html += `<span class="today">${i}</span>`;
            } else {
                html += `<span>${i}</span>`;
            }
        }
        
        // Next month days
        const totalCells = firstDay + daysInMonth;
        const remainingCells = totalCells <= 35 ? 35 - totalCells : 42 - totalCells;
        for (let i = 1; i <= remainingCells; i++) {
            html += `<span class="other-month">${i}</span>`;
        }
        
        calendarDaysEl.innerHTML = html;
    }
    
    // Toggle calendar popup
    if (dateToggle && calendarPopup) {
        dateToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            dateToggle.classList.toggle('active');
            calendarPopup.classList.toggle('active');
            if (calendarPopup.classList.contains('active')) {
                currentCalendarDate = new Date();
                generateCalendar(currentCalendarDate);
            }
        });
        
        // Close popup when clicking outside
        document.addEventListener('click', function(e) {
            if (!calendarPopup.contains(e.target) && !dateToggle.contains(e.target)) {
                dateToggle.classList.remove('active');
                calendarPopup.classList.remove('active');
            }
        });
        
        // Previous month
        if (prevMonthBtn) {
            prevMonthBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
                generateCalendar(currentCalendarDate);
            });
        }
        
        // Next month
        if (nextMonthBtn) {
            nextMonthBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
                generateCalendar(currentCalendarDate);
            });
        }
    }
    
    // Initial update
    updateDateTime();
    generateCalendar(new Date());
    
    // Update time every second
    setInterval(updateDateTime, 1000);
}