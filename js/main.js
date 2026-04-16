/**
 * One Time GEM — main.js
 * Handles: mobile nav, scroll shadow, active nav link, fade-in animations
 */

(function () {
  'use strict';

  // ── Mobile Navigation ──────────────────────────────────────────────────

  const toggle     = document.querySelector('.nav__toggle');
  const closeBtn   = document.querySelector('.mobile-nav__close');
  const mobileNav  = document.querySelector('.mobile-nav');
  const overlay    = document.querySelector('.mobile-nav__overlay');
  const body       = document.body;

  function openNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('is-open');
    overlay.classList.add('is-visible');
    toggle.setAttribute('aria-expanded', 'true');
    mobileNav.removeAttribute('aria-hidden');
    body.style.overflow = 'hidden';

    // Move focus to the close button
    if (closeBtn) closeBtn.focus();
  }

  function closeNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    toggle.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    body.style.overflow = '';

    // Return focus to hamburger
    if (toggle) toggle.focus();
  }

  if (toggle)   toggle.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  if (overlay)  overlay.addEventListener('click', closeNav);

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('is-open')) {
      closeNav();
    }
  });


  // ── Sticky nav shadow on scroll ────────────────────────────────────────

  const header = document.querySelector('.site-header');

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    }, { passive: true });
  }


  // ── Active nav link ────────────────────────────────────────────────────

  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__links a, .mobile-nav__links a');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;

    // Normalise: strip leading slash and directory prefix for comparison
    const linkFile = href.replace(/^.*\//, '');
    const pageName = currentPath.replace(/^.*\//, '') || 'index.html';

    if (
      linkFile === pageName ||
      (pageName === '' && linkFile === 'index.html') ||
      (pageName === 'index.html' && linkFile === 'index.html')
    ) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });


  // ── Intersection Observer — fade-in animations ─────────────────────────

  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    fadeEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

})();
