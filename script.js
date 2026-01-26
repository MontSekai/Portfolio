// ========================================
// Navigation & Mobile Menu
// ========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Smooth Scrolling
// ========================================
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

// ========================================
// Typing Animation
// ========================================
const typingText = document.getElementById('typingText');
const texts = [
    'Administrateur Système & Réseau',
    'Expert Infrastructure IT',
    'Spécialiste Virtualisation',
    'DevOps Engineer'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before next text
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation
setTimeout(typeText, 1000);

// ========================================
// Particles Animation
// ========================================
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 3 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'rgba(129, 140, 248, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.pointerEvents = 'none';

    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.animation = `floatParticle ${duration}s ${delay}s infinite ease-in-out`;

    return particle;
}

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create particles
for (let i = 0; i < particleCount; i++) {
    particlesContainer.appendChild(createParticle());
}

// ========================================
// Scroll Reveal Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements - only hide those below the viewport
// Exclude project-card because carousel handles them
const elementsToAnimate = document.querySelectorAll('.skill-category, .timeline-item, .about-content, .stat-item');
elementsToAnimate.forEach(el => {
    const rect = el.getBoundingClientRect();
    // Only hide elements that are below the viewport
    if (rect.top > window.innerHeight) {
        el.style.opacity = '0';
    }
    observer.observe(el);
});

// ========================================
// Skill Progress Animation
// ========================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// ========================================
// Contact Form
// ========================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('formName').value,
        email: document.getElementById('formEmail').value,
        subject: document.getElementById('formSubject').value,
        message: document.getElementById('formMessage').value
    };

    // Simulate form submission
    const submitBtn = document.getElementById('btnSubmit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        formStatus.textContent = 'Message envoyé avec succès ! Je vous répondrai bientôt.';
        formStatus.className = 'form-status success';
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }, 1500);

    // In production, replace with actual API call:
    /*
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            formStatus.textContent = 'Message envoyé avec succès !';
            formStatus.className = 'form-status success';
            contactForm.reset();
        } else {
            throw new Error('Erreur lors de l\'envoi');
        }
    } catch (error) {
        formStatus.textContent = 'Une erreur est survenue. Veuillez réessayer.';
        formStatus.className = 'form-status error';
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
    */
});

// Form validation feedback
const formInputs = document.querySelectorAll('.form-input, .form-textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '' && input.hasAttribute('required')) {
            input.style.borderColor = '#EF4444';
        } else {
            input.style.borderColor = '';
        }
    });

    input.addEventListener('input', () => {
        input.style.borderColor = '';
    });
});

// ========================================
// Back to Top Button
// ========================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Project Cards Interaction
// ========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Add click feedback
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 100);

        // If card has onclick attribute, let it handle the link
        // Otherwise, just show console feedback
        if (!card.hasAttribute('onclick')) {
            console.log('Project card clicked');
        }
    });
});

// ========================================
// Projects Carousel
// ========================================
let currentProjectPage = 1;
const totalProjectPages = 2;

const projectsGrids = document.querySelectorAll('.projects-grid');
const prevBtn = document.getElementById('projectsPrev');
const nextBtn = document.getElementById('projectsNext');
const indicators = document.querySelectorAll('.carousel-indicators .indicator');

function showProjectPage(pageNumber) {
    // Update grids
    projectsGrids.forEach(grid => {
        grid.classList.remove('active');
        if (parseInt(grid.dataset.page) === pageNumber) {
            grid.classList.add('active');
        }
    });

    // Update indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
        if (parseInt(indicator.dataset.page) === pageNumber) {
            indicator.classList.add('active');
        }
    });

    currentProjectPage = pageNumber;
}

// Previous button
prevBtn.addEventListener('click', () => {
    if (currentProjectPage > 1) {
        showProjectPage(currentProjectPage - 1);
    } else {
        showProjectPage(totalProjectPages); // Loop to last page
    }
});

// Next button
nextBtn.addEventListener('click', () => {
    if (currentProjectPage < totalProjectPages) {
        showProjectPage(currentProjectPage + 1);
    } else {
        showProjectPage(1); // Loop to first page
    }
});

// Indicators
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const page = parseInt(indicator.dataset.page);
        showProjectPage(page);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
});

// ========================================
// Dynamic Year in Footer
// ========================================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2026', currentYear);
}

// ========================================
// Parallax Effect for Hero Section
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - scrolled / 800;
    }
});

// ========================================
// Mouse Movement Effect on Hero
// ========================================
const heroSection = document.querySelector('.hero');
const orbs = document.querySelectorAll('.gradient-orb');

heroSection.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;

        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// ========================================
// Terminal Animation
// ========================================
const terminalCursor = document.querySelector('.terminal-cursor');
if (terminalCursor) {
    setInterval(() => {
        terminalCursor.style.opacity = terminalCursor.style.opacity === '0' ? '1' : '0';
    }, 500);
}

// ========================================
// Performance Optimization
// ========================================
// Lazy load images when they come into viewport
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Console Message
// ========================================
console.log('%c🚀 Portfolio Administrateur Système & Réseau', 'color: #4F46E5; font-size: 20px; font-weight: bold;');
console.log('%cDéveloppé avec passion et expertise technique', 'color: #06B6D4; font-size: 14px;');
console.log('%c💼 Intéressé par mon profil ? Contactez-moi !', 'color: #10B981; font-size: 12px;');

// ========================================
// Initial Setup
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');

    // Set initial states
    console.log('Portfolio chargé et prêt !');
});
