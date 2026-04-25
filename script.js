// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile drawer
const hamburger = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobile-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');

hamburger.addEventListener('click', () => {
  const isOpen = mobileDrawer.classList.toggle('open');
  drawerOverlay.classList.toggle('open', isOpen);
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeDrawer() {
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

// Waitlist form
function handleWaitlist(e) {
  e.preventDefault();
  const email = document.getElementById('wl-email').value.trim();
  const note = document.getElementById('wl-note');
  const btn = e.target.querySelector('button');

  btn.disabled = true;
  btn.innerHTML = '<span>Joining...</span>';

  setTimeout(() => {
    document.getElementById('wl-email').value = '';
    note.textContent = `✓ You're on the list! We'll be in touch at ${email}`;
    note.style.color = '#86EFAC';
    note.style.fontWeight = '600';
    btn.innerHTML = '<span>Joined ✓</span>';
    btn.style.opacity = '0.7';
  }, 900);
}

// Intersection observer — fade-in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pillar, .product-card, .pf-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

document.addEventListener('animationend', () => {}, { once: true });

// Polyfill for older iOS
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);
