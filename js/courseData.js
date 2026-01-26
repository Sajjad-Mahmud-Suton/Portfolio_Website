/* ============================================
   COURSE DATA & RESOURCES - CENTRAL DATA FILE
   ============================================
   
   এই ফাইলে সব course এর information এবং resources আছে।
   নতুন course বা resource add করতে এখানে edit করুন।
   
   Documentation: README-COURSES.md দেখুন
   ============================================ */

// ==========================================
// COURSE METADATA (Course Information)
// ==========================================
// এখানে প্রতিটা course এর basic info আছে
// Key format: 'course-key' (URL এ যেটা ব্যবহার হবে)

const courseMetadata = {
    // ========== SEMESTER 1 ==========
    'physics': {
        semester: 1,
        title: 'Engineering Physics',
        code: 'PHY-101',
        credits: 3,
        description: 'Fundamental physics concepts including mechanics, thermodynamics, and waves.',
        icon: 'fas fa-atom',
        color: '#14b8a6'
    },
    'math': {
        semester: 1,
        title: 'Mathematics',
        code: 'MAT-101',
        credits: 4,
        description: 'Calculus, Linear Algebra, and Mathematical foundations for engineering.',
        icon: 'fas fa-square-root-alt',
        color: '#a855f7'
    },
    'programming': {
        semester: 1,
        title: 'Programming Fundamentals',
        code: 'CSE-101',
        credits: 4,
        description: 'Introduction to C Programming - Learn the basics of programming, algorithms, and problem-solving.',
        icon: 'fas fa-code',
        color: '#38bdf8'
    },
    'chemistry': {
        semester: 1,
        title: 'Engineering Chemistry',
        code: 'CHM-101',
        credits: 3,
        description: 'Chemistry fundamentals including organic, inorganic, and physical chemistry.',
        icon: 'fas fa-vial',
        color: '#f472b6'
    },
    'english': {
        semester: 1,
        title: 'Technical English',
        code: 'ENG-101',
        credits: 2,
        description: 'Technical writing, communication skills, and professional English.',
        icon: 'fas fa-language',
        color: '#fb923c'
    },
    'electrical': {
        semester: 1,
        title: 'Basic Electrical Engineering',
        code: 'EEE-101',
        credits: 3,
        description: 'Electrical circuits, electronics basics, and electrical systems.',
        icon: 'fas fa-bolt',
        color: '#4ade80'
    },
    
    // ========== SEMESTER 2 ==========
    'oop': {
        semester: 2,
        title: 'Object Oriented Programming',
        code: 'CSE-102',
        credits: 4,
        description: 'OOP concepts with C++ including classes, inheritance, polymorphism, and encapsulation.',
        icon: 'fas fa-cubes',
        color: '#a855f7'
    },
    'discrete-math': {
        semester: 2,
        title: 'Discrete Mathematics',
        code: 'MAT-102',
        credits: 3,
        description: 'Logic, sets, relations, functions, graph theory and combinatorics.',
        icon: 'fas fa-project-diagram',
        color: '#14b8a6'
    },
    'digital-logic': {
        semester: 2,
        title: 'Digital Logic Design',
        code: 'CSE-103',
        credits: 3,
        description: 'Boolean algebra, logic gates, combinational and sequential circuits.',
        icon: 'fas fa-microchip',
        color: '#38bdf8'
    },
    'physics2': {
        semester: 2,
        title: 'Physics II',
        code: 'PHY-102',
        credits: 3,
        description: 'Waves, optics, electromagnetism, and modern physics concepts.',
        icon: 'fas fa-wave-square',
        color: '#f472b6'
    },
    'calculus2': {
        semester: 2,
        title: 'Calculus II',
        code: 'MAT-103',
        credits: 3,
        description: 'Differential equations, multivariable calculus, and integration techniques.',
        icon: 'fas fa-infinity',
        color: '#fb923c'
    },
    'data-comm': {
        semester: 2,
        title: 'Data Communication',
        code: 'CSE-104',
        credits: 3,
        description: 'Signals, transmission media, encoding techniques, and communication protocols.',
        icon: 'fas fa-satellite-dish',
        color: '#4ade80'
    },
    'english2': {
        semester: 2,
        title: 'English II',
        code: 'ENG-102',
        credits: 2,
        description: 'Advanced English communication, writing skills, and professional correspondence.',
        icon: 'fas fa-language',
        color: '#e879f9'
    },
    
    // ========== SEMESTER 3 ==========
    'data-structures': {
        semester: 3,
        title: 'Data Structures',
        code: 'CSE-201',
        credits: 4,
        description: 'Arrays, linked lists, stacks, queues, trees, graphs, and hash tables.',
        icon: 'fas fa-layer-group',
        color: '#38bdf8'
    },
    'algorithms': {
        semester: 3,
        title: 'Algorithms',
        code: 'CSE-202',
        credits: 4,
        description: 'Sorting, searching, dynamic programming, greedy algorithms, and complexity analysis.',
        icon: 'fas fa-sitemap',
        color: '#a855f7'
    },
    'computer-arch': {
        semester: 3,
        title: 'Computer Architecture',
        code: 'CSE-203',
        credits: 3,
        description: 'CPU design, memory hierarchy, pipelining, and I/O systems.',
        icon: 'fas fa-memory',
        color: '#14b8a6'
    },
    'statistics': {
        semester: 3,
        title: 'Statistics & Probability',
        code: 'MAT-201',
        credits: 3,
        description: 'Probability theory, statistical distributions, hypothesis testing, and regression.',
        icon: 'fas fa-chart-bar',
        color: '#f472b6'
    },
    'electronics': {
        semester: 3,
        title: 'Electronic Devices',
        code: 'EEE-201',
        credits: 3,
        description: 'Semiconductors, diodes, transistors, amplifiers, and basic analog circuits.',
        icon: 'fas fa-plug',
        color: '#fb923c'
    },
    'economics': {
        semester: 3,
        title: 'Engineering Economics',
        code: 'ECO-201',
        credits: 2,
        description: 'Cost analysis, time value of money, project evaluation, and decision making.',
        icon: 'fas fa-coins',
        color: '#4ade80'
    },
    
    // ========== SEMESTER 4 ==========
    'operating-systems': {
        semester: 4,
        title: 'Operating Systems',
        code: 'CSE-301',
        credits: 4,
        description: 'Process management, memory management, file systems, and synchronization.',
        icon: 'fas fa-desktop',
        color: '#f472b6'
    },
    'computer-networks': {
        semester: 4,
        title: 'Computer Networks',
        code: 'CSE-302',
        credits: 4,
        description: 'TCP/IP, OSI model, routing protocols, and network security basics.',
        icon: 'fas fa-globe',
        color: '#38bdf8'
    },
    'database': {
        semester: 4,
        title: 'Database Systems',
        code: 'CSE-303',
        credits: 4,
        description: 'SQL, ER models, normalization, transactions, and database design.',
        icon: 'fas fa-database',
        color: '#a855f7'
    },
    'toc': {
        semester: 4,
        title: 'Theory of Computation',
        code: 'CSE-304',
        credits: 3,
        description: 'Automata theory, formal languages, Turing machines, and computability.',
        icon: 'fas fa-cogs',
        color: '#14b8a6'
    },
    'numerical': {
        semester: 4,
        title: 'Numerical Methods',
        code: 'MAT-301',
        credits: 3,
        description: 'Root finding, interpolation, numerical integration, and differential equations.',
        icon: 'fas fa-calculator',
        color: '#fb923c'
    },
    'microprocessor': {
        semester: 4,
        title: 'Microprocessor & Interfacing',
        code: 'CSE-305',
        credits: 3,
        description: 'Assembly programming, microprocessor architecture, and hardware interfacing.',
        icon: 'fas fa-microchip',
        color: '#4ade80'
    },
    
    // ========== SEMESTER 5 ==========
    'software-eng': {
        semester: 5,
        title: 'Software Engineering',
        code: 'CSE-401',
        credits: 3,
        description: 'Software development life cycle, agile methodologies, and project management.',
        icon: 'fas fa-project-diagram',
        color: '#fb923c'
    },
    'adv-database': {
        semester: 5,
        title: 'Advanced Database',
        code: 'CSE-402',
        credits: 4,
        description: 'NoSQL databases, transactions, optimization, and advanced SQL.',
        icon: 'fas fa-server',
        color: '#a855f7'
    },
    'web-dev': {
        semester: 5,
        title: 'Web Development',
        code: 'CSE-403',
        credits: 4,
        description: 'HTML, CSS, JavaScript, PHP, and full-stack development.',
        icon: 'fas fa-globe',
        color: '#38bdf8'
    },
    'compiler': {
        semester: 5,
        title: 'Compiler Design',
        code: 'CSE-404',
        credits: 3,
        description: 'Lexical analysis, parsing, semantic analysis, and code generation.',
        icon: 'fas fa-code-branch',
        color: '#14b8a6'
    },
    'graphics': {
        semester: 5,
        title: 'Computer Graphics',
        code: 'CSE-405',
        credits: 3,
        description: '2D/3D graphics, transformations, rendering, and OpenGL basics.',
        icon: 'fas fa-cube',
        color: '#f472b6'
    },
    'management': {
        semester: 5,
        title: 'Management Principles',
        code: 'MGT-401',
        credits: 2,
        description: 'Business management, leadership, organizational behavior, and ethics.',
        icon: 'fas fa-users-cog',
        color: '#4ade80'
    },
    
    // ========== SEMESTER 6 ==========
    'ai': {
        semester: 6,
        title: 'Web Programming',
        code: 'CSE-301',
        credits: 3,
        description: 'Core Concepts of Web Development.',
        icon: 'fas fa-robot',
        color: '#4ade80'
    },
    'ml': {
        semester: 6,
        title: 'Web Programming Lab',
        code: 'CSE-302',
        credits: 1.5,
        description: 'From Logic to Web Apps.',
        icon: 'fas fa-brain',
        color: '#a855f7'
    },
    'adv-web': {
        semester: 6,
        title: 'Microprocessors, Microcontrollers and Embedded Systems',
        code: 'CSE-303',
        credits: 3,
        description: 'Processor Architecture & Interfacing.',
        icon: 'fas fa-laptop-code',
        color: '#38bdf8'
    },
    'image-processing': {
        semester: 6,
        title: 'Microprocessors, Microcontrollers and Embedded Systems Lab',
        code: 'CSE-304',
        credits: 1,
        description: 'Microcontroller Architecture & Programming.',
        icon: 'fas fa-image',
        color: '#14b8a6'
    },
    'mobile-dev': {
        semester: 6,
        title: 'Information System Design',
        code: 'CSE-305',
        credits: 3,
        description: 'System Analysis & Design.',
        icon: 'fas fa-mobile-alt',
        color: '#f472b6'
    },
    'info-security': {
        semester: 6,
        title: 'Design Project I',
        code: 'CSE-308',
        credits: 1.5,
        description: 'Project Planning & Design.',
        icon: 'fas fa-lock',
        color: '#fb923c'
    },
    'entrepreneurship': {
        semester: 6,
        title: 'Electrical Drives and Instrumentation',
        code: 'EEE-301',
        credits: 3,
        description: 'Electric Motor Drives & Applications.',
        icon: 'fas fa-lightbulb',
        color: '#facc15'
    },
    
    // ========== SEMESTER 7 ==========
    'cloud-computing': {
        semester: 7,
        title: 'Software Engineering',
        code: 'CSE-313',
        credits: 3,
        description: 'Scalable Software Systems, Architecture & Best Practices',
        icon: 'fas fa-cloud',
        color: '#14b8a6'
    },
    'cybersecurity': {
        semester: 7,
        title: 'Artificial Intelligence',
        code: 'CSE-315',
        credits: 3,
        description: 'Intelligent Systems, Machine Learning & Data-Driven Models',
        icon: 'fas fa-shield-alt',
        color: '#a855f7'
    },
    'distributed-systems': {
        semester: 7,
        title: 'Artificial Intelligence Lab',
        code: 'CSE-316',
        credits: 1.5,
        description: 'Machine Learning Models, AI Algorithms & Practical Implementation.',
        icon: 'fas fa-network-wired',
        color: '#38bdf8'
    },
    'big-data': {
        semester: 7,
        title: 'Computer Networking',
        code: 'CSE-317',
        credits: 3,
        description: 'Network Fundamentals, Protocols & Communication Systems.',
        icon: 'fas fa-database',
        color: '#f472b6'
    },
    'iot': {
        semester: 7,
        title: 'Computer Networking Lab',
        code: 'CSE-318',
        credits: 1.5,
        description: 'Network Configuration, Protocol Analysis & Practical Implementation.',
        icon: 'fas fa-microchip',
        color: '#fb923c'
    },
    'ethics': {
        semester: 7,
        title: 'Professional Ethics',
        code: 'HUM-701',
        credits: 2,
        description: 'Ethics in computing, IT law, intellectual property, and professional responsibility.',
        icon: 'fas fa-balance-scale',
        color: '#4ade80'
    },
    
    // ========== SEMESTER 8 ==========
    'final-project': {
        semester: 8,
        title: 'Final Year Project',
        code: 'CSE-800',
        credits: 6,
        description: 'Capstone project with complete software solution, documentation, and presentation.',
        icon: 'fas fa-project-diagram',
        color: '#14b8a6'
    },
    'internship': {
        semester: 8,
        title: 'Industrial Internship',
        code: 'CSE-801',
        credits: 3,
        description: 'Hands-on industry experience at a technology company.',
        icon: 'fas fa-building',
        color: '#a855f7'
    },
    'seminar': {
        semester: 8,
        title: 'Technical Seminar',
        code: 'CSE-802',
        credits: 2,
        description: 'Research presentation on emerging technologies and trends.',
        icon: 'fas fa-chalkboard-teacher',
        color: '#38bdf8'
    },
    'career': {
        semester: 8,
        title: 'Career Development',
        code: 'HUM-801',
        credits: 1,
        description: 'Interview preparation, resume building, and soft skills development.',
        icon: 'fas fa-briefcase',
        color: '#fbbf24'
    }
};


