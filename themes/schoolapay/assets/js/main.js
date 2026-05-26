(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header scroll + mobile nav */
  const header = document.getElementById('site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  function setHeaderScrolled() {
    header?.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  function closeMobileNav() {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open menu');
    mobileNav?.setAttribute('hidden', '');
    document.body.classList.remove('nav-open');
  }

  function openMobileNav() {
    menuToggle?.setAttribute('aria-expanded', 'true');
    menuToggle?.setAttribute('aria-label', 'Close menu');
    mobileNav?.removeAttribute('hidden');
    document.body.classList.add('nav-open');
  }

  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    expanded ? closeMobileNav() : openMobileNav();
  });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  window.addEventListener('scroll', setHeaderScrolled, { passive: true });
  setHeaderScrolled();

  /* Smooth scroll for anchor links */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      closeMobileNav();
    });
  });

  /* FAQ accordion */
  document.querySelectorAll('.faq-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));

      document.querySelectorAll('.faq-trigger').forEach((other) => {
        if (other !== trigger) {
          other.setAttribute('aria-expanded', 'false');
          other.closest('.faq-item')?.classList.remove('is-open');
          const otherPanel = document.getElementById(other.getAttribute('aria-controls'));
          otherPanel?.setAttribute('hidden', '');
        }
      });

      trigger.setAttribute('aria-expanded', String(!expanded));
      trigger.closest('.faq-item')?.classList.toggle('is-open', !expanded);
      if (!expanded) {
        panel?.removeAttribute('hidden');
      } else {
        panel?.setAttribute('hidden', '');
      }
    });
  });

  /* Demo form validation + Web3Forms submission */
  const form = document.getElementById('demo-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('demo-submit');

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showFieldError(name, message) {
    const input = form.elements[name];
    const errorEl = document.getElementById(`error-${name}`);
    input?.classList.add('is-invalid');
    if (errorEl) errorEl.textContent = message;
  }

  function clearErrors() {
    form.querySelectorAll('.is-invalid').forEach((el) => el.classList.remove('is-invalid'));
    form.querySelectorAll('.field-error').forEach((el) => (el.textContent = ''));
    statusEl?.setAttribute('hidden', '');
    statusEl?.classList.remove('is-success', 'is-error');
  }

  function validateForm() {
    clearErrors();
    let valid = true;
    const data = new FormData(form);

    const required = ['schoolName', 'contactName', 'email', 'phone', 'role', 'students'];
    required.forEach((field) => {
      const value = String(data.get(field) || '').trim();
      if (!value) {
        showFieldError(field, 'This field is required.');
        valid = false;
      }
    });

    const email = String(data.get('email') || '').trim();
    if (email && !emailRe.test(email)) {
      showFieldError('email', 'Please enter a valid email address.');
      valid = false;
    }

    const students = Number(data.get('students'));
    if (data.get('students') && (Number.isNaN(students) || students < 1)) {
      showFieldError('students', 'Please enter a valid number of students.');
      valid = false;
    }

    return valid;
  }

  function showStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.classList.add(type === 'success' ? 'is-success' : 'is-error');
    statusEl.removeAttribute('hidden');
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    const web3formsKey = form.dataset.web3formsKey;
    const formData = new FormData(form);

    /* Add extra context fields */
    formData.set('source', 'SchoolaPay landing page');
    formData.set('submitted_at', new Date().toISOString());

    const payload = Object.fromEntries(formData.entries());

    try {
      if (web3formsKey) {
        /* Submit via Web3Forms — https://web3forms.com */
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok || data.success === false) throw new Error(data.message || 'Request failed');
      }
      /* If no key is configured, silently succeed (dev/preview mode) */

      showStatus(form.dataset.success, 'success');
      form.reset();
    } catch {
      const fallback = form.dataset.email;
      showStatus(
        `${form.dataset.error}${fallback ? ` Email us directly: ${fallback}` : ''}`,
        'error'
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Request a Demo';
    }
  });

  /* Hero entrance animation */
  if (!prefersReducedMotion) {
    requestAnimationFrame(() => {
      document.querySelector('.hero-content')?.classList.add('is-visible');
      document.querySelector('.hero-visual')?.classList.add('is-visible');
    });
  }
})();
