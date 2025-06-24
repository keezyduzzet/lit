function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function openHelpModal() {
  document.getElementById('helpModal').classList.remove('hidden');
  document.getElementById('helpDot').style.animation = 'none';
}

function closeHelpModal() {
  document.getElementById('helpModal').classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('.typewriter');
  const phrases = ['hurray up.', 'human up.'];
  let i = 0;

  function type() {
    const str = phrases[i];
    text.innerHTML = '';
    [...str].forEach((char, idx) => {
      setTimeout(() => text.innerHTML += char, idx * 100);
    });

    setTimeout(() => {
      if (i === 0) {
        text.classList.add('glitch');
        setTimeout(() => {
          text.classList.remove('glitch');
          i++;
          type();
        }, 600);
      }
    }, str.length * 100 + 500);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && text) {
    type();
  } else if (text) {
    text.textContent = 'human up.';
  }

  // Intersection Observer for fade-in elements
  const fadeSections = document.querySelectorAll('.scroll-fade');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeSections.forEach(el => observer.observe(el));

  // Animate .img-stagger elements with delay
  const staggerElements = document.querySelectorAll('.img-stagger');
  staggerElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, i * 150);
  });

  // Scroll animation for shrinking logo
  const logo = document.getElementById('hero-logo');
  const heroSection = document.getElementById('hero');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > heroSection.offsetHeight / 3) {
      document.body.classList.add('has-shrink-padding');
      heroSection.classList.add('shrink');
      if (logo) logo.classList.add('shrink');
    } else {
      document.body.classList.remove('has-shrink-padding');
      heroSection.classList.remove('shrink');
      if (logo) logo.classList.remove('shrink');
    }

    // Optional parallax background
    heroSection.style.backgroundPosition = `center ${scrollTop * 0.3}px`;
  });

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
