// Login Logic
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    if (password === 'Yagnik10') {
        window.location.href = 'home.html';
    } else {
        errorMsg.textContent = 'Incorrect password. Please try again.';
    }
});

// Dark Mode Toggle
const themeButton = document.getElementById('themeButton');
const body = document.body;

themeButton?.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeButton.textContent = '☀️';
}

// Initialize Calendar
document.addEventListener('DOMContentLoaded', function() {
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
});

// Document Upload
document.querySelectorAll('.upload-btn')?.forEach(button => {
    button.addEventListener('change', function(e) {
        const docName = this.getAttribute('data-doc');
        const file = e.target.files[0];
        if (file) {
            alert(`Uploaded ${file.name} as ${docName}.`);
            // Add logic to save/upload the file
        }
    });
});
