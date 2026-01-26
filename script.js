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
    noiseScale: 0.0004,
    speed: 0.0005,
    glowColors: [
        'rgba(0, 255, 255, 0.15)',    // Neon Cyan
        'rgba(0, 150, 255, 0.15)',    // Neon Blue
        'rgba(0, 200, 255, 0.15)'     // Light Blue
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

            const distortion = 150 * noiseVal;

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

// Old animation disabled
// window.addEventListener('resize', resizeCanvas);
// resizeCanvas();
// initWaves();
// animateWaves();

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

    // Background Parallax Effect
    // Move the background slowly as user scrolls
    document.body.style.setProperty('--bg-pos-y', `${scrolled * 0.15}px`);

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
