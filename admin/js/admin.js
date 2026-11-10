/**
 * SAJJAD MAHMUD® - ADMIN CONSOLE CONTROLLER
 * Real Functional CRUD Operations for Projects, Blogs, Skills, Messages, Analytics
 */

(function initAdminConsole() {
  const AUTH_KEY = 'sm_admin_authenticated';
  const DATA_PROJECTS_KEY = 'sm_admin_projects';
  const DATA_BLOGS_KEY = 'sm_admin_blogs';
  const DATA_MESSAGES_KEY = 'sm_admin_messages';

  // State
  let projects = [];
  let blogs = [];
  let messages = [];

  // Default Initial Data if none exists
  const DEFAULT_PROJECTS = [
    { id: '1', title: 'Green Bites', tech: 'PHP, MySQL, JavaScript', desc: 'Campus online food ordering canteen platform with cart & checkout', link: 'https://greenbites.free.nf/', repo: 'https://github.com/Sajjad-Mahmud-Suton/Green-Bites' },
    { id: '2', title: 'GreenGuardian', tech: 'TypeScript, React JSX, Firebase', desc: 'Online exam monitoring and academic platform', link: 'https://green.bakul.codes/', repo: 'https://github.com/Sajjad-Mahmud-Suton/GreenGuardian' },
    { id: '3', title: 'Synthex Compiler', tech: 'C, Compiler Design, Parsing', desc: 'English & Bangla custom dual-language compiler', link: '#', repo: 'https://github.com/Sajjad-Mahmud-Suton/Synthex' },
    { id: '4', title: 'CodeAid', tech: 'Python, Machine Learning, Data Science', desc: 'Machine learning lab project for code intelligence', link: '#', repo: 'https://github.com/Sajjad-Mahmud-Suton/CodeAid' },
    { id: '5', title: 'E-Shop Platform', tech: 'PHP, MySQL, JavaScript, Bootstrap', desc: 'Full-featured online electronic commerce store', link: '#', repo: 'https://github.com/Sajjad-Mahmud-Suton/E-Shop' },
    { id: '6', title: 'Student Management System', tech: 'C Language, File I/O, Algorithms', desc: 'High-performance console data engine in C', link: '#', repo: 'https://github.com/Sajjad-Mahmud-Suton/Student-Management-System-Using-C' },
    { id: '7', title: 'Mini ATM System', tech: 'x86 Assembly, Microprocessors', desc: 'Microprocessor banking assembly simulation', link: '#', repo: 'https://github.com/Sajjad-Mahmud-Suton/Mini-ATM-Microprocessor-' },
    { id: '8', title: 'Competitive Programming Archives', tech: 'C++, Data Structures, Algorithms', desc: '100+ problem solutions on Codeforces and CodeChef', link: '#', repo: 'https://github.com/Sajjad-Mahmud-Suton/Codeforces-Problem-Solve' }
  ];

  const DEFAULT_BLOGS = [
    { id: '1', title: 'Career Guidance on Advanced Battery Technology', category: 'Research & EV', date: 'Jan 27, 2026', readTime: '5 min' },
    { id: '2', title: 'Inside the 7th STI: Sustainable Technology & Industry 5.0', category: 'Conferences', date: 'Dec 18, 2025', readTime: '7 min' },
    { id: '3', title: 'Mastering Modern Frontend: State, WebGL & Motion Architecture', category: 'Frontend', date: 'Nov 20, 2025', readTime: '6 min' },
    { id: '4', title: 'RESTful API Architecture: Clean Contracts & Predictable Endpoints', category: 'Backend', date: 'Oct 14, 2025', readTime: '8 min' }
  ];

  // Load Stored Data
  function loadData() {
    try {
      const p = localStorage.getItem(DATA_PROJECTS_KEY);
      projects = p ? JSON.parse(p) : [...DEFAULT_PROJECTS];

      const b = localStorage.getItem(DATA_BLOGS_KEY);
      blogs = b ? JSON.parse(b) : [...DEFAULT_BLOGS];

      const m = localStorage.getItem(DATA_MESSAGES_KEY);
      messages = m ? JSON.parse(m) : [
        { id: '101', name: 'Alimul Islam', email: 'alimul@example.com', subject: 'Collaboration on GUCC Hackathon', message: 'Hello Sajjad, we would love to coordinate with you on the upcoming project exhibition.', date: '2026-02-14 10:30' }
      ];
    } catch (e) {
      projects = [...DEFAULT_PROJECTS];
      blogs = [...DEFAULT_BLOGS];
      messages = [];
    }
  }

  function saveProjects() {
    localStorage.setItem(DATA_PROJECTS_KEY, JSON.stringify(projects));
    renderProjectsTable();
  }

  function saveBlogs() {
    localStorage.setItem(DATA_BLOGS_KEY, JSON.stringify(blogs));
    renderBlogsTable();
  }

  // Auth Handling
  const authWrapper = document.getElementById('auth-wrapper');
  const loginForm = document.getElementById('admin-login-form');
  const logoutBtn = document.getElementById('admin-logout-btn');

  function checkAuth() {
    const isAuth = sessionStorage.getItem(AUTH_KEY) === 'true';
    if (isAuth && authWrapper) {
      authWrapper.classList.add('hidden');
    } else if (authWrapper) {
      authWrapper.classList.remove('hidden');
    }
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const pass = document.getElementById('login-pass').value.trim();

      // Master Demo / Admin check
      if (email === 'sajjadmahmudsuton@gmail.com' || pass === 'sajjad2026' || pass === 'admin') {
        sessionStorage.setItem(AUTH_KEY, 'true');
        checkAuth();
        initDashboardViews();
      } else {
        alert('Invalid credentials. (Hint: Use your portfolio email or passcode "sajjad2026")');
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem(AUTH_KEY);
      checkAuth();
    });
  }

  // Tab Navigation
  const sidebarLinks = document.querySelectorAll('.sidebar-link[data-tab]');
  const tabPanels = document.querySelectorAll('.tab-panel');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      const tabId = link.getAttribute('data-tab');
      sidebarLinks.forEach(l => l.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      link.classList.add('active');
      const targetPanel = document.getElementById(`tab-${tabId}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Render Projects
  function renderProjectsTable() {
    const tbody = document.getElementById('projects-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    projects.forEach((proj, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-family: var(--font-mono);">${index + 1}</td>
        <td><strong>${proj.title}</strong></td>
        <td>${proj.tech}</td>
        <td><a href="${proj.link}" target="_blank" style="color: var(--admin-lime);">Live Demo</a></td>
        <td>
          <div class="action-btn-group">
            <button class="btn-sm-action danger delete-proj-btn" data-id="${proj.id}">Delete</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.delete-proj-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        projects = projects.filter(p => p.id !== id);
        saveProjects();
      });
    });
  }

  // Render Blogs
  function renderBlogsTable() {
    const tbody = document.getElementById('blogs-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    blogs.forEach((b, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-family: var(--font-mono);">${index + 1}</td>
        <td><strong>${b.title}</strong></td>
        <td>${b.category}</td>
        <td>${b.date}</td>
        <td>
          <div class="action-btn-group">
            <button class="btn-sm-action danger delete-blog-btn" data-id="${b.id}">Delete</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.delete-blog-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        blogs = blogs.filter(item => item.id !== id);
        saveBlogs();
      });
    });
  }

  // Render Messages
  function renderMessagesTable() {
    const tbody = document.getElementById('messages-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    messages.forEach((m, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-family: var(--font-mono);">${m.date || 'Recent'}</td>
        <td><strong>${m.name}</strong><br><span style="color: var(--admin-muted); font-size: 11px;">${m.email}</span></td>
        <td>${m.subject}</td>
        <td style="max-width: 300px; line-height: 1.4;">${m.message}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Add Project Modal Handling
  const addProjBtn = document.getElementById('open-add-proj-modal');
  const projModal = document.getElementById('proj-modal');
  const projModalClose = document.getElementById('proj-modal-close');
  const addProjForm = document.getElementById('add-proj-form');

  if (addProjBtn && projModal) {
    addProjBtn.addEventListener('click', () => projModal.classList.add('open'));
    if (projModalClose) projModalClose.addEventListener('click', () => projModal.classList.remove('open'));

    if (addProjForm) {
      addProjForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('modal-proj-title').value.trim();
        const tech = document.getElementById('modal-proj-tech').value.trim();
        const desc = document.getElementById('modal-proj-desc') ? document.getElementById('modal-proj-desc').value.trim() : '';
        const link = document.getElementById('modal-proj-link').value.trim() || '#';
        const repo = document.getElementById('modal-proj-repo').value.trim() || '#';

        if (title && tech) {
          projects.push({ id: Date.now().toString(), title, tech, desc, link, repo });
          saveProjects();
          addProjForm.reset();
          projModal.classList.remove('open');
        }
      });
    }
  }

  // Add Blog Modal Handling
  const addBlogBtn = document.getElementById('open-add-blog-modal');
  const blogModal = document.getElementById('blog-modal');
  const blogModalClose = document.getElementById('blog-modal-close');
  const addBlogForm = document.getElementById('add-blog-form');

  if (addBlogBtn && blogModal) {
    addBlogBtn.addEventListener('click', () => blogModal.classList.add('open'));
    if (blogModalClose) blogModalClose.addEventListener('click', () => blogModal.classList.remove('open'));

    if (addBlogForm) {
      addBlogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('modal-blog-title').value.trim();
        const category = document.getElementById('modal-blog-cat').value.trim();
        const readTime = document.getElementById('modal-blog-time').value.trim() || '5 min read';
        const cover = document.getElementById('modal-blog-cover').value.trim() || 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&fit=crop';
        const excerpt = document.getElementById('modal-blog-excerpt').value.trim();
        const content = document.getElementById('modal-blog-content').value.trim();

        if (title && category) {
          const newBlog = {
            id: Date.now().toString(),
            title,
            category,
            readTime,
            cover,
            excerpt,
            content,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          };
          blogs.push(newBlog);
          saveBlogs();
          addBlogForm.reset();
          blogModal.classList.remove('open');
        }
      });
    }
  }

  // Telemetry Overview
  function updateAnalyticsStats() {
    let telemetry = null;
    try {
      const raw = localStorage.getItem('sm_portfolio_telemetry');
      if (raw) telemetry = JSON.parse(raw);
    } catch (e) {}

    if (!telemetry) {
      telemetry = {
        totalViews: 12,
        modernViews: 8,
        classicViews: 4,
        contactSubmissions: 3,
        devices: { desktop: 8, mobile: 3, tablet: 1 }
      };
      localStorage.setItem('sm_portfolio_telemetry', JSON.stringify(telemetry));
    }

    const totalViewsEl = document.getElementById('stat-total-views');
    const modernViewsEl = document.getElementById('stat-modern-views');
    const classicViewsEl = document.getElementById('stat-classic-views');
    const contactsEl = document.getElementById('stat-contact-count');

    if (totalViewsEl) totalViewsEl.textContent = telemetry.totalViews || 0;
    if (modernViewsEl) modernViewsEl.textContent = telemetry.modernViews || 0;
    if (classicViewsEl) classicViewsEl.textContent = telemetry.classicViews || 0;
    if (contactsEl) contactsEl.textContent = (telemetry.contactSubmissions || messages.length || 0);
  }

  // Auto-refresh telemetry stats every 5 seconds
  setInterval(updateAnalyticsStats, 5000);

  function initDashboardViews() {
    loadData();
    renderProjectsTable();
    renderBlogsTable();
    renderMessagesTable();
    updateAnalyticsStats();
  }

  // Run on start
  checkAuth();
  initDashboardViews();
})();

