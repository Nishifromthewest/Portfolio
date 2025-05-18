// Quotes Rotation
const quotes = [
    "Cognito, ergo sum.",
    "Whatever happens, happens",
    "Code is poetry.",
    "Less is more.",
    "Enjoy the little detours",
    "Build or be forgotten.",
    "404: Limits not found.",
    "Ikigai",
    "In the midst of chaos, there is also opportunity.",
    "Don't live your life making up excuses. The one making your choices is yourself!",
    "Build something so good they can't ignore the mark you've left."
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
    const quoteElement = document.querySelector('.quote-text');
    if (!quoteElement) return;

    // Fade out
    quoteElement.classList.remove('visible');
    
    // Wait for fade out, then update text and fade in
    setTimeout(() => {
        quoteElement.textContent = getRandomQuote();
        quoteElement.classList.add('visible');
    }, 500);
}

// Update quote every 5 seconds
setInterval(updateQuote, 5000);

// Initial quote
document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.querySelector('.quote-text');
    if (quoteElement) {
        quoteElement.textContent = getRandomQuote();
        quoteElement.classList.add('visible');
    }
});

// Adjectives for About Section
const adjectives = [
    "Hopeful",
    "Dashing",
    "Curious",
    "Radiant",
    "Courageous",
    "Determined",
    "Whimsical",
    "Starlit",
    "Lovestruck",
    "Endearing",
    "Bright-eyed",
    "Tenacious",
    "Charming",
    "Unyielding",
    "Fearless",
    "Brave",
    "hardworking"
];

function getRandomAdjective() {
    return adjectives[Math.floor(Math.random() * adjectives.length)];
}

function updateAdjective() {
    const adjectiveElement = document.querySelector('.adjective-text');
    if (!adjectiveElement) return;

    // Fade out
    adjectiveElement.classList.remove('visible');
    
    // Wait for fade out, then update text and fade in
    setTimeout(() => {
        adjectiveElement.textContent = getRandomAdjective();
        adjectiveElement.classList.add('visible');
    }, 500);
}

// Update adjective every 3 seconds
setInterval(updateAdjective, 3000);

// Initial adjective
document.addEventListener('DOMContentLoaded', () => {
    const adjectiveElement = document.querySelector('.adjective-text');
    if (adjectiveElement) {
        adjectiveElement.textContent = getRandomAdjective();
        adjectiveElement.classList.add('visible');
    }
});

// Mobile Menu Toggle
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        menuButton.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        menuButton.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    }
});

// Project Modal
const modal = document.querySelector('.project-modal');
const modalContent = modal.querySelector('.modal-body');
const closeButton = modal.querySelector('.modal-close');
const workItems = document.querySelectorAll('.work-item');

