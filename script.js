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
// Dynamic Glowing Topographic Background (Canvas)
// ========================================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;

// Simplex Noise (Self-contained)
const Noise = (function () {
    const p = new Uint8Array(512);
    const perm = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
    for (let i = 0; i < 256; i++) p[256 + i] = p[i] = perm[i];
    function dot(g, x, y, z) { return g[0] * x + g[1] * y + g[2] * z; }
    const grad3 = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1], [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]];
    return {
        noise: function (xin, yin, zin) {
            let n0, n1, n2, n3;
            const F3 = 1.0 / 3.0;
            const s = (xin + yin + zin) * F3;
            const i = Math.floor(xin + s);
            const j = Math.floor(yin + s);
            const k = Math.floor(zin + s);
            const G3 = 1.0 / 6.0;
            const t = (i + j + k) * G3;
            const X0 = i - t;
            const Y0 = j - t;
            const Z0 = k - t;
            const x0 = xin - X0;
            const y0 = yin - Y0;
            const z0 = zin - Z0;
            let i1, j1, k1, i2, j2, k2;
            if (x0 >= y0) {
                if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
                else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
                else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
            } else {
                if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
                else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
                else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
            }
            const x1 = x0 - i1 + G3;
            const y1 = y0 - j1 + G3;
            const z1 = z0 - k1 + G3;
            const x2 = x0 - i2 + 2.0 * G3;
            const y2 = y0 - j2 + 2.0 * G3;
            const z2 = z0 - k2 + 2.0 * G3;
            const x3 = x0 - 1.0 + 3.0 * G3;
            const y3 = y0 - 1.0 + 3.0 * G3;
            const z3 = z0 - 1.0 + 3.0 * G3;
            const ii = i & 255;
            const jj = j & 255;
            const kk = k & 255;
            const gi0 = grad3[p[ii + p[jj + p[kk]]] % 12];
            const gi1 = grad3[p[ii + i1 + p[jj + j1 + p[kk + k1]]] % 12];
            const gi2 = grad3[p[ii + i2 + p[jj + j2 + p[kk + k2]]] % 12];
            const gi3 = grad3[p[ii + 1 + p[jj + 1 + p[kk + 1]]] % 12];
            let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
            if (t0 < 0) n0 = 0.0; else { t0 *= t0; n0 = t0 * t0 * dot(gi0, x0, y0, z0); }
            let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
            if (t1 < 0) n1 = 0.0; else { t1 *= t1; n1 = t1 * t1 * dot(gi1, x1, y1, z1); }
            let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
            if (t2 < 0) n2 = 0.0; else { t2 *= t2; n2 = t2 * t2 * dot(gi2, x2, y2, z2); }
            let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
            if (t3 < 0) n3 = 0.0; else { t3 *= t3; n3 = t3 * t3 * dot(gi3, x3, y3, z3); }
            return 32.0 * (n0 + n1 + n2 + n3);
        }
    };
})();

// Configuration
const config = {
    noiseScale: 0.001, // Increased frequency for more "alterations"
    speed: 0.0002, // Slower animation
    glowColors: [
        'rgba(0, 255, 255, 0.15)',    // Cyan
        'rgba(139, 92, 246, 0.15)',   // Violet
        'rgba(236, 72, 153, 0.15)',   // Rose
        'rgba(16, 185, 129, 0.15)',   // Emeraude
        'rgba(59, 130, 246, 0.15)'    // Bleu royal
    ]
};

let time = 0;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

function drawTopography() {
    ctx.clearRect(0, 0, width, height);

    // Draw systems on the sides
    drawOrganicSystem(width * 1.2, height * 1.2, Math.max(width, height) * 1.2);
    drawOrganicSystem(-width * 0.2, -height * 0.2, Math.max(width, height) * 0.8);

    time += config.speed;
    requestAnimationFrame(drawTopography);
}

