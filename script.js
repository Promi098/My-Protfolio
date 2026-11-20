// =========================
// DARK MODE & WHITE MODE
// =========================

const themeBtn = document.getElementById("themeBtn");


// Check Previously Saved Theme
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    document.body.classList.remove("light-mode");
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
}


// Theme Button Click
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        localStorage.setItem("portfolioTheme", "light");

    } else {

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        localStorage.setItem("portfolioTheme", "dark");

    }

});


// =========================
// MOBILE NAVIGATION MENU
// =========================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fas fa-times"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    }

});


// Close Menu After Clicking a Link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// =========================
// AUTOMATIC FOOTER YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();

    /* ==========================================
   PROFESSIONAL SKILL DETAILS
========================================== */

const skillDetails = {

    /* ---------- 1. HTML ---------- */
    html: {
        icon: '<i class="fab fa-html5"></i>',
        title: 'HTML',
        subtitle: 'Web Structure & Content',

        description:
            'HTML is the foundation of web development. It is used to structure and organize the content of websites.',

        overview:
            'HTML stands for HyperText Markup Language. It defines the structure of a web page and tells the browser how different content such as headings, paragraphs, images, links, forms and sections should be organized. HTML works together with CSS and JavaScript to build complete websites.',

        uses: [
            'Create the structure of a website.',
            'Add headings, paragraphs and text content.',
            'Insert images, videos and hyperlinks.',
            'Create registration and contact forms.',
            'Organize data using lists and tables.',
            'Build navigation menus and page sections.'
        ],

        topics: [
            'HTML5 Document Structure',
            'Headings and Paragraphs',
            'Links and Images',
            'Lists and Tables',
            'Forms and Input Fields',
            'Semantic HTML Tags',
            'Audio and Video Elements',
            'Basic Accessibility'
        ],

        practical:
            'HTML is used to create personal portfolio websites, landing pages, blogs, student information pages, contact forms, business websites and the basic structure of web applications.',

        technologies: [
            'HTML5',
            'Semantic Elements',
            'Forms',
            'Hyperlinks',
            'Web Structure'
        ]
    },


    /* ---------- 2. CSS ---------- */
    css: {
        icon: '<i class="fab fa-css3-alt"></i>',
        title: 'CSS',
        subtitle: 'Web Design & Styling',

        description:
            'CSS is used to design and style websites. It controls the appearance, layout, colors, spacing, typography, animations and responsiveness of web pages.',

        overview:
            'CSS stands for Cascading Style Sheets. It transforms plain HTML content into visually attractive web interfaces. CSS allows developers to control how elements look, where they appear, how much space they occupy and how a website responds to different screen sizes.',

        uses: [
            'Design beautiful and professional website interfaces.',
            'Change colors, backgrounds, fonts and text styles.',
            'Control spacing using margin and padding.',
            'Create layouts using Flexbox and CSS Grid.',
            'Add hover effects, transitions and animations.',
            'Make websites responsive for mobile and desktop.',
            'Design buttons, navigation bars and cards.',
            'Create light and dark theme styles.'
        ],

        topics: [
            'CSS Selectors and Properties',
            'Colors and Backgrounds',
            'Typography and Font Styling',
            'Margin, Padding and Box Model',
            'Flexbox Layout',
            'CSS Grid Layout',
            'Hover Effects',
            'Transitions and Animations',
            'Media Queries',
            'Responsive Web Design'
        ],

        practical:
            'CSS is used to create responsive portfolios, modern landing pages, navigation menus, card layouts, buttons, animated interfaces, dashboards, mobile-friendly websites and professional web designs.',

        technologies: [
            'CSS3',
            'Flexbox',
            'CSS Grid',
            'Media Queries',
            'Transitions',
            'Animations'
        ]
    },


    /* ---------- 3. JAVASCRIPT ---------- */
    javascript: {
        icon: '<i class="fab fa-js"></i>',
        title: 'JavaScript',
        subtitle: 'Web Interaction & Functionality',

        description:
            'JavaScript adds functionality and interactivity to websites. It helps web pages respond to user actions and dynamically update content.',

        overview:
            'JavaScript is a programming language used to make websites interactive. It works with HTML and CSS to control buttons, menus, forms, popups, animations, theme switching and other dynamic features.',

        uses: [
            'Make buttons work when clicked.',
            'Create Dark Mode and White Mode.',
            'Open and close popup windows.',
            'Show interactive messages and alerts.',
            'Validate contact and registration forms.',
            'Control menus and navigation.',
            'Update webpage content dynamically.',
            'Respond to user actions and events.'
        ],

        topics: [
            'Variables and Data Types',
            'Operators',
            'If-Else Conditions',
            'Loops',
            'Functions',
            'Arrays and Objects',
            'DOM Manipulation',
            'Event Handling',
            'Form Validation',
            'Interactive Web Features'
        ],

        practical:
            'JavaScript can be used to build interactive portfolio websites, calculators, popup dialogs, form validation systems, theme toggles, image sliders, navigation menus, counters and other browser-based applications.',

        technologies: [
            'JavaScript',
            'DOM',
            'Events',
            'Functions',
            'Form Validation',
            'Interactive UI'
        ]
    },


    /* ---------- 4. C++ ---------- */
    cpp: {
        icon: '<i class="fas fa-code"></i>',
        title: 'C++',
        subtitle: 'Programming & Problem Solving',

        description:
            'C++ is a programming language used to learn programming fundamentals, develop logical thinking and solve computational problems.',

        overview:
            'C++ is a general-purpose programming language. It provides a strong foundation in programming through variables, data types, conditions, loops, functions, arrays and basic object-oriented concepts. It is widely used in programming education and software development.',

        uses: [
            'Write programs to solve different problems.',
            'Perform mathematical calculations.',
            'Make decisions using conditional statements.',
            'Repeat tasks using loops.',
            'Create reusable functions.',
            'Process data using arrays.',
            'Build simple console-based applications.',
            'Develop logical and algorithmic thinking.'
        ],

        topics: [
            'Variables and Data Types',
            'Input and Output (cin / cout)',
            'Operators',
            'If-Else Conditions',
            'Switch Statements',
            'For and While Loops',
            'Functions',
            'Arrays',
            'Basic OOP Concepts',
            'Problem Solving'
        ],

        practical:
            'C++ is used in beginner programming projects such as calculators, student grade systems, number guessing games, menu-driven programs, simple record systems, mathematical programs and laboratory assignments.',

        technologies: [
            'C++',
            'Programming Logic',
            'Algorithms',
            'Functions',
            'Arrays',
            'Problem Solving'
        ]
    },


    /* ---------- 5. DATABASE ---------- */
    database: {
        icon: '<i class="fas fa-database"></i>',
        title: 'Database',
        subtitle: 'Data Storage & Management',

        description:
            'Database technology helps store, organize, retrieve and manage information efficiently in a structured way.',

        overview:
            'A database is an organized collection of information that can be accessed and managed when needed. Database systems are important for websites and applications that need to store user details, student records, products, transactions or other information.',

        uses: [
            'Store information in an organized structure.',
            'Manage student, user and product records.',
            'Search and retrieve stored information.',
            'Add new records to database tables.',
            'Update existing information.',
            'Delete unnecessary records.',
            'Organize data using table relationships.',
            'Support data-driven applications.'
        ],

        topics: [
            'Database Fundamentals',
            'Tables, Rows and Columns',
            'Primary Keys',
            'Foreign Keys',
            'SQL Basics',
            'SELECT Queries',
            'INSERT Queries',
            'UPDATE Queries',
            'DELETE Queries',
            'Basic Relationships'
        ],

        practical:
            'Database concepts are used in student management systems, library management software, attendance systems, online shops, login systems, hospital records and applications that need to store and retrieve information.',

        technologies: [
            'Database Concepts',
            'SQL',
            'MySQL Basics',
            'Tables',
            'Queries',
            'Data Management'
        ]
    },


    /* ---------- 6. TEAMWORK ---------- */
    teamwork: {
        icon: '<i class="fas fa-users"></i>',
        title: 'Teamwork',
        subtitle: 'Communication & Collaboration',

        description:
            'Teamwork is the ability to work effectively with others, share ideas, communicate clearly and collaborate to achieve a common goal.',

        overview:
            'Teamwork is an important personal and professional skill. It helps people cooperate, divide responsibilities, learn from each other, manage tasks and complete projects through shared effort. Good teamwork also improves communication and problem-solving.',

        uses: [
            'Work effectively on group assignments.',
            'Share ideas and knowledge with others.',
            'Divide tasks among team members.',
            'Communicate clearly and respectfully.',
            'Help others solve problems.',
            'Manage time and responsibilities.',
            'Accept feedback and improve.',
            'Achieve common project goals.'
        ],

        topics: [
            'Communication Skills',
            'Team Collaboration',
            'Sharing Ideas',
            'Task Management',
            'Time Management',
            'Problem Solving',
            'Responsibility',
            'Adaptability',
            'Respectful Feedback',
            'Cooperation'
        ],

        practical:
            'Teamwork is useful in university group assignments, class presentations, laboratory work, website development projects, software projects, student activities and professional workplaces where people work together.',

        technologies: [
            'Communication',
            'Collaboration',
            'Team Projects',
            'Task Planning',
            'Time Management',
            'Problem Solving'
        ]
    }

};


