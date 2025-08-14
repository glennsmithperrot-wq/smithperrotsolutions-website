// Mobile navigation toggle
const navBtn = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (navBtn && nav) {
  navBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

// Insert current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Basic form UX with progressive enhancement
const form = document.getElementById('contact-form');
const statusEl = document.querySelector('.form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      if (statusEl) statusEl.textContent = 'Please complete all required fields.';
      return;
    }
    if (statusEl) statusEl.textContent = 'Sending...';
  });
}