function drawOrganicSystem(centerX, centerY, maxRadius) {
    // Increased spacing to 350 for fewer lines as requested
    for (let r = 100; r < maxRadius; r += 350) {
        ctx.beginPath();

        let colorIndex = Math.floor(r / 200) % config.glowColors.length;
        ctx.strokeStyle = config.glowColors[colorIndex];
        ctx.lineWidth = 1;

        // Restore high quality glow (ShadowBlur)
        ctx.shadowBlur = 10;
        ctx.shadowColor = config.glowColors[colorIndex].replace('0.15)', '0.5)');

        // Restore high resolution for smooth curves (0.02 step)
        for (let angle = 0; angle <= Math.PI * 2; angle += 0.02) {
            const xBase = centerX + Math.cos(angle) * r;
            const yBase = centerY + Math.sin(angle) * r;

            // Noise based distortion
            const noiseVal = Noise.noise(xBase * config.noiseScale, yBase * config.noiseScale, time - r * 0.0005);

            const distortion = 250 * noiseVal; // Increased distortion for more wave effect

            const x = centerX + Math.cos(angle) * (r + distortion);
            const y = centerY + Math.sin(angle) * (r + distortion);

            if (angle === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawTopography();



// ========================================
// Scroll Reveal Animations
// ========================================
// ========================================
// Reusable Observer Utility
// ========================================
function createObserver(targetSelector, callback, options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const finalOptions = { ...defaultOptions, ...options };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, finalOptions);

    document.querySelectorAll(targetSelector).forEach(el => {
        // Only hide elements that are below the viewport
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
            el.style.opacity = '0';
        }
        observer.observe(el);
    });

    return observer;
}

// ========================================
// Scroll Reveal Animations
// ========================================
createObserver('.timeline-item, .about-content, .stat-item', (target) => {
    target.classList.add('fade-in');
    target.style.opacity = '1';
});

// ========================================
// Skill Progress Animation
// ========================================
createObserver('.skill-category', (target) => {
    target.classList.add('fade-in');
    target.style.opacity = '1';

    const progressBars = target.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}, { threshold: 0.5 });

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

    // EmailJS Submission
    const submitBtn = document.getElementById('btnSubmit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled = true;

    // Paramètres EmailJS (à remplacer par les vôtres)
    // Service ID: Identifiant du service mail (ex: Gmail)
    // Template ID: Identifiant du modèle de mail créé sur EmailJS
    const serviceID = 'service_mu96xj2';
    const templateID = 'template_paro9q1';

    emailjs.sendForm(serviceID, templateID, contactForm)
        .then(() => {
            formStatus.textContent = 'Message envoyé avec succès ! Je vous répondrai bientôt.';
            formStatus.className = 'form-status success';
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }, (err) => {
            console.error('Erreur EmailJS:', err);
            formStatus.textContent = 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.';
            formStatus.className = 'form-status error';
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
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
// Experience Dropdown
// ========================================
const btnShowOldExp = document.getElementById('btnShowOldExp');
const oldExperienceContainer = document.getElementById('oldExperienceContainer');

if (btnShowOldExp && oldExperienceContainer) {
    btnShowOldExp.addEventListener('click', () => {
        const isOpen = oldExperienceContainer.classList.contains('open');

        if (isOpen) {
            oldExperienceContainer.classList.remove('open');
            btnShowOldExp.classList.remove('active');
            btnShowOldExp.querySelector('span').textContent = 'Voir les expériences plus anciennes';
        } else {
            oldExperienceContainer.classList.add('open');
            btnShowOldExp.classList.add('active');
            btnShowOldExp.querySelector('span').textContent = 'Masquer les expériences anciennes';
        }
    });
}

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

    // Background Parallax Effect removed as unused

    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - scrolled / 800;
    }
});

// Mouse movement effect removed (old orbs)

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

// ========================================
// Language Switcher System
// ========================================
// Translations are now loaded from translations.js

let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

// Language Switcher UI
const langSwitcher = document.getElementById('langSwitcher');
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langOptions = document.querySelectorAll('.lang-option');
const langCurrentText = document.querySelector('.lang-current');

// Toggle dropdown
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSwitcher.classList.toggle('open');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!langSwitcher.contains(e.target)) {
        langSwitcher.classList.remove('open');
    }
});

