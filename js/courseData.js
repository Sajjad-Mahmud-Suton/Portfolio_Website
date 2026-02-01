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
        title: '	Physics I',
        code: 'PHY-101',
        credits: 3,
        description: 'Fundamental principles of mechanics, waves, and physical phenomena.',
        icon: 'fas fa-atom',
        color: '#14b8a6'
    },
    'math': {
        semester: 1,
        title: 'Calculus for Computing',
        code: 'MAT-101',
        credits: 3,
        description: 'Calculus fundamentals applied to computing and problem-solving.',
        icon: 'fas fa-square-root-alt',
        color: '#a855f7'
    },
    'programming': {
        semester: 1,
        title: 'Discrete Mathematics',
        code: 'CSE-101',
        credits: 3,
        description: 'Study of logic, sets, relations, and discrete mathematical structures.',
        icon: 'fas fa-code',
        color: '#38bdf8'
    },
    'chemistry': {
        semester: 1,
        title: 'Chemistry',
        code: 'CHE-101',
        credits: 3,
        description: 'Fundamental principles of chemistry and their applications.',
        icon: 'fas fa-vial',
        color: '#f472b6'
    },
    'english': {
        semester: 1,
        title: 'Chemistry Lab',
        code: 'CHE-102',
        credits: 1,
        description: 'Hands-on experiments and analysis of basic chemistry concepts.',
        icon: 'fas fa-language',
        color: '#fb923c'
    },
    'electrical': {
        semester: 1,
        title: 'Computational Thinking and Problem Solving',
        code: 'CSE-100',
        credits: 1.5,
        description: 'Developing logical and structured approaches to solve problems using computational methods.',
        icon: 'fas fa-bolt',
        color: '#4ade80'
    },

    'ENG': {
        semester: 1,
        title: 'Academic English I',
        code: 'ESP-101',
        credits: 3,
        description: 'Development of reading, writing, and communication skills for academic purposes.',
        icon: 'fas fa-bolt',
        color: '#45f0d3ff'
    },
    
    // ========== SEMESTER 2 (241) ==========
    'eee-lab': {
        semester: 2,
        title: 'Introduction to Electrical Engineering Lab',
        code: 'EEE-102',
        credits: 1,
        description: 'Practical experiments on basic electrical circuits, measurements, and instruments.',
        icon: 'fas fa-plug',
        color: '#f472b6'
    },
    'sp-lab': {
        semester: 2,
        title: 'Structured Programming Lab',
        code: 'CSE-104',
        credits: 1.5,
        description: 'Hands-on programming exercises using C language to implement algorithms.',
        icon: 'fas fa-laptop-code',
        color: '#38bdf8'
    },
    'bengali': {
        semester: 2,
        title: 'Functional Bengali',
        code: 'GED-103',
        credits: 2,
        description: 'Development of Bengali language skills for professional communication.',
        icon: 'fas fa-book-open',
        color: '#a855f7'
    },
    'linear-algebra': {
        semester: 2,
        title: 'Linear Algebra and Vector Analysis',
        code: 'MAT-103',
        credits: 3,
        description: 'Study of matrices, vectors, linear transformations, and their applications.',
        icon: 'fas fa-vector-square',
        color: '#14b8a6'
    },
    'physics2': {
        semester: 2,
        title: 'Physics II',
        code: 'PHY-103',
        credits: 3,
        description: 'Electromagnetic theory, optics, and modern physics concepts.',
        icon: 'fas fa-wave-square',
        color: '#fb923c'
    },
    'physics-lab': {
        semester: 2,
        title: 'Physics Lab',
        code: 'PHY-104',
        credits: 1.5,
        description: 'Practical experiments in physics covering mechanics, optics, and electricity.',
        icon: 'fas fa-flask',
        color: '#4ade80'
    },
    'sp': {
        semester: 2,
        title: 'Structured Programming',
        code: 'CSE-103',
        credits: 3,
        description: 'Fundamentals of C programming, control structures, functions, and arrays.',
        icon: 'fas fa-code',
        color: '#e879f9'
    },
    'eee': {
        semester: 2,
        title: 'Introduction to Electrical Engineering',
        code: 'EEE-101',
        credits: 3,
        description: 'Basic electrical circuits, components, and fundamental electrical concepts.',
        icon: 'fas fa-bolt',
        color: '#facc15'
    },
    
    // ========== SEMESTER 3 (242) ==========
    'oop': {
        semester: 3,
        title: 'Object Oriented Programming',
        code: 'CSE-201',
        credits: 3,
        description: 'OOP concepts including classes, inheritance, polymorphism, and encapsulation using C++/Java.',
        icon: 'fas fa-cubes',
        color: '#a855f7'
    },
    'oop-lab': {
        semester: 3,
        title: 'Object Oriented Programming Lab',
        code: 'CSE-202',
        credits: 1.5,
        description: 'Practical implementation of OOP concepts through programming exercises.',
        icon: 'fas fa-laptop-code',
        color: '#38bdf8'
    },
    'dld': {
        semester: 3,
        title: 'Digital Logic Design',
        code: 'CSE-203',
        credits: 3,
        description: 'Boolean algebra, logic gates, combinational and sequential circuits design.',
        icon: 'fas fa-microchip',
        color: '#14b8a6'
    },
    'dld-lab': {
        semester: 3,
        title: 'Digital Logic Design Lab',
        code: 'CSE-204',
        credits: 1,
        description: 'Hands-on experiments with logic gates, flip-flops, and digital circuits.',
        icon: 'fas fa-tools',
        color: '#f472b6'
    },
    'ds': {
        semester: 3,
        title: 'Data Structures',
        code: 'CSE-205',
        credits: 3,
        description: 'Arrays, linked lists, stacks, queues, trees, graphs, and hash tables.',
        icon: 'fas fa-layer-group',
        color: '#fb923c'
    },
    'ds-lab': {
        semester: 3,
        title: 'Data Structures Lab',
        code: 'CSE-206',
        credits: 1.5,
        description: 'Implementation of data structures and algorithms in programming.',
        icon: 'fas fa-laptop-code',
        color: '#4ade80'
    },
    'diff-eq': {
        semester: 3,
        title: 'Differential Equations and Coordinate Geometry',
        code: 'MAT-201',
        credits: 3,
        description: 'Study of differential equations and coordinate geometry concepts.',
        icon: 'fas fa-superscript',
        color: '#e879f9'
    },
    
    // ========== SEMESTER 4 (250) ==========
    'probability': {
        semester: 4,
        title: 'Probability and Statistics for Computing',
        code: 'MAT-203',
        credits: 3,
        description: 'Probability theory, statistical distributions, hypothesis testing, and data analysis.',
        icon: 'fas fa-chart-bar',
        color: '#a855f7'
    },
    'database': {
        semester: 4,
        title: 'Database',
        code: 'CSE-209',
        credits: 3,
        description: 'Database concepts, SQL, ER models, normalization, and query optimization.',
        icon: 'fas fa-database',
        color: '#14b8a6'
    },
    'database-lab': {
        semester: 4,
        title: 'Database Lab',
        code: 'CSE-210',
        credits: 1.5,
        description: 'Practical SQL queries, database design, and implementation exercises.',
        icon: 'fas fa-laptop-code',
        color: '#38bdf8'
    },
    
    // ========== SEMESTER 5 ==========
    'software-eng': {
        semester: 5,
        title: 'Computer Architecture',
        code: 'CSE-211',
        credits: 3,
        description: 'CPU organization, memory structure, and how hardware executes programs.',
        icon: 'fas fa-project-diagram',
        color: '#fb923c'
    },
    'adv-database': {
        semester: 5,
        title: 'Algorithms',
        code: 'CSE-207',
        credits: 3,
        description: 'Design and analysis of efficient problem-solving methods.',
        icon: 'fas fa-server',
        color: '#a855f7'
    },
    'web-dev': {
        semester: 5,
        title: 'Algorithms Lab',
        code: 'CSE-208',
        credits: 1.5,
        description: 'Hands-on implementation and testing of algorithms.',
        icon: 'fas fa-globe',
        color: '#38bdf8'
    },
    'compiler': {
        semester: 5,
        title: 'Electronic Devices, Circuits and Pulse Techniques',
        code: 'EEE-201',
        credits: 3,
        description: 'Study of electronic devices, circuit behavior, and pulse generation techniques.',
        icon: 'fas fa-code-branch',
        color: '#14b8a6'
    },
    'graphics': {
        semester: 5,
        title: 'Electronic Devices, Circuits and Pulse Techniques Lab',
        code: 'EEE-202',
        credits: 1,
        description: 'Hands-on analysis and implementation of electronic devices and pulse circuits.',
        icon: 'fas fa-cube',
        color: '#f472b6'
    },
    'management': {
        semester: 5,
        title: 'Financial and Managerial Accounting',
        code: 'GED-201',
        credits: 3,
        description: 'Principles of financial reporting and managerial decision-making.',
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


    // ========================================================
    // ========================================================
                    //6th Semester Courses Materials
    // ========================================================
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
    ],


    // ========================================================
    // ========================================================
                    //7th Semester Courses Materials
    // ========================================================
    // ========================================================
     '7-cybersecurity': [
       {
            category: 'slides',
             title: 'Slide 01: Introduction ',
             description: 'Basic information.',
            fileType: 'PPTX',
             meta: 'Feb 01, 2026',
             previewUrl: 'https://docs.google.com/presentation/d/18-g3T7g469W4DT9XCzJ9TMcPWBUwhlnk/edit?usp=sharing&ouid=108140212801946690894&rtpof=true&sd=true',
             downloadUrl: 'https://docs.google.com/presentation/d/18-g3T7g469W4DT9XCzJ9TMcPWBUwhlnk/edit?usp=sharing&ouid=108140212801946690894&rtpof=true&sd=true',
             featured: false
         },
         {
            category: 'book',
             title: 'Artificial Intelligence by Stuart Russel and Peter Norvig ',
             description: 'Book.',
            fileType: 'PDF',
             meta: 'Feb 01, 2026',
             previewUrl: 'https://drive.google.com/file/d/1LouE_SRsfaAuqW_QtHZWQlOmEsqGWGDM/view?usp=sharing',
             downloadUrl: 'https://drive.google.com/file/d/1LouE_SRsfaAuqW_QtHZWQlOmEsqGWGDM/view?usp=sharing',
             featured: false
         }
    ],

    '7-distributed-systems': [
       {
            category: 'slides',
             title: 'Implementation of HTTP POST and GET methods ',
             description: 'Lab Manual 01.',
            fileType: 'PDF',
             meta: 'Feb 01, 2026',
             previewUrl: 'https://drive.google.com/file/d/1WS3Rl5EEGq6pTijNfQdoK5qLcLBl7spg/view?usp=sharing',
             downloadUrl: 'https://drive.google.com/file/d/1WS3Rl5EEGq6pTijNfQdoK5qLcLBl7spg/view?usp=sharing',
             featured: false
         }
    ],

        '7-big-data': [
       {
            category: 'slides',
             title: 'Introduction to Computer Networking ',
             description: 'Week 01 Class 01.',
            fileType: 'PPTX',
             meta: 'Feb 01, 2026',
             previewUrl: 'https://docs.google.com/presentation/d/17roEV5mQkR9xo57ikmR-0a9QEcfObt4Y/edit?usp=sharing&ouid=108140212801946690894&rtpof=true&sd=true',
             downloadUrl: 'https://docs.google.com/presentation/d/17roEV5mQkR9xo57ikmR-0a9QEcfObt4Y/edit?usp=sharing&ouid=108140212801946690894&rtpof=true&sd=true',
             featured: false
         },
         {
            category: 'slides',
             title: 'Delay in Packet Switched Networks ',
             description: 'Week 01 Class 02.',
            fileType: 'PPTX',
             meta: 'Feb 01, 2026',
             previewUrl: 'https://docs.google.com/presentation/d/1nQg9E74pL00q9-qr6NrQNb7jOkCUcCxv/edit?usp=sharing&ouid=108140212801946690894&rtpof=true&sd=true',
             downloadUrl: 'https://docs.google.com/presentation/d/1nQg9E74pL00q9-qr6NrQNb7jOkCUcCxv/edit?usp=sharing&ouid=108140212801946690894&rtpof=true&sd=true',
             featured: false
         },
                  {
            category: 'slides',
             title: 'Principles of Network Applications',
             description: 'Week 02 Class 01.',
            fileType: 'PPTX',
             meta: 'Feb 01, 2026',
             previewUrl: 'https://docs.google.com/presentation/d/1kam6YsMjTZEPymrXD5nlUYtH4SlSQMZK/edit?usp=sharing&ouid=108140212801946690894&rtpof=true&sd=true',
             downloadUrl: 'https://docs.google.com/presentation/d/1kam6YsMjTZEPymrXD5nlUYtH4SlSQMZK/edit?usp=sharing&ouid=108140212801946690894&rtpof=true&sd=true',
             featured: false
         },
                  {
            category: 'slides',
             title: 'Electronic Mail-Email ',
             description: 'Week 02 Class 02.',
            fileType: 'PPTX',
             meta: 'Feb 01, 2026',
             previewUrl: 'https://docs.google.com/presentation/d/1L0QxnR3SNrKFD5arnsQGI8bx5JV5XESr/edit?usp=sharing&ouid=108140212801946690894&rtpof=true&sd=true',
             downloadUrl: 'https://docs.google.com/presentation/d/1L0QxnR3SNrKFD5arnsQGI8bx5JV5XESr/edit?usp=sharing&ouid=108140212801946690894&rtpof=true&sd=true',
             featured: false
         },
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
