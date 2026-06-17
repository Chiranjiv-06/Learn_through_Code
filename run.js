// 1. Mobile Menu Toggle & Auto-Close on Link Click
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Helper to reset menu states
function toggleMenu() {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}

mobileMenu.addEventListener('click', toggleMenu);

// NEW: Close the mobile menu automatically when a user clicks a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// 2. Active Link on Scroll Highlight (Optimized)
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    // FIXED: Changed deprecated pageYOffset to window.scrollY
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Highlights the section when it takes up the top third of the viewport
        if (scrollPosition >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        // FIXED: Checked exact hash value match to prevent multiple highlights
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// 3. Dynamic Self-Typing Effect
const typingText = document.querySelector('.typing-text');
const roles = ['Frontend Developer', 'Machine Learning Enthusiast', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 1500; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before writing next string
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    // Only fire if the element exists on the page
    if (typingText) setTimeout(type, 500);
});

// 4. Form Submission Intercept
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! This message framework is ready to integrate with your mail provider API.');
        e.target.reset();
    });
}