# 📚 Course Management System - Documentation

এই documentation এ আপনি শিখবেন কিভাবে:
- নতুন Course add করবেন
- নতুন Semester add করবেন  
- Course এ Resources (Lab Reports, Notes, PPT, etc.) add করবেন
- System কিভাবে কাজ করে

---

## 📁 File Structure

```
Portfolio/
├── js/
│   ├── courseData.js    ← 🔥 মূল ফাইল - সব Course ও Resources এখানে
│   └── script.js        ← Main JavaScript
├── src/
│   ├── university.html  ← Semester selection page
│   ├── semester1.html   ← 1st Semester courses
│   ├── semester2.html   ← 2nd Semester courses
│   ├── ...
│   ├── semester8.html   ← 8th Semester courses
│   └── course.html      ← Course resources page (dynamic)
└── README-COURSES.md    ← এই ফাইল
```

---

## 🎯 Quick Start - কিভাবে Resource Add করবেন

### Step 1: courseData.js ফাইল খুলুন
Location: `js/courseData.js`

### Step 2: courseResources object এ যান এবং resource add করুন

```javascript
const courseResources = {
    // Format: 'semester-coursekey': [array of resources]
    
    '1-programming': [
        {
            category: 'lab-report',      // Resource type
            title: 'Lab 01: Introduction to C Programming',
            description: 'Basic input/output operations.',
            fileType: 'PDF',
            meta: 'Jan 15, 2024',         // Date বা additional info
            previewUrl: 'link-to-preview',
            downloadUrl: 'link-to-download',
            featured: false               // true = special highlight
        },
        // আরও resources add করুন...
    ],
    
    '1-physics': [
        // Physics resources এখানে
    ],
    
    '2-oop': [
        // OOP resources এখানে
    ]
};
```

---

## 🔑 Course Key Reference (সব Course এর Key)

### কিভাবে Key কাজ করে?
- URL: `course.html?sem=1&course=physics`
- Key: `physics` (URL এর `course=` এর পরে যা আছে)
- Resource Key: `1-physics` (semester + course key)

### Semester 1 Courses
| Course Name | Course Key | Resource Key |
|-------------|------------|--------------|
| Physics | `physics` | `1-physics` |
| Mathematics | `math` | `1-math` |
| Programming Fundamentals | `programming` | `1-programming` |
| Chemistry | `chemistry` | `1-chemistry` |
| English | `english` | `1-english` |
| Basic Electrical Engineering | `electrical` | `1-electrical` |

### Semester 2 Courses
| Course Name | Course Key | Resource Key |
|-------------|------------|--------------|
| Object Oriented Programming | `oop` | `2-oop` |
| Discrete Mathematics | `discrete-math` | `2-discrete-math` |
| Digital Logic Design | `digital-logic` | `2-digital-logic` |
| Physics II | `physics2` | `2-physics2` |
| Calculus II | `calculus2` | `2-calculus2` |
| Data Communication | `data-comm` | `2-data-comm` |

### Semester 3 Courses
| Course Name | Course Key | Resource Key |
|-------------|------------|--------------|
| Data Structures | `data-structures` | `3-data-structures` |
| Algorithms | `algorithms` | `3-algorithms` |
| Computer Architecture | `computer-arch` | `3-computer-arch` |
| Statistics & Probability | `statistics` | `3-statistics` |
| Electronic Devices | `electronics` | `3-electronics` |
| Engineering Economics | `economics` | `3-economics` |

### Semester 4 Courses
| Course Name | Course Key | Resource Key |
|-------------|------------|--------------|
| Operating Systems | `operating-systems` | `4-operating-systems` |
| Computer Networks | `computer-networks` | `4-computer-networks` |
| Database Systems | `database` | `4-database` |
| Theory of Computation | `toc` | `4-toc` |
| Numerical Methods | `numerical` | `4-numerical` |
| Microprocessor & Interfacing | `microprocessor` | `4-microprocessor` |

