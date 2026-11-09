/**
 * SAJJAD MAHMUD® - DYNAMIC BLOG ENGINE
 * Fast, Editorial Reading Experience, Search, Categories, Reading Time & Reader Modal
 */

(function initBlogEngine() {
  const DEFAULT_POSTS = [
    {
      id: 'battery-tech-career',
      title: 'Career Guidance on Advanced Battery Technology & Electric Mobility',
      category: 'Research & Innovation',
      date: 'January 27, 2026',
      readTime: '5 min read',
      cover: '/src/image/Carrer_Development.png',
      excerpt: 'Key takeaways from the session facilitated by Dr. Rahul Reza Chowdhury, US-based EV researcher, hosted at Green University Seminar Hall.',
      content: `
        <h3>Exploring Global Research in Clean Energy & Electric Vehicles</h3>
        <p>On January 27, 2026, I had the privilege of attending a specialized <strong>Career Guidance Session</strong> on <em>Advanced Battery Technology</em> held at the Green University of Bangladesh Seminar Hall. The keynote speaker and facilitator was <strong>Dr. Rahul Reza Chowdhury</strong>, an accomplished research engineer working on next-generation battery architectures for electric vehicles in the United States.</p>
        
        <h4>Core Highlights from the Session:</h4>
        <p>1. <strong>Energy Density & Solid-State Batteries:</strong> Dr. Chowdhury elaborated on the ongoing transition from traditional lithium-ion chemistries to solid-state electrolytes, significantly improving thermal runaway protection and charging speeds.</p>
        <p>2. <strong>Opportunities for CSE & Engineering Students:</strong> Software and embedded systems play a paramount role in modern Battery Management Systems (BMS), including state-of-charge (SoC) estimation algorithms, predictive thermal control, and telemetry pipelines.</p>
        <p>3. <strong>Building a Research Career Abroad:</strong> Practical advice was shared on pursuing graduate research, publishing impactful papers, and cultivating independent problem-solving habits during undergraduate years.</p>
        
        <p>Attending this session reinforced my conviction that software engineering and clean-tech innovation are converging rapidly. Developing robust computational models and intelligent hardware-software interfaces will define the next decade of transport technology.</p>
      `
    },
    {
      id: 'sti-7th-industry-5',
      title: 'Inside the 7th STI: Sustainable Technology & Industry 5.0',
      category: 'Conference & Leadership',
      date: 'December 18, 2025',
      readTime: '7 min read',
      cover: '/src/image/7thSTI.png',
      excerpt: 'Reflections from volunteering and organizing at the 7th International Conference on Sustainable Technologies for Industry 5.0.',
      content: `
        <h3>Human-Centric Engineering and Sustainable Systems</h3>
        <p>The <strong>7th International Conference on Sustainable Technologies for Industry (STI 2025)</strong> brought together global academics, researchers, and tech pioneers to discuss sustainable digital transformation. Serving as an official volunteer, I had the opportunity to oversee session management and interact directly with keynote contributors.</p>

        <h4>What is Industry 5.0?</h4>
        <p>While Industry 4.0 was centered around automation, smart factories, and IoT, <strong>Industry 5.0 brings humans back into the center</strong> — focusing on sustainability, resilience, and ethical technology adoption.</p>

        <p>Key takeaways included sustainable cloud computing architectures, green AI algorithms with reduced inference footprints, and decentralized verifiable credentials for students and engineers.</p>
      `
    },
    {
      id: 'modern-frontend-architecture',
      title: 'Mastering Modern Frontend: State, WebGL & Motion Architecture',
      category: 'Web Development',
      date: 'November 20, 2025',
      readTime: '6 min read',
      cover: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&fit=crop',
      excerpt: 'How to build butter-smooth, 60fps creative web experiences without sacrificing mobile battery life and accessibility.',
      content: `
        <h3>Architecting for Emotion and Performance</h3>
        <p>Building high-end creative websites often creates a tension between visual spectacle and web performance. The goal of creative development is not simply adding Three.js meshes to a canvas, but creating a harmonious system where typography, spatial depth, and buttery 60fps motion tell a cohesive story.</p>

        <h4>Key Principles for Creative Web Engineering:</h4>
        <p>1. <strong>Power-Aware Rendering:</strong> Always observe WebGL canvas visibility using <code>IntersectionObserver</code> to halt GPU loops when offscreen.</p>
        <p>2. <strong>Non-blocking Animation Pipelines:</strong> Use GSAP with will-change properties applied strictly during active tweens to prevent memory bloating.</p>
        <p>3. <strong>Fluid Typography Systems:</strong> Combine CSS <code>clamp()</code> with modern viewport units to eliminate layout jank across breakpoint boundaries.</p>
      `
    },
    {
      id: 'rest-api-clean-architecture',
      title: 'RESTful API Architecture: Clean Contracts & Predictable Endpoints',
      category: 'Backend & Systems',
      date: 'October 14, 2025',
      readTime: '8 min read',
      cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&fit=crop',
      excerpt: 'Best practices for organizing API controllers, validation pipelines, and standardized JSON error structures in Node.js and PHP.',
      content: `
        <h3>Designing Predictable APIs</h3>
        <p>Whether building microservices in Node.js or monorepos in PHP and Express, an API contract is only as strong as its consistency. Consistent error schema, proper HTTP status codes, and idempotency guarantees build confidence in consumer applications.</p>

        <p>In this post, we examine structuring request validators, abstracting database access behind repositories, and ensuring rate limiting to protect services against abusive spikes.</p>
      `
    }
  ];

  const blogGrid = document.getElementById('blog-grid');
  const searchInput = document.getElementById('blog-search-input');
  const categoryTabs = document.querySelectorAll('.blog-cat-tab');
  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('article-modal-body');
  const modalClose = document.getElementById('article-modal-close');

  let currentCategory = 'all';
  let searchQuery = '';

  // Render Post Card
  function renderPosts() {
    if (!blogGrid) return;
    blogGrid.innerHTML = '';

    const filtered = DEFAULT_POSTS.filter(post => {
      const matchesCat = currentCategory === 'all' || post.category.toLowerCase().includes(currentCategory.toLowerCase());
      const matchesSearch = post.title.toLowerCase().includes(searchQuery) || post.excerpt.toLowerCase().includes(searchQuery);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      blogGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: var(--text-muted); font-family: var(--font-mono);">No articles found matching your query.</div>`;
      return;
    }

    filtered.forEach(post => {
      const card = document.createElement('div');
      card.className = 'blog-card';
      card.setAttribute('data-id', post.id);

      card.innerHTML = `
        <div class="blog-thumbnail-wrap">
          <img src="${post.cover}" alt="${post.title}" class="blog-thumbnail" loading="lazy">
        </div>
        <div class="blog-card-body">
          <div class="blog-meta-row">
            <span>${post.date}</span>
            <span>${post.readTime}</span>
          </div>
          <h4 class="blog-card-title">${post.title}</h4>
          <p class="blog-excerpt">${post.excerpt}</p>
          <div class="blog-card-footer">
            <span>Read Article</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openArticle(post));
      blogGrid.appendChild(card);
    });
  }

  // Open Modal Reader
  function openArticle(post) {
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div style="font-family: var(--font-mono); font-size: 12px; color: var(--accent-lime); margin-bottom: 12px; text-transform: uppercase;">
        ${post.category} • ${post.date} • ${post.readTime}
      </div>
      <h2 style="font-family: var(--font-display); font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; line-height: 1.15; margin-bottom: 24px;">
        ${post.title}
      </h2>
      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 32px; max-height: 400px;">
        <img src="${post.cover}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="font-size: 1.1rem; line-height: 1.8; color: var(--text-main); display: flex; flex-direction: column; gap: 20px;">
        ${post.content}
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close Modal
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Search Filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderPosts();
    });
  }

  // Category Tabs
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-cat') || 'all';
      renderPosts();
    });
  });

  // Initial render
  renderPosts();
})();