// ==========================================
// COURSE RESOURCES (Materials for each course)
// ==========================================
// Key format: 'semester-coursekey' (যেমন: '1-physics', '2-oop')
// 
// Resource categories:
// - 'lab-report' : Lab Reports
// - 'notes'      : Lecture Notes
// - 'ppt'        : PowerPoint Presentations
// - 'assignment' : Assignments
// - 'project'    : Projects
// - 'project-report' : Project Reports
// - 'book'       : Books/PDFs

const courseResources = {
    // ========================================================
    // ADD YOUR COURSE RESOURCES HERE
    // Format: 'semester-coursekey': [ array of resources ]
    // ========================================================
    // 
    // Example:
    // '1-programming': [
    //     {
    //         category: 'lab-report',
    //         title: 'Lab 01: Introduction to C',
    //         description: 'Basic input/output operations.',
    //         fileType: 'PDF',
    //         meta: 'Jan 15, 2024',
    //         previewUrl: 'your-link',
    //         downloadUrl: 'your-link',
    //         featured: false
    //     }
    // ],
    //
    // Categories: 'lab-report', 'notes', 'ppt', 'slides', 'assignment', 'project', 'project-report', 'book'
    // ========================================================
    '6-ai': [
        {
            category: 'ppt',
            title: 'Web Programming PPT ',
            description: 'Midterm Slides.',
            fileType: 'PDF',
            meta: 'July 10, 2025',
            previewUrl: 'https://drive.google.com/drive/folders/1ajlx6nEaB2zga23qLbeXoDTxH1qOHA_t?usp=sharing',
            downloadUrl: 'https://drive.google.com/drive/folders/1ajlx6nEaB2zga23qLbeXoDTxH1qOHA_t?usp=sharing1',
            featured: true
        },
         {
            category: 'ppt',
            title: 'Web Programming PPT ',
            description: 'Final Slides.',
            fileType: 'PDF',
            meta: 'July 10, 2025',
            previewUrl: 'https://drive.google.com/drive/folders/1DE9rxJJiRf66sSWvuZe4VWhb3ZtoUxtQ?usp=sharing',
            downloadUrl: 'https://drive.google.com/drive/folders/1DE9rxJJiRf66sSWvuZe4VWhb3ZtoUxtQ?usp=sharing',
            featured: true
        },
        {
            category: 'notes',
            title: 'Notes ',
            description: 'Session & Cookies Notes.',
            fileType: 'PDF',
            meta: 'July 10, 2025',
            previewUrl: 'https://drive.google.com/drive/folders/1raoZwslVT9BO5MEWw1hCdKFo_9lbG1kL?usp=sharing',
            downloadUrl: 'https://drive.google.com/drive/folders/1raoZwslVT9BO5MEWw1hCdKFo_9lbG1kL?usp=sharing',
            featured: true
        },
        {
            category: 'assignment',
            title: 'Paper Summary ',
            description: 'Two Paper Summary Assignment.',
            fileType: 'PDF',
            meta: 'July 10, 2025',
            previewUrl: 'https://drive.google.com/drive/folders/134LsXsxSR4o-epSjtFdbxuFCDj6Yz83y?usp=sharing',
            downloadUrl: 'https://drive.google.com/drive/folders/134LsXsxSR4o-epSjtFdbxuFCDj6Yz83y?usp=sharing',
            featured: true
        },
        {
            category: 'question',
            title: 'Questions ',
            description: 'Class Test Questions.',
            fileType: 'PDF',
            meta: 'July 10, 2025',
            previewUrl: 'https://drive.google.com/drive/folders/1BhP5u4pHqJQp522frShWw07_aIQncJI5?usp=sharing',
            downloadUrl: 'https://drive.google.com/drive/folders/1BhP5u4pHqJQp522frShWw07_aIQncJI5?usp=sharing',
            featured: true
        },
        {
            category: 'course-outline',
            title: 'Course Outline ',
            description: 'Web Programming Course Outline.',
            fileType: 'PDF',
            meta: 'July 10, 2025',
            previewUrl: 'https://drive.google.com/file/d/1sBjqsgoH8n5hWanQaaoHpbiBaHmtBInQ/view?usp=sharing',
            downloadUrl: 'https://drive.google.com/file/d/1sBjqsgoH8n5hWanQaaoHpbiBaHmtBInQ/view?usp=sharing',
            featured: true
        }
    ]
};


// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get resource counts for a specific course
 * @param {number} semester - Semester number
 * @param {string} courseKey - Course key (e.g., 'physics', 'programming')
 * @returns {object} - Object with counts for each category
 */
function getResourceCounts(semester, courseKey) {
    const key = `${semester}-${courseKey}`;
    const resources = courseResources[key] || [];
    
    const counts = {
        // Camel case format (for semester pages)
        labReports: 0,
        notes: 0,
        ppt: 0,
        assignments: 0,
        projects: 0,
        books: 0,
        slides: 0,
        questions: 0,
        suggestions: 0,
        courseOutlines: 0,
        others: 0,
        total: resources.length,
        // Hyphenated format (for course.html)
        'lab-report': 0,
        'assignment': 0,
        'project': 0,
        'project-report': 0,
        'book': 0,
        'slides': 0,
        'question': 0,
        'suggestion': 0,
        'course-outline': 0,
        'others': 0
    };
    
    resources.forEach(resource => {
        switch(resource.category) {
            case 'lab-report':
                counts.labReports++;
                counts['lab-report']++;
                break;
            case 'notes':
                counts.notes++;
                break;
            case 'ppt':
                counts.ppt++;
                break;
            case 'assignment':
                counts.assignments++;
                counts['assignment']++;
                break;
            case 'project':
                counts.projects++;
                counts['project']++;
                break;
            case 'project-report':
                counts['project-report']++;
                break;
            case 'book':
                counts.books++;
                counts['book']++;
                break;
            case 'slides':
                counts.slides++;
                counts['slides']++;
                break;
            case 'question':
                counts.questions++;
                counts['question']++;
                break;
            case 'suggestion':
                counts.suggestions++;
                counts['suggestion']++;
                break;
            case 'course-outline':
                counts.courseOutlines++;
                counts['course-outline']++;
                break;
            case 'others':
                counts.others++;
                counts['others']++;
                break;
        }
    });
    
    return counts;
}