### Semester 5 Courses
| Course Name | Course Key | Resource Key |
|-------------|------------|--------------|
| Software Engineering | `software-engineering` | `5-software-engineering` |
| Web Development | `web-development` | `5-web-development` |
| Artificial Intelligence | `ai` | `5-ai` |
| Computer Graphics | `graphics` | `5-graphics` |
| Signals & Systems | `signals` | `5-signals` |
| Management Principles | `management` | `5-management` |

### Semester 6 Courses
| Course Name | Course Key | Resource Key |
|-------------|------------|--------------|
| Machine Learning | `ml` | `6-ml` |
| Compiler Design | `compiler` | `6-compiler` |
| Mobile App Development | `mobile-app` | `6-mobile-app` |
| Information Security | `info-security` | `6-info-security` |
| Project Management | `project-management` | `6-project-management` |
| Technical Writing | `technical-writing` | `6-technical-writing` |

### Semester 7 Courses
| Course Name | Course Key | Resource Key |
|-------------|------------|--------------|
| Cloud Computing | `cloud-computing` | `7-cloud-computing` |
| Cybersecurity | `cybersecurity` | `7-cybersecurity` |
| Distributed Systems | `distributed-systems` | `7-distributed-systems` |
| Big Data Analytics | `big-data` | `7-big-data` |
| Internet of Things | `iot` | `7-iot` |
| Professional Ethics | `ethics` | `7-ethics` |

### Semester 8 Courses
| Course Name | Course Key | Resource Key |
|-------------|------------|--------------|
| Final Year Project | `final-project` | `8-final-project` |
| Industrial Internship | `internship` | `8-internship` |
| Technical Seminar | `seminar` | `8-seminar` |
| Career Development | `career` | `8-career` |

---

## 📝 Resource Categories (ধরনসমূহ)

| Category | Description | Icon |
|----------|-------------|------|
| `lab-report` | Lab Reports | 🧪 flask |
| `notes` | Lecture Notes | 📝 sticky-note |
| `ppt` | PowerPoint Presentations | 📊 file-powerpoint |
| `assignment` | Assignments | ✅ tasks |
| `project` | Projects (Source Code) | 🔧 project-diagram |
| `project-report` | Project Reports/Documentation | 📄 file-contract |
| `book` | Books/PDF | 📚 book |

---

## 📖 Resource Object Format

প্রতিটা resource এর format:

```javascript
{
    category: 'lab-report',          // Required: Resource type
    title: 'Lab 01: Title Here',     // Required: Display title
    description: 'Brief description', // Required: Short description
    fileType: 'PDF',                 // Required: File type (PDF, DOCX, PPTX, etc.)
    meta: 'Jan 15, 2024',            // Optional: Date or additional info
    previewUrl: 'https://...',       // Optional: Preview link
    downloadUrl: 'https://...',      // Optional: Download link
    featured: true                   // Optional: Highlight this resource
}
```

---

## ➕ নতুন Course Add করার পদ্ধতি

### Step 1: courseData.js এ courseMetadata তে add করুন

```javascript
const courseMetadata = {
    // ... existing courses ...
    
    // নতুন Course
    'new-course': {
        semester: 1,                    // Semester number
        title: 'New Course Name',       // Full course name
        code: 'CSE-XXX',               // Course code
        credits: 3,                     // Credit hours
        description: 'Course description here.',
        icon: 'fas fa-book',           // Font Awesome icon
        color: '#14b8a6'               // Theme color (hex)
    }
};
```

### Step 2: Semester HTML ফাইলে Course Card add করুন

`semester1.html` (বা যে semester এ add করছেন) এ যান এবং courses-grid এ add করুন:

```html
<a href="course.html?sem=1&course=new-course" class="course-card card fade-in" style="...">
    <div class="course-header" style="background: linear-gradient(135deg, #14b8a6, #0d9488); ...">
        <div class="course-code">CSE-XXX</div>
        <div class="course-icon"><i class="fas fa-book"></i></div>
        <h3>New Course Name</h3>
        <p>Course subtitle</p>
    </div>
    <div class="course-content">
        <!-- Resource tags will show count dynamically -->
        <div class="resource-tags" data-course="new-course">
            <!-- JavaScript will populate this -->
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span><i class="fas fa-credit-card"></i> 3 Credits</span>
            <span>View Resources <i class="fas fa-arrow-right"></i></span>
        </div>
    </div>
</a>
```