// Project data
const projectData = {
    'asa-antwerp': {
        title: 'ASA Antwerp Website',
        subtitle: 'Student Group Website',
        description: 'Creating a website for ASA Antwerp student group featuring a media gallery where members can download photos and videos from events. The site includes event information, member resources, and an easy-to-use media download system.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
        image: 'assets/ASA.jpg',
        apis: [
            {
                name: 'Media Library API',
                description: 'Photo and video gallery management',
                link: 'https://developer.wordpress.org/rest-api/reference/media/'
            },
            {
                name: 'File Download API',
                description: 'Secure file download system',
                link: 'https://developer.mozilla.org/en-US/docs/Web/API/File_API'
            },
            {
                name: 'Image Optimization',
                description: 'Image compression and optimization',
                link: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API'
            }
        ]
    },
    'nani-antwerp-revamp': {
        title: 'Nani Antwerp Website Revamp',
        subtitle: 'Sushi Restaurant Website',
        description: 'Revamping the Nani Antwerp sushi restaurant website with a modern design, online ordering system, and authentic Japanese dining experience showcase. Features include interactive menu, reservation system, and special sushi roll highlights.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
        image: 'assets/Nani.png',
        apis: [
            {
                name: 'Online Ordering',
                description: 'Sushi menu and order management',
                link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
            },
            {
                name: 'Reservation System',
                description: 'Table booking and management',
                link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API'
            },
            {
                name: 'Image Gallery',
                description: 'Sushi photography and restaurant ambiance',
                link: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
            }
        ]
    },
    'pos-system': {
        title: 'POS System',
        subtitle: 'Point of Sale Development',
        description: 'Planning to develop a comprehensive Point of Sale system with inventory management, sales tracking, reporting features and easy customizability.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
        image: 'assets/Portfolio_logo.png',
        apis: [
            {
                name: 'Stripe API',
                description: 'Payment processing and transactions',
                link: 'https://stripe.com/docs/api'
            },
            {
                name: 'Printer API',
                description: 'Receipt printing and management',
                link: 'https://developer.mozilla.org/en-US/docs/Web/API/Printing_API'
            },
            {
                name: 'Barcode Scanner API',
                description: 'Product scanning and inventory',
                link: 'https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API'
            }
        ]
    },
    'sage-project': {
        title: 'Relieving Sage Project',
        subtitle: 'Massage Tool Development',
        description: 'Developing a specialized massage tool to help relieve muscle tension and promote relaxation.Compact for portable carry, intensity control, and user-friendly interface.',
        tech: ['Python', 'Arduino', 'Raspberry Pi', 'IoT'],
        image: 'assets/swedish-massage.jpg',
        apis: [
            {
                name: 'Arduino API',
                description: 'Hardware control and motor management',
                link: 'https://www.arduino.cc/reference/en/'
            },
            {
                name: 'Python GPIO',
                description: 'Raspberry Pi interface and sensor control',
                link: 'https://gpiozero.readthedocs.io/'
            },
            {
                name: 'MQTT',
                description: 'IoT communication and remote control',
                link: 'https://mqtt.org/documentation'
            }
        ]
    },
    'website-jubang': {
        title: 'Website Jubang',
        subtitle: 'Korean Restaurant Website',
        description: 'Creating a modern website for Jubang Korean Restaurant featuring an interactive menu, online reservations, and authentic Korean dining experience showcase. The site will highlight traditional dishes, special events, and cultural elements.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'React'],
        image: 'assets/Jubang.jpg',
        apis: [
            {
                name: 'Reservation System',
                description: 'Online table booking and management',
                link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API'
            },
            {
                name: 'Menu Management',
                description: 'Dynamic menu updates and specials',
                link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
            },
            {
                name: 'Image Gallery',
                description: 'Food photography and restaurant ambiance',
                link: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
            }
        ]
    },
    'portfolio': {
        title: 'My Portfolio',
        subtitle: 'Personal Portfolio Website',
        description: 'Created a personal portfolio website to showcase my work and skills. Features include project displays, contact information, and smooth animations.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Copilot'],
        image: 'assets/Portfolio_logo.png',
        apis: [
            {
                name: 'GitHub Copilot',
                description: 'AI pair programming tool for efficient code development',
                link: 'https://github.com/features/copilot'
            },
            {
                name: 'Google Fonts',
                description: 'Integrated Inter font family for modern typography',
                link: 'https://fonts.google.com/specimen/Inter'
            },
            {
                name: 'Netlify',
                description: 'Website hosting and continuous deployment',
                link: 'https://www.netlify.com'
            }
        ]
    }
};

// Open modal
workItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        const project = projectData[projectId];
        
        modalContent.innerHTML = `
            <div class="work-image" style="background-image: url('${project.image}')"></div>
            <h2>${project.title}</h2>
            <p class="subtitle">${project.subtitle}</p>
            <p class="description">${project.description}</p>
            <div class="tech-stack">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="api-section">
                <h3>API Integrations</h3>
                <div class="api-list">
                    ${project.apis.map(api => `
                        <div class="api-item">
                            <h4>${api.name}</h4>
                            <p>${api.description}</p>
                            <a href="${api.link}" target="_blank" class="api-link">View Documentation →</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeButton.addEventListener('click', closeModal);
modal.querySelector('.modal-overlay').addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const cursorBlob = document.querySelector('.cursor-blob');

document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorBlob.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`;
});

// Cursor hover effect
const links = document.querySelectorAll('a, button, .work-item');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'scale(1.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'scale(1)';
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

// About Modal
const aboutButton = document.getElementById('about-button');
const aboutModal = document.getElementById('about-modal');
const aboutCloseButton = aboutModal?.querySelector('.modal-close');

if (aboutButton && aboutModal) {
    aboutButton.addEventListener('click', () => {
        aboutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    aboutCloseButton?.addEventListener('click', () => {
        aboutModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    aboutModal.querySelector('.modal-overlay')?.addEventListener('click', () => {
        aboutModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Close about modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aboutModal?.classList.contains('active')) {
        aboutModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}); 