/**
 * Get course metadata by key
 * @param {string} courseKey - Course key
 * @returns {object|null} - Course metadata or null
 */
function getCourseMetadata(courseKey) {
    return courseMetadata[courseKey] || null;
}

/**
 * Get all courses for a specific semester
 * @param {number} semester - Semester number
 * @returns {array} - Array of course objects with their keys
 */
function getCoursesBySemester(semester) {
    const courses = [];
    for (const [key, course] of Object.entries(courseMetadata)) {
        if (course.semester === semester) {
            courses.push({ key, ...course });
        }
    }
    return courses;
}

/**
 * Get resources for a specific course
 * @param {number} semester - Semester number
 * @param {string} courseKey - Course key
 * @returns {array} - Array of resources
 */
function getCourseResources(semester, courseKey) {
    const key = `${semester}-${courseKey}`;
    return courseResources[key] || [];
}

/**
 * Get all valid course keys
 * @returns {array} - Array of all course keys
 */
function getAllCourseKeys() {
    return Object.keys(courseMetadata);
}

/**
 * Get semester statistics (course count and total files)
 * @param {number} semester - Semester number
 * @returns {object} - Object with courseCount and totalResources
 */
function getSemesterStats(semester) {
    const courses = getCoursesBySemester(semester);
    let totalResources = 0;
    
    courses.forEach(course => {
        const key = `${semester}-${course.key}`;
        const resources = courseResources[key] || [];
        totalResources += resources.length;
    });
    
    return {
        courseCount: courses.length,
        totalResources: totalResources
    };
}