### Step 3: courseResources এ empty array add করুন

```javascript
const courseResources = {
    // ... existing resources ...
    
    '1-new-course': []  // Ready for resources
};
```

---

## ➕ নতুন Semester Add করার পদ্ধতি

### Step 1: semester HTML file তৈরি করুন
- `semester8.html` copy করুন
- নাম দিন `semester9.html`
- Content modify করুন (title, breadcrumb, courses)

### Step 2: Navigation tabs update করুন
সব semester HTML file এ semester-tabs section এ নতুন tab add করুন:

```html
<a href="semester9.html" class="semester-tab">9th Sem</a>
```

### Step 3: university.html এ link add করুন
Semester selection grid এ নতুন semester card add করুন।

### Step 4: course.html এ semester data add করুন
`course.html` এর JavaScript এ semesterLinks এবং semesterNames update করুন:

```javascript
const semesterLinks = {
    // ... existing ...
    '9': 'semester9.html'
};

const semesterNames = {
    // ... existing ...
    '9': '9th Semester'
};
```

---

## 🔄 Dynamic Resource Counts (✅ Already Implemented!)

Course card এ Lab Reports, Notes, PPT এর count automatically হিসাব হয় `courseResources` থেকে।

### কিভাবে কাজ করে:
1. প্রতিটা semester page load হলে `js/courseData.js` load হয়
2. JavaScript `courseResources` থেকে প্রতিটা course এর resources count করে
3. `getResourceCounts(semester, courseKey)` function counts return করে
4. Course card এ automatically display হয়

### ✅ এই Feature সব semester file এ Enable করা আছে!

- `semester1.html` - `semester8.html` সবগুলোতে dynamic counting কাজ করছে
- আপনাকে কিছু করতে হবে না!
- শুধু `js/courseData.js` এর `courseResources` এ resource add করলেই count automatically বাড়বে

### Example - Resource Add করলে কি হয়:

**Before (courseResources তে কিছু নেই):**
```
Course Card: "No resources yet" দেখাবে
```

**After (courseResources এ 2 lab reports + 1 note add করলে):**
```javascript
// js/courseData.js
const courseResources = {
    '1-programming': [
        { category: 'lab-report', title: 'Lab 01...', ... },
        { category: 'lab-report', title: 'Lab 02...', ... },
        { category: 'notes', title: 'Chapter 1...', ... }
    ]
};
```
```
Course Card: "2 Lab Reports" "1 Notes" দেখাবে
---

## 🎨 Color Palette

Course এর জন্য ব্যবহৃত colors:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Teal | `#14b8a6` | Primary, Lab Reports |
| Purple | `#a855f7` | Notes |
| Blue | `#38bdf8` | PPT, Projects |
| Pink | `#f472b6` | Project Reports |
| Orange | `#fb923c` | Assignments |
| Green | `#4ade80` | Books |
| Yellow | `#fbbf24` | Featured items |

---

## 🔧 Troubleshooting

### Resource দেখাচ্ছে না?
1. `courseData.js` file সঠিকভাবে link করা আছে কিনা check করুন
2. Resource key সঠিক format এ আছে কিনা check করুন (`semester-coursekey`)
3. Browser console এ error আছে কিনা দেখুন

### Course page এ "Course not found" দেখাচ্ছে?
1. URL এর course parameter check করুন
2. `courseMetadata` এ course key আছে কিনা verify করুন

### Count update হচ্ছে না?
1. Page refresh করুন
2. Browser cache clear করুন
3. `courseData.js` এ resources সঠিকভাবে add করা আছে কিনা check করুন

---

## 📞 Contact

Questions বা help এর জন্য contact করুন:
- Email: sajjadmahmudsuton@gmail.com
- GitHub: github.com/Sajjad-Mahmud-Suton

---

*Last Updated: January 2026*
