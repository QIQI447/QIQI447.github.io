(function () {
  'use strict';

  function onReady() {
    var navToggle = document.querySelector('[data-nav-toggle]');
    var siteNav = document.querySelector('[data-site-nav]');
    var header = document.querySelector('[data-site-header]');
    var year = document.querySelector('[data-current-year]');

    if (year) {
      year.textContent = String(new Date().getFullYear());
    }

    if (navToggle && siteNav) {
      navToggle.addEventListener('click', function () {
        var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
        var label = navToggle.querySelector('.sr-only');
        navToggle.setAttribute('aria-expanded', String(!isOpen));
        siteNav.classList.toggle('is-open', !isOpen);
        document.body.classList.toggle('nav-open', !isOpen);
        if (label) {
          label.textContent = isOpen ? '打开导航' : '关闭导航';
        }
      });

      siteNav.addEventListener('click', function (event) {
        if (event.target.closest('a')) {
          navToggle.setAttribute('aria-expanded', 'false');
          siteNav.classList.remove('is-open');
          document.body.classList.remove('nav-open');
          var label = navToggle.querySelector('.sr-only');
          if (label) {
            label.textContent = '打开导航';
          }
        }
      });
    }

    function updateHeader() {
      if (header) {
        header.classList.toggle('is-scrolled', window.scrollY > 16);
      }
    }

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      reveals.forEach(function (element) { observer.observe(element); });
    } else {
      reveals.forEach(function (element) { element.classList.add('is-visible'); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
