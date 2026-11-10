/**
 * SAJJAD MAHMUD® - FREE TELEMETRY & ANALYTICS
 * 100% Free | Privacy-Preserving | Client-Side Aggregation + Firebase Event Logging
 */

const SajjadAnalytics = (function() {
  const STORAGE_KEY = 'sm_portfolio_telemetry';

  // Initialize or load existing metrics
  function getLocalData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          totalViews: parsed.totalViews || 0,
          modernViews: parsed.modernViews || 0,
          classicViews: parsed.classicViews || 0,
          projectClicks: parsed.projectClicks || {},
          blogViews: parsed.blogViews || {},
          contactSubmissions: parsed.contactSubmissions || 0,
          devices: parsed.devices || { desktop: 0, mobile: 0, tablet: 0 },
          firstSeen: parsed.firstSeen || new Date().toISOString(),
          lastSeen: parsed.lastSeen || new Date().toISOString()
        };
      }
    } catch (e) {}

    return {
      totalViews: 0,
      modernViews: 0,
      classicViews: 0,
      projectClicks: {},
      blogViews: {},
      contactSubmissions: 0,
      devices: { desktop: 0, mobile: 0, tablet: 0 },
      firstSeen: new Date().toISOString(),
      lastSeen: new Date().toISOString()
    };
  }

  function saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  // Detect Device Category
  function getDeviceType() {
    const width = window.innerWidth;
    if (width <= 768) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
  }

  // Log Page View
  function logPageView(version = null) {
    if (!version) {
      const path = window.location.pathname.toLowerCase();
      const isClassic = path === '/' || path.endsWith('index.html') || path.includes('classic') || path.includes('/src/');
      version = isClassic ? 'classic' : 'modern';
    }

    const data = getLocalData();
    data.totalViews = (data.totalViews || 0) + 1;
    if (version === 'modern') {
      data.modernViews = (data.modernViews || 0) + 1;
    } else {
      data.classicViews = (data.classicViews || 0) + 1;
    }

    const device = getDeviceType();
    data.devices[device] = (data.devices[device] || 0) + 1;
    data.lastSeen = new Date().toISOString();

    saveData(data);

    // If Firebase Analytics is available globally, log to it
    if (typeof firebase !== 'undefined' && firebase.analytics) {
      try {
        firebase.analytics().logEvent('page_view', { page_title: `Sajjad Portfolio - ${version}` });
      } catch (err) {}
    }

    return data;
  }

  // Log Project Click
  function logProjectClick(projectId) {
    const data = getLocalData();
    data.projectClicks[projectId] = (data.projectClicks[projectId] || 0) + 1;
    saveData(data);

    if (typeof firebase !== 'undefined' && firebase.analytics) {
      try {
        firebase.analytics().logEvent('select_content', { content_type: 'project', item_id: projectId });
      } catch (err) {}
    }
  }

  // Log Blog Read
  function logBlogRead(blogId) {
    const data = getLocalData();
    data.blogViews[blogId] = (data.blogViews[blogId] || 0) + 1;
    saveData(data);
  }

  // Log Form Submission
  function logContactSubmission() {
    const data = getLocalData();
    data.contactSubmissions = (data.contactSubmissions || 0) + 1;
    saveData(data);
  }

  return {
    logPageView,
    logProjectClick,
    logBlogRead,
    logContactSubmission,
    getMetrics: getLocalData
  };
})();

// Auto-log initial view based on actual page path
document.addEventListener('DOMContentLoaded', () => {
  if (!window._sm_pageview_logged) {
    window._sm_pageview_logged = true;
    const path = window.location.pathname.toLowerCase();
    const isClassic = path === '/' || path.endsWith('index.html') || path.includes('classic') || path.includes('/src/');
    SajjadAnalytics.logPageView(isClassic ? 'classic' : 'modern');
  }
});
