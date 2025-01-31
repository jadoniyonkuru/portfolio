
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Function to set theme and update icon
    function setTheme(mode) {
        if (mode === 'dark') {
            document.body.classList.add('dark-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.body.classList.remove('dark-theme');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
        localStorage.setItem('theme', mode);
    }

    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark' ? 'dark' : 'light');
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
});

  


// Function to toggle the visibility of the skills section
function toggleSkills() {
    const skillsSection = document.getElementById("skills-section");
    const toggleButton = document.getElementById("toggle-skills");

    // Toggle the visibility of the skills section
    skillsSection.classList.toggle("hidden");

    if (skillsSection.classList.contains("hidden")) {
        toggleButton.textContent = "View My Skills";
    } else {
        toggleButton.textContent = "Hide My Skills";
    }
}

// Function to handle form submission 
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    // Show a simple confirmation message
    alert("Message sent successfully!");
    document.querySelector("form").reset(); 
});


const btn = document.getElementById("scrollToTopBtn");
window.onscroll = () => btn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
