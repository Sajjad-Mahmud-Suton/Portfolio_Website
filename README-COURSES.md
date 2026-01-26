# 📚 Course Management System - Complete Documentation

এই documentation এ আপনি শিখবেন কিভাবে:
- ✅ নতুন Course add করবেন
- ✅ নতুন Semester add করবেন  
- ✅ Course এ Resources (Lab Reports, Notes, PPT, etc.) add করবেন
- ✅ Course/Semester Delete করবেন
- ✅ Dynamic Counting System কিভাবে কাজ করে
- ✅ EmailJS Contact Form কিভাবে কাজ করে

---

## 🎯 Dynamic System Overview

এই Portfolio তে **সব কিছু Dynamic**। আপনাকে শুধু `courseData.js` file এ data add/remove করতে হবে। বাকি সব automatically update হবে:

| Feature | Auto Update Location |
|---------|---------------------|
| Semester এ Total Courses | `university.html` - Semester cards |
| Semester এ Total Resources | `university.html` - Semester cards |
| Course এ Resource Count | `semester1-8.html` - Course cards |
| Course Page Stats | `course.html` - Lab/Notes/PPT/etc counts |
| Resource List | `course.html` - Full resource display |

---

## 📁 File Structure

```
Portfolio/
├── js/
│   ├── courseData.js    ← 🔥 মূল ফাইল - সব Course ও Resources এখানে
│   │                       ├── courseMetadata (Course info)
│   │                       ├── courseResources (All resources)
│   │                       ├── getSemesterStats() (For university.html)
│   │                       └── getResourceCounts() (For semester/course pages)
│   └── script.js        ← Main JavaScript
├── src/
│   ├── university.html  ← Semester selection (Dynamic counts)
│   ├── semester1.html   ← 1st Semester courses (Dynamic resource tags)
│   ├── semester2.html   ← 2nd Semester courses (Dynamic resource tags)
│   ├── ...
│   ├── semester8.html   ← 8th Semester courses (Dynamic resource tags)
│   └── course.html      ← Course resources page (Dynamic stats & list)
│   └── contact.html     ← Contact form (EmailJS + Auto Reply)
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
| English II | `english2` | `2-english2` |

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

---

## 🔥 Dynamic Counting System - বিস্তারিত ব্যাখ্যা

### কিভাবে কাজ করে?

Portfolio তে তিনটি level এ dynamic counting হয়:

```
📊 Level 1: university.html
   └── প্রতিটা Semester Card এ:
       ├── Total Courses সংখ্যা
       └── Total Resources সংখ্যা
       
📊 Level 2: semester1-8.html  
   └── প্রতিটা Course Card এ:
       ├── Lab Reports count
       ├── Notes count
       ├── PPT count
       └── Other resource counts
       
📊 Level 3: course.html
   └── Course Page এ:
       ├── Stat boxes (Lab: X, Notes: X, etc.)
       └── Resource list (Full details)
```

### Functions Used (courseData.js):

```javascript
// 1. getSemesterStats(semesterNumber)
// Returns: { courseCount: X, totalResources: Y }
// Used in: university.html

const stats = getSemesterStats(1);
// Result: { courseCount: 6, totalResources: 15 }

// 2. getResourceCounts(semesterNumber, courseKey)
// Returns: { 'lab-report': X, 'notes': Y, 'ppt': Z, 'total': T }
// Used in: semester pages & course.html

const counts = getResourceCounts(1, 'programming');
// Result: { 'lab-report': 5, 'notes': 3, 'ppt': 2, 'total': 10 }
```

### Where Each File Gets Data:

| File | Function Used | What Updates |
|------|--------------|--------------|
| `university.html` | `getSemesterStats(sem)` | Semester card এ courses ও resources count |
| `semester1-8.html` | `getResourceCounts(sem, course)` | Course card এর resource tags |
| `course.html` | `getResourceCounts(sem, course)` | Stats section ও resource list |

---

## ➕ নতুন Course Add করার Complete Guide

### যখন Course Add করবেন, এই কাজগুলো করতে হবে:

#### ✅ Step 1: courseData.js এ Course Metadata Add করুন

```javascript
// js/courseData.js এ courseMetadata object এ add করুন:

const courseMetadata = {
    // ... existing courses ...
    
    // নতুন Course (example: AI Lab)
    'ai-lab': {
        semester: 5,                        // কোন Semester এ
        title: 'Artificial Intelligence Lab',
        code: 'CSE-511',
        credits: 1.5,
        description: 'Practical AI implementations and projects.',
        icon: 'fas fa-robot',              // Font Awesome icon
        color: '#8b5cf6'                   // Theme color
    }
};
```

#### ✅ Step 2: courseResources এ Empty Array Add করুন

```javascript
// js/courseData.js এ courseResources object এ add করুন:

