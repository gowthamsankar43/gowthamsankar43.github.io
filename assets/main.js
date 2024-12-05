// Improved menu toggle with accessibility
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            toggle.setAttribute('aria-expanded', nav.classList.contains('show'));
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

// Enhanced navigation link handling with accessibility
const navLinks = document.querySelectorAll('.nav__link');   

function handleNavLinkClick() {
    // Remove active state from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.setAttribute('aria-current', 'false');
    });

    // Add active state to clicked link
    this.classList.add('active');
    this.setAttribute('aria-current', 'page');
    
    // Close mobile menu
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
    link.setAttribute('role', 'menuitem');
});

// Responsive ScrollReveal configuration
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true,
    mobile: true,
    viewFactor: 0.2
});

// Scroll reveal animations with responsive settings
const scrollAnimations = [
    { selector: '.home__title', options: {} },
    { selector: '.button', options: { delay: 300 } },
    { selector: '.home__img', options: { delay: 400 } },
    { selector: '.home__social-icon', options: { interval: 200 } },
    { selector: '.about__img', options: {} },
    { selector: '.skills__subtitle', options: {} },
    { selector: '.skills__data', options: { interval: 200 } },
    { selector: '.work__img', options: { interval: 200 } }
];

scrollAnimations.forEach(animation => {
    sr.reveal(animation.selector, animation.options);
});

// Improved scroll to top functionality with smooth scroll and throttling
const backToTopButton = document.getElementById('back2Top');
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const scrollPosition = window.scrollY;
            backToTopButton.style.display = scrollPosition > 300 ? 'block' : 'none';
            isScrolling = false;
        });
        isScrolling = true;
    }
});

backToTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhance keyboard accessibility
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    }
});