/* ==========================================
   OPEN SKILL DETAILS
========================================== */

function openSkill(skillName) {

    const skill = skillDetails[skillName];

    if (!skill) return;

    // Set icon
    document.getElementById('skillIcon').innerHTML = skill.icon;

    // Set title
    document.getElementById('skillTitle').textContent = skill.title;

    // Set subtitle
    document.getElementById('skillSubtitle').textContent = skill.subtitle;

    // Set description
    document.getElementById('skillDescription').textContent = skill.description;

    // Set overview
    document.getElementById('skillOverview').textContent = skill.overview;

    // Set practical applications
    document.getElementById('skillPractical').textContent = skill.practical;


    // Function to fill lists
    function fillSkillList(elementId, items) {

        const list = document.getElementById(elementId);

        list.innerHTML = '';

        items.forEach(function(item) {

            const li = document.createElement('li');

            li.textContent = item;

            list.appendChild(li);

        });

    }


    // What Can I Do With This?
    fillSkillList('skillUses', skill.uses);

    // Key Topics
    fillSkillList('skillList', skill.topics);


    // Technologies Tags
    const techContainer = document.getElementById('skillTech');

    techContainer.innerHTML = '';

    skill.technologies.forEach(function(technology) {

        const tag = document.createElement('span');

        tag.textContent = technology;

        techContainer.appendChild(tag);

    });


    // Show popup
    const modal = document.getElementById('skillModal');

    modal.classList.add('show');

    document.body.style.overflow = 'hidden';

}


/* ==========================================
   CLOSE SKILL POPUP
========================================== */

function closeSkill() {

    const modal = document.getElementById('skillModal');

    modal.classList.remove('show');

    document.body.style.overflow = '';

}


/* Close when clicking outside popup */

document.getElementById('skillModal').addEventListener('click', function(event) {

    if (event.target === this) {
        closeSkill();
    }

});


/* Close using Escape key */

document.addEventListener('keydown', function(event) {

    if (event.key === 'Escape') {
        closeSkill();
    }

});