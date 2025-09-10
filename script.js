// Dark Mode Toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const themeIcon = document.querySelector('.theme-toggle i');

    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
});

// Check for saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    document.querySelector('.theme-toggle i').className = 'fas fa-sun';
}

// Scroll Animations
const sections = document.querySelectorAll('.section');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

sections.forEach(section => {
    appearOnScroll.observe(section);
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Calendar
if (document.getElementById('familyCalendar')) {
    const calendarEl = document.getElementById('familyCalendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Family Reunion', date: '2025-12-25' },
            { title: 'Anniversary', date: '2025-10-15' }
        ],
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }
    });
    calendar.render();
}

// Document Upload
document.querySelectorAll('.upload-btn').forEach(button => {
    button.addEventListener('change', function(e) {
        const docName = this.getAttribute('data-doc');
        const file = e.target.files[0];
        if (file) {
            alert(`Uploaded ${file.name} as ${docName}.`);
        }
    });
});
