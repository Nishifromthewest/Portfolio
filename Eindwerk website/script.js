// Mobile Menu Toggle
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const cursorBlob = document.querySelector('.cursor-blob');

document.addEventListener('mousemove', (e) => {
    // Update cursor position
    cursorDot.style.transform = `translate(${e.clientX - 2.5}px, ${e.clientY - 2.5}px)`;
    cursorOutline.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    cursorBlob.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`;
});

// Cursor hover effect
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorDot.style.transform += ' scale(1.5)';
        cursorOutline.style.transform += ' scale(1.5)';
    });

    link.addEventListener('mouseleave', () => {
        cursorDot.style.transform = cursorDot.style.transform.replace(' scale(1.5)', '');
        cursorOutline.style.transform = cursorOutline.style.transform.replace(' scale(1.5)', '');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in elements on scroll
const fadeElements = document.querySelectorAll('.work-item, .section-title, .about-text, .contact-info');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
}); 