// Language option click
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        setLanguage(lang);
        langSwitcher.classList.remove('open');
    });
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Update button text
    langCurrentText.textContent = lang.toUpperCase();

    // Update active state on options
    langOptions.forEach(opt => {
        opt.classList.remove('active');
        if (opt.dataset.lang === lang) {
            opt.classList.add('active');
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Apply translations
    applyTranslations(lang);

    // Update typing texts array
    updateTypingTexts(lang);
}

function applyTranslations(lang) {
    const t = translations[lang];

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home') link.textContent = t['nav.home'];
        if (href === '#about') link.textContent = t['nav.about'];
        if (href === '#skills') link.textContent = t['nav.skills'];
        if (href === '#experience') link.textContent = t['nav.experience'];
        if (href === '#experience') link.textContent = t['nav.experience'];
        if (href === '#projects') link.textContent = t['nav.projects'];
        if (href === '#goals') link.textContent = t['nav.goals'];
        if (href === '#contact') link.textContent = t['nav.contact'];
    });

    // Hero Section
    const heroGreeting = document.querySelector('.hero-greeting');
    if (heroGreeting) heroGreeting.textContent = t['hero.greeting'];

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.textContent = t['hero.description'];

    const btnProjects = document.getElementById('btnProjects');
    if (btnProjects) {
        btnProjects.innerHTML = `<i class="fas fa-folder-open"></i> ${t['hero.btn.projects']}`;
    }

    const btnContact = document.getElementById('btnContact');
    if (btnContact) {
        btnContact.innerHTML = `<i class="fas fa-envelope"></i> ${t['hero.btn.contact']}`;
    }

    // About Section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const aboutTag = aboutSection.querySelector('.section-tag');
        if (aboutTag) aboutTag.textContent = t['about.tag'];

        const aboutTitle = aboutSection.querySelector('.section-title');
        if (aboutTitle) aboutTitle.textContent = t['about.title'];

        const aboutSubtitle = aboutSection.querySelector('.about-subtitle');
        if (aboutSubtitle) aboutSubtitle.textContent = t['about.subtitle'];

        const aboutDescs = aboutSection.querySelectorAll('.about-description');
        if (aboutDescs[0]) aboutDescs[0].textContent = t['about.desc1'];
        if (aboutDescs[1]) aboutDescs[1].textContent = t['about.desc2'];

        const interestsTitle = aboutSection.querySelector('.interests-title');
        if (interestsTitle) interestsTitle.textContent = t['about.interests'];

        const interestItems = aboutSection.querySelectorAll('.interest-item span');
        if (interestItems[0]) interestItems[0].textContent = t['about.interest.radio'];
        if (interestItems[1]) interestItems[1].textContent = t['about.interest.roller'];
        if (interestItems[2]) interestItems[2].textContent = t['about.interest.hiking'];
        if (interestItems[3]) interestItems[3].textContent = t['about.interest.triathlon'];

        const interestItemDivs = aboutSection.querySelectorAll('.interest-item');
        if (interestItemDivs[0]) interestItemDivs[0].setAttribute('data-tooltip', t['about.tooltip.radio']);
        if (interestItemDivs[1]) interestItemDivs[1].setAttribute('data-tooltip', t['about.tooltip.roller']);
        if (interestItemDivs[2]) interestItemDivs[2].setAttribute('data-tooltip', t['about.tooltip.hiking']);
        if (interestItemDivs[3]) interestItemDivs[3].setAttribute('data-tooltip', t['about.tooltip.triathlon']);


    }

    // Skills Section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillsTag = skillsSection.querySelector('.section-tag');
        if (skillsTag) skillsTag.textContent = t['skills.tag'];

        const skillsTitle = skillsSection.querySelector('.section-title');
        if (skillsTitle) skillsTitle.textContent = t['skills.title'];

        const skillTitles = skillsSection.querySelectorAll('.skill-title');
        if (skillTitles[0]) skillTitles[0].textContent = t['skills.os'];
        if (skillTitles[1]) skillTitles[1].textContent = t['skills.network'];
        if (skillTitles[2]) skillTitles[2].textContent = t['skills.cloud'];
        if (skillTitles[3]) skillTitles[3].textContent = t['skills.scripting'];
        if (skillTitles[4]) skillTitles[4].textContent = t['skills.monitoring'];
        if (skillTitles[5]) skillTitles[5].textContent = t['skills.database'];
    }

    // Certifications
    const certsSection = document.getElementById('certifications');
    if (certsSection) {
        const certsTag = certsSection.querySelector('.section-tag');
        if (certsTag) certsTag.textContent = t['certs.tag'];

        const certsTitle = certsSection.querySelector('.section-title');
        if (certsTitle) certsTitle.textContent = t['certs.title'];

        const certLink = certsSection.querySelector('.cert-link span');
        if (certLink) certLink.textContent = t['certs.view'];

        // Update individual certification cards
        const certCards = certsSection.querySelectorAll('.certification-card[data-cert]');
        certCards.forEach(card => {
            const certId = card.dataset.cert;
            const titleKey = `cert.${certId}.title`;
            const issuerKey = `cert.${certId}.issuer`;
            const dateKey = `cert.${certId}.date`;

            const titleEl = card.querySelector('.cert-title');
            const issuerEl = card.querySelector('.cert-issuer');
            const dateEl = card.querySelector('.cert-date');

            if (titleEl && t[titleKey]) titleEl.textContent = t[titleKey];
            if (issuerEl && t[issuerKey]) issuerEl.textContent = t[issuerKey];
            if (dateEl && t[dateKey]) dateEl.innerHTML = `<i class="far fa-calendar-alt"></i> ${t[dateKey]}`;
        });
    }

    // Experience Section
    const expSection = document.getElementById('experience');
    if (expSection) {
        const expTag = expSection.querySelector('.section-tag');
        if (expTag) expTag.textContent = t['exp.tag'];

        const expTitle = expSection.querySelector('.section-title');
        if (expTitle) expTitle.textContent = t['exp.title'];

        // Update individual experience cards
        const expItems = expSection.querySelectorAll('.timeline-item[data-exp]');
        expItems.forEach(item => {
            const expId = item.dataset.exp;
            const dateKey = `exp.${expId}.date`;
            const titleKey = `exp.${expId}.title`;
            const companyKey = `exp.${expId}.company`;
            const descKey = `exp.${expId}.desc`;

            const dateEl = item.querySelector('.timeline-date');
            const titleEl = item.querySelector('.timeline-title');
            const companyEl = item.querySelector('.timeline-company');
            const descEl = item.querySelector('.timeline-description');

            if (dateEl && t[dateKey]) dateEl.textContent = t[dateKey];
            if (titleEl && t[titleKey]) titleEl.textContent = t[titleKey];
            if (companyEl && t[companyKey]) companyEl.textContent = t[companyKey];
            if (descEl && t[descKey]) descEl.textContent = t[descKey];
        });
    }



    // Goals Section
    const goalsSection = document.getElementById('goals');
    if (goalsSection) {
        // Manual handling for elements without data-i18n
        const goalsTag = goalsSection.querySelector('.section-tag');
        if (goalsTag) goalsTag.textContent = t['goals.tag'];

        const goalsTitle = goalsSection.querySelector('.section-title');
        if (goalsTitle) goalsTitle.textContent = t['goals.title'];

        const colTitles = goalsSection.querySelectorAll('.goal-column-title');
        // First column "Current Focus" (no data-i18n in HTML yet)
        if (colTitles[0]) colTitles[0].innerHTML = `<i class="fas fa-microchip"></i> ${t['goals.current.title']}`;

        // Second column "Future Goals" HAS data-i18n, so generic handler will cover it, BUT
        // we need to ensure the icon is preserved. The generic handler does that. 
        // So we don't need manual handling for colTitles[1] anymore.

        // Generic data-i18n handler for this section
        const translatableElements = goalsSection.querySelectorAll('[data-i18n]');
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                // Preserve icons if present at start of element
                const icon = el.querySelector('i');
                if (icon && el.firstChild === icon) {
                    // Update text node only
                    const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                    if (textNode) {
                        textNode.textContent = ' ' + t[key];
                    } else {
                        el.appendChild(document.createTextNode(' ' + t[key]));
                    }
                } else {
                    el.textContent = t[key];
                }
            }
        });

        // Current Focus cards (manual handling as they lack data-i18n specific ID/logic in HTML)
        const focusCard = goalsSection.querySelector('.current-focus');
        if (focusCard) {
            focusCard.querySelector('.goal-title').textContent = t['goal.focus.title'];
            focusCard.querySelector('.goal-description').textContent = t['goal.focus.desc'];
        }
    }

    // ========================================
    // Ghost Mouse Animation for Tooltips
    // ========================================
    function playTooltipDemo() {
        const interestsSection = document.querySelector('.about-interests');
        const items = document.querySelectorAll('.interest-item.has-tooltip');
        if (!interestsSection || items.length === 0) return;

        // Create ghost cursor
        const cursor = document.createElement('div');
        cursor.classList.add('demo-cursor');
        document.body.appendChild(cursor);

        // Initial position (off-screen or near section)
        const startRect = interestsSection.getBoundingClientRect();
        const startScrollX = window.scrollX || window.pageXOffset;
        const startScrollY = window.scrollY || window.pageYOffset;
        cursor.style.left = `${startRect.right + startScrollX + 50}px`;
        cursor.style.top = `${startRect.top + startScrollY + 100}px`;
        cursor.style.opacity = '1';

        // Sequence of moves
        let delay = 500;
        const moveDuration = 800;
        const dwellDuration = 1200;

        items.forEach((item, index) => {
            setTimeout(() => {
                const rect = item.getBoundingClientRect();
                const scrollX = window.scrollX || window.pageXOffset;
                const scrollY = window.scrollY || window.pageYOffset;

                // Move to center of item (absolute document coordinates)
                const targetX = rect.left + scrollX + rect.width / 2;
                const targetY = rect.top + scrollY + rect.height / 2;

                cursor.style.left = `${targetX}px`;
                cursor.style.top = `${targetY}px`;

                // Add active class after move
                setTimeout(() => {
                    item.classList.add('demo-active');
                }, moveDuration);

                // Remove active class after dwell
                setTimeout(() => {
                    item.classList.remove('demo-active');
                }, moveDuration + dwellDuration);

            }, delay);

            delay += moveDuration + dwellDuration + 200; // Gap between items
        });

        // Hide and remove cursor at the end
        setTimeout(() => {
            cursor.style.opacity = '0';
            setTimeout(() => {
                cursor.remove();
            }, 500);
        }, delay);
    }

    // Trigger animation when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Wait a bit before starting
                setTimeout(playTooltipDemo, 1000);
                observer.disconnect(); // Run only once
            }
        });
    }, { threshold: 0.5 });

    const interestsSectionObserver = document.querySelector('.about-interests');
    if (interestsSectionObserver) {
        observer.observe(interestsSectionObserver);
    }

    // Update toggle button text
    const btnShowOldExp = document.getElementById('btnShowOldExp');
    if (btnShowOldExp) {
        const isOpen = document.getElementById('oldExperienceContainer')?.classList.contains('open');
        btnShowOldExp.querySelector('span').textContent = isOpen ? t['exp.hide.old'] : t['exp.show.old'];
    }

    // Projects Section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const projectsTag = projectsSection.querySelector('.section-tag');
        if (projectsTag) projectsTag.textContent = t['projects.tag'];

        const projectsTitle = projectsSection.querySelector('.section-title');
        if (projectsTitle) projectsTitle.textContent = t['projects.title'];

        // Update project badges
        const schoolBadges = projectsSection.querySelectorAll('.school-badge');
        schoolBadges.forEach(badge => badge.textContent = t['projects.school']);

        const proBadges = projectsSection.querySelectorAll('.pro-badge');
        proBadges.forEach(badge => badge.textContent = t['projects.pro']);

        const homelabBadges = projectsSection.querySelectorAll('.homelab-badge');
        homelabBadges.forEach(badge => badge.textContent = t['projects.homelab']);



        // Update individual project cards
        const projectCards = projectsSection.querySelectorAll('.project-card[data-project]');
        projectCards.forEach(card => {
            const projectId = card.dataset.project;
            const titleKey = `project.${projectId}.title`;
            const descKey = `project.${projectId}.desc`;

            const titleEl = card.querySelector('.project-title');
            const descEl = card.querySelector('.project-description');

            if (titleEl && t[titleKey]) titleEl.textContent = t[titleKey];
            if (descEl) {
                let text = t[descKey];
                const shortDescKey = `project.${projectId}.desc.short`;
                if (window.innerWidth <= 480 && t[shortDescKey]) {
                    text = t[shortDescKey];
                }
                if (text) descEl.textContent = text;
            }
        });

        // Update placeholder cards
        const placeholderCards = projectsSection.querySelectorAll('.placeholder-card');
        placeholderCards.forEach(card => {
            const title = card.querySelector('.project-title');
            const desc = card.querySelector('.project-description');
            if (title) title.textContent = t['projects.coming'];
            if (desc) desc.textContent = t['projects.coming.desc'];
        });
    }

    // Contact Section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const contactTag = contactSection.querySelector('.section-tag');
        if (contactTag) contactTag.textContent = t['contact.tag'];

        const contactTitle = contactSection.querySelector('.section-title');
        if (contactTitle) contactTitle.textContent = t['contact.title'];

        const contactSubtitle = contactSection.querySelector('.contact-subtitle');
        if (contactSubtitle) contactSubtitle.textContent = t['contact.subtitle'];

        const contactText = contactSection.querySelector('.contact-text');
        if (contactText) contactText.textContent = t['contact.text'];

        const contactH4s = contactSection.querySelectorAll('.contact-text-info h4');
        if (contactH4s[1]) contactH4s[1].textContent = t['contact.phone'];
        if (contactH4s[2]) contactH4s[2].textContent = t['contact.location'];

        // Form labels
        const formLabels = contactSection.querySelectorAll('.form-label');
        if (formLabels[0]) formLabels[0].textContent = t['contact.form.name'];
        if (formLabels[1]) formLabels[1].textContent = t['contact.form.email'];
        if (formLabels[2]) formLabels[2].textContent = t['contact.form.subject'];
        if (formLabels[3]) formLabels[3].textContent = t['contact.form.message'];

        // Form placeholders
        const formName = document.getElementById('formName');
        const formEmail = document.getElementById('formEmail');
        const formSubject = document.getElementById('formSubject');
        const formMessage = document.getElementById('formMessage');

        if (formName) formName.placeholder = t['contact.form.placeholder.name'];
        if (formEmail) formEmail.placeholder = t['contact.form.placeholder.email'];
        if (formSubject) formSubject.placeholder = t['contact.form.placeholder.subject'];
        if (formMessage) formMessage.placeholder = t['contact.form.placeholder.message'];

        const btnSubmit = document.getElementById('btnSubmit');
        if (btnSubmit && !btnSubmit.disabled) {
            btnSubmit.innerHTML = `<i class="fas fa-paper-plane"></i> ${t['contact.form.submit']}`;
        }
    }

    // Footer
    const footer = document.querySelector('.footer');
    if (footer) {
        const footerTagline = footer.querySelector('.footer-tagline');
        if (footerTagline) footerTagline.textContent = t['footer.tagline'];

        const footerH4s = footer.querySelectorAll('.footer-links h4');
        if (footerH4s[0]) footerH4s[0].textContent = t['footer.nav'];
        if (footerH4s[1]) footerH4s[1].textContent = t['footer.projects'];

        // Footer navigation links
        const footerLinks = footer.querySelectorAll('.footer-links ul li a');
        footerLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#home') link.textContent = t['nav.home'];
            if (href === '#about') link.textContent = t['nav.about'];
            if (href === '#skills') link.textContent = t['nav.skills'];
            if (href === '#experience') link.textContent = t['nav.experience'];
            if (href === '#projects') link.textContent = t['footer.all.projects'];
            if (href === '#contact') link.textContent = t['nav.contact'];
        });
    }

    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator p');
    if (scrollIndicator) scrollIndicator.textContent = t['scroll'];
}

