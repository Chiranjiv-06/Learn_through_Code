// 1. Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Simple toggle icon flip animation effect
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// 2. Active Link on Scroll Highlight
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Determines which section is currently taking up the viewport
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
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

    // Dynamic pacing adjustment based on whether it is typing or deleting
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 1500; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // Shift to next string index
        typeSpeed = 500; // Pause before writing next string
    }

    setTimeout(type, typeSpeed);
}

// Fire typing animation once DOM content loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);
});

// 4. Form Submission Intercept
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! This message framework is ready to integrate with your mail provider API.');
    e.target.reset();
});