/**
 * Get overall stats for all semesters
 * @returns {object} - Object with total semesters, lab reports, notes, projects
 */
function getOverallStats() {
    let totalLabReports = 0;
    let totalNotes = 0;
    let totalProjects = 0;
    let totalPPT = 0;
    let totalFiles = 0;
    
    for (const [key, resources] of Object.entries(courseResources)) {
        resources.forEach(resource => {
            totalFiles++;
            if (resource.category === 'lab-report') totalLabReports++;
            if (resource.category === 'notes') totalNotes++;
            if (resource.category === 'project' || resource.category === 'project-report') totalProjects++;
            if (resource.category === 'ppt' || resource.category === 'slides') totalPPT++;
        });
    }
    
    return {
        semesters: 8,
        labReports: totalLabReports,
        notes: totalNotes,
        projects: totalProjects,
        ppt: totalPPT,
        totalFiles: totalFiles
    };
}

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        courseMetadata,
        courseResources,
        getResourceCounts,
        getCourseMetadata,
        getCoursesBySemester,
        getCourseResources,
        getAllCourseKeys,
        getSemesterStats,
        getOverallStats
    };
}

// ==========================================
// GLOBAL ALIASES (for compatibility with existing code)
// ==========================================
// course.html uses 'courseData' variable name
const courseData = courseMetadata;