function updateTypingTexts(lang) {
    const t = translations[lang];
    texts[0] = t['typing.0'];
    texts[1] = t['typing.1'];
    texts[2] = t['typing.2'];
    texts[3] = t['typing.3'];
}



// ========================================
// Dynamic Placeholders Generation
// ========================================
function generatePlaceholders() {
    const targetGrid = document.querySelector('.projects-grid[data-page="2"]');
    if (!targetGrid) return;

    // Count existing real projects (not placeholders)
    const existingProjects = targetGrid.querySelectorAll('.project-card:not(.placeholder-card)').length;
    const placeholdersNeeded = 6 - existingProjects;

    if (placeholdersNeeded <= 0) return;

    // Create placeholders
    for (let i = 0; i < placeholdersNeeded; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'project-card placeholder-card';

        const iconDiv = document.createElement('div');
        iconDiv.className = 'project-icon';
        iconDiv.innerHTML = '<i class="fas fa-plus"></i>';

        const titleVal = translations[currentLang]?.['projects.coming'] || 'Projet à venir';
        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = titleVal;

        const descVal = translations[currentLang]?.['projects.coming.desc'] || 'Emplacement réservé pour un futur projet à ajouter.';
        const desc = document.createElement('p');
        desc.className = 'project-description';
        desc.textContent = descVal;

        placeholder.appendChild(iconDiv);
        placeholder.appendChild(title);
        placeholder.appendChild(desc);

        targetGrid.appendChild(placeholder);
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    generatePlaceholders();
    console.log('Portfolio chargé et prêt !');
});


