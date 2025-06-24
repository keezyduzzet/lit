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

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    type();
  } else {
    text.textContent = 'human up.';
  }

  // Reveal effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });
  document.querySelectorAll('.img-stagger').forEach(el => observer.observe(el));
});

// Scroll animation for hero logo
window.addEventListener('scroll', () => {
  const logo = document.getElementById('hero-logo');
  const heroSection = document.getElementById('hero');
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
});