const courseResources = {
    // ... existing resources ...
    
    '5-ai-lab': []   // Format: 'semester-coursekey': []
};
```

#### ✅ Step 3: Semester HTML File এ Course Card Add করুন

`semester5.html` এ courses-grid section এ add করুন:

```html
<!-- AI Lab Course Card -->
<a href="course.html?sem=5&course=ai-lab" class="course-card card fade-in" 
   style="--course-color: #8b5cf6; animation-delay: 0.6s;">
    <div class="course-header" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 1.5rem;">
        <div class="course-code" style="...">CSE-511</div>
        <div class="course-icon" style="font-size: 2.5rem; margin-bottom: 1rem;">
            <i class="fas fa-robot"></i>
        </div>
        <h3>Artificial Intelligence Lab</h3>
        <p style="opacity: 0.9; font-size: 0.9rem;">AI Implementations</p>
    </div>
    <div class="course-content" style="padding: 1.5rem;">
        <div class="resource-tags" data-course="ai-lab">
            <!-- Dynamic tags will appear here -->
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
            <span style="color: var(--text-secondary);"><i class="fas fa-credit-card"></i> 1.5 Credits</span>
            <span style="color: #8b5cf6; font-weight: 600;">View Resources <i class="fas fa-arrow-right"></i></span>
        </div>
    </div>
</a>
```

#### 🎉 Done! এখন:
- `university.html` এ semester 5 এর course count বাড়বে (6 → 7)
- `semester5.html` এ নতুন course card দেখাবে
- `course.html?sem=5&course=ai-lab` এ course page কাজ করবে

---

## ➕ নতুন Semester Add করার Complete Guide

### ধরুন Semester 9 Add করতে চান:

#### ✅ Step 1: semester9.html File Create করুন

`semester8.html` copy করে `semester9.html` নাম দিন, তারপর modify করুন:

```html
<!-- Title change -->
<title>9th Semester - Sajjad's Portfolio</title>

<!-- Breadcrumb change -->
<a href="semester9.html" class="active">9th Semester</a>

<!-- Page title change -->
<h1>9th Semester <span class="semester-badge">Fall 2027</span></h1>

<!-- Semester tabs এ active class change -->
<a href="semester9.html" class="semester-tab active">9th Sem</a>
```

#### ✅ Step 2: সব Semester Files এ Navigation Tab Add করুন

`semester1.html` থেকে `semester8.html` পর্যন্ত সবগুলোতে semester-tabs section এ add করুন:

```html
<div class="semester-tabs">
    <a href="semester1.html" class="semester-tab">1st Sem</a>
    <!-- ... others ... -->
    <a href="semester8.html" class="semester-tab">8th Sem</a>
    <a href="semester9.html" class="semester-tab">9th Sem</a>  <!-- নতুন -->
</div>
```

#### ✅ Step 3: university.html এ Semester Card Add করুন

```html
<!-- Semester 9 Card -->
<a href="semester9.html" class="semester-card" id="semester-9">
    <div class="semester-header">
        <span class="semester-number">9</span>
        <div class="semester-info">
            <h3>9th Semester</h3>
            <p>Fall 2027</p>
        </div>
    </div>
    <div class="semester-stats">
        <div class="stat-item">
            <i class="fas fa-book"></i>
            <span id="sem9-courses">0</span> Courses
        </div>
        <div class="stat-item">
            <i class="fas fa-file-alt"></i>
            <span id="sem9-resources">0</span> Resources
        </div>
    </div>
</a>
```

#### ✅ Step 4: university.html এর JavaScript Update করুন

```javascript
// getSemesterStats calls এ add করুন:
const sem9Stats = getSemesterStats(9);
document.getElementById('sem9-courses').textContent = sem9Stats.courseCount;
document.getElementById('sem9-resources').textContent = sem9Stats.totalResources;
```

#### ✅ Step 5: course.html এর Data Update করুন

```javascript
// semesterLinks object এ add করুন:
const semesterLinks = {
    // ... existing ...
    '9': 'semester9.html'
};

// semesterNames object এ add করুন:
const semesterNames = {
    // ... existing ...
    '9': '9th Semester'
};
```

#### ✅ Step 6: courseData.js এ Courses Add করুন

```javascript
// courseMetadata এ semester 9 courses add করুন:
'new-tech': {
    semester: 9,
    title: 'Emerging Technologies',
    code: 'CSE-901',
    credits: 3,
    description: '...',
    icon: 'fas fa-microchip',
    color: '#06b6d4'
}