// ========================================
// Mobile Infinite Scroll & Layout Unification
// ========================================
function setupMobileInfiniteScroll() {
    // Only run on mobile
    if (window.innerWidth > 480) return;

    const grids = document.querySelectorAll('.projects-grid');
    if (grids.length < 1) return;

    const mainGrid = grids[0];

    // 1. Consolidate all cards into mainGrid (Mobile only)
    if (!mainGrid.classList.contains('mobile-consolidated')) {
        grids.forEach((grid, index) => {
            if (index === 0) return; // Skip main grid
            const cards = Array.from(grid.querySelectorAll('.project-card'));
            cards.forEach(card => {
                mainGrid.appendChild(card);
            });
            grid.style.display = 'none'; // Hide the empty grid container
        });
        mainGrid.classList.add('mobile-consolidated');
    }

    // 2. Infinite Scroll Logic (Clone & Reset)
    // Remove old clones to prevent accumulation
    mainGrid.querySelectorAll('.clone-card').forEach(el => el.remove());

    const allCards = Array.from(mainGrid.querySelectorAll('.project-card'));
    if (allCards.length === 0) return;

    // Capture width of original content
    const originalScrollWidth = mainGrid.scrollWidth;

    allCards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.classList.add('clone-card');
        mainGrid.appendChild(clone);
    });

    // Scroll Handler
    const scrollHandler = () => {
        if (mainGrid.scrollLeft >= originalScrollWidth) {
            mainGrid.scrollLeft -= originalScrollWidth;
        }
    };

    if (mainGrid.mobileScrollHandler) {
        mainGrid.removeEventListener('scroll', mainGrid.mobileScrollHandler);
    }
    mainGrid.mobileScrollHandler = scrollHandler;
    mainGrid.addEventListener('scroll', scrollHandler);
}

window.addEventListener('load', setupMobileInfiniteScroll);
window.addEventListener('resize', () => {
    setTimeout(setupMobileInfiniteScroll, 200);
});
setTimeout(setupMobileInfiniteScroll, 100);

// Legal Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const legalModal = document.getElementById("legalModal");
    const openLegalBtn = document.getElementById("openLegalBtn");
    const closeLegalBtn = document.querySelector(".close-modal");

    if (openLegalBtn && legalModal && closeLegalBtn) {
        openLegalBtn.addEventListener('click', () => {
            legalModal.style.display = "block";
        });

        closeLegalBtn.addEventListener('click', () => {
            legalModal.style.display = "none";
        });

        window.addEventListener('click', (event) => {
            if (event.target === legalModal) {
                legalModal.style.display = "none";
            }
        });
    }
});
