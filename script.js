// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

// FAQ toggle functionality
const faqToggles = document.querySelectorAll('.faq-toggle');
faqToggles.forEach(toggle => {
  toggle.addEventListener('click', function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector('i');

    content.classList.toggle('hidden');
    icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';

    faqToggles.forEach(otherToggle => {
      if (otherToggle !== toggle) {
        otherToggle.nextElementSibling.classList.add('hidden');
        otherToggle.querySelector('i').style.transform = 'rotate(0deg)';
      }
    });
  });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert(document.querySelector('[data-translate="form_thanks"]').textContent || 'Thank you for your message!');
  this.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      document.getElementById('mobile-menu')?.classList.add('hidden');
    }
  });
});

// Scroll-hide navbar 🧙‍♂️
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('navbar-hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('navbar-hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Language translation
const translations = {
  en: {
    home_title: "Sparkling Clean Spaces, Every Time",
    home_button: "Get a Free Quote",
    // ... (rest of translations)
  },
  de: {
    home_title: "Strahlend saubere Räume, jedes Mal",
    home_button: "Kostenloses Angebot anfordern",
    // ... (rest of translations)
  }
};

const userLang = navigator.language || navigator.userLanguage;
const lang = translations[userLang] ? userLang : 'en';
document.querySelectorAll('[data-translate]').forEach(el => {
  const key = el.getAttribute('data-translate');
  if (translations[lang][key]) {
    el.textContent = translations[lang][key];
  }
});