// courseResources এ add করুন:
'9-new-tech': []
```

---

## ➖ Course Delete করার Guide

### যখন Course Delete করবেন:

#### ✅ Step 1: courseData.js থেকে Remove করুন

```javascript
// courseMetadata থেকে delete করুন:
// 'ai-lab': { ... }  ← এটা delete করুন

// courseResources থেকে delete করুন:
// '5-ai-lab': [ ... ]  ← এটা delete করুন
```

#### ✅ Step 2: Semester HTML থেকে Course Card Remove করুন

`semester5.html` থেকে ঐ course এর `<a class="course-card">...</a>` পুরোটা delete করুন।

#### 🎉 Done! 
- `university.html` এ semester এর course count কমে যাবে
- `semester5.html` থেকে course card চলে যাবে

---

## ➖ Semester Delete করার Guide

### যখন Semester Delete করবেন:

#### ✅ Step 1: semester HTML file delete করুন
`semester9.html` file delete করুন।

#### ✅ Step 2: সব semester files থেকে navigation tab remove করুন
```html
<!-- এই line সব semester files থেকে delete করুন -->
<a href="semester9.html" class="semester-tab">9th Sem</a>
```

#### ✅ Step 3: university.html থেকে semester card remove করুন
Semester 9 এর card এবং JavaScript code remove করুন।

#### ✅ Step 4: course.html থেকে data remove করুন
```javascript
// semesterLinks এবং semesterNames থেকে '9' remove করুন
```

#### ✅ Step 5: courseData.js থেকে courses remove করুন
সব semester 9 এর courses এবং resources delete করুন।

---

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
```

---

## 📧 EmailJS Contact Form System

### কিভাবে কাজ করে:

Contact form এ EmailJS ব্যবহার করা হয়েছে। দুইটা email যায়:

1. **Main Email** → আপনার কাছে (সব details সহ)
2. **Auto Reply** → User এর কাছে (Thank you message)

### Configuration (contact.html):

```javascript
// EmailJS Credentials
const EMAILJS_PUBLIC_KEY = 'jt_E_2wOZ0XhwSTyF';
const EMAILJS_SERVICE_ID = 'service_sajjad';
const EMAILJS_TEMPLATE_ID = 'template_wwymg5f';        // Main email
const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'template_891ymr7';  // Auto reply

// Template Variables পাঠানো হয়:
{
    name: 'User Name',
    email: 'user@email.com',
    subject: 'Subject',
    message: 'Message content',
    time: 'Monday, January 15, 2026 at 10:30:45 AM'
}
```

### EmailJS Dashboard এ Template Variables:

Main Template (`template_wwymg5f`) এ use করুন:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Message body
- `{{time}}` - Submission time

Auto Reply Template (`template_891ymr7`) এ use করুন:
- `{{name}}` - Sender's name (for greeting)
- `{{email}}` - Sender's email (To address)
- `{{time}}` - When they sent the message

### EmailJS Setup করতে চাইলে:

1. [EmailJS Dashboard](https://dashboard.emailjs.com/) এ যান
2. Email Service add করুন (Gmail/Outlook)
3. Email Templates create করুন
4. `contact.html` এ credentials update করুন

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

## 📝 Quick Reference - কোথায় কি আছে

| যা করতে চান | যেখানে যেতে হবে |
|-------------|----------------|
| Course add করতে | `courseData.js` → `courseMetadata` + semester HTML |
| Resource add করতে | `courseData.js` → `courseResources` |
| Course delete করতে | `courseData.js` + semester HTML থেকে remove |
| Semester add করতে | New HTML + update all semester HTMLs + university.html + course.html |
| Email settings change করতে | `contact.html` → EmailJS section |
| Course page stats দেখতে | `course.html` → uses `getResourceCounts()` |
| Semester page counts দেখতে | `semester1-8.html` → uses `getResourceCounts()` |
| University page stats দেখতে | `university.html` → uses `getSemesterStats()` |

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

### Email send হচ্ছে না?
1. EmailJS credentials সঠিক কিনা check করুন
2. EmailJS dashboard এ quota শেষ হয়ে গেছে কিনা দেখুন
3. Browser console এ error আছে কিনা দেখুন

---

## 📞 Contact

Questions বা help এর জন্য contact করুন:
- Email: sajjadmahmudsuton@gmail.com
- GitHub: github.com/Sajjad-Mahmud-Suton

---

*Last Updated: January 2026*
