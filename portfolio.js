
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

// Function to download CV
function downloadCV() {
    try {
        const link = document.createElement('a');
        link.href = 'my cv.pdf'; // Using your CV file
        link.download = 'Jean_de_Dieu_NIYONKURU_CV.pdf'; // Clean filename for download
        link.target = '_blank'; // Open in new tab if download fails
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading CV:', error);
        alert('There was an error downloading the CV. Please try again.');
    }
}

// Function to toggle resume sections (Work Experience, Education, Achievements)
function toggleResumeSection(header) {
    const content = header.nextElementSibling;
    const isCollapsed = content.classList.contains('collapsed');
    
    // Toggle classes
    if (isCollapsed) {
        content.classList.remove('collapsed');
        content.classList.add('expanded');
        header.classList.add('active');
    } else {
        content.classList.remove('expanded');
        content.classList.add('collapsed');
        header.classList.remove('active');
    }
}

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skills section when it loads
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});