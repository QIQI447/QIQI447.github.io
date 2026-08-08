(function () {
  'use strict';

  function onReady() {
    var toggle = document.querySelector('[data-theme-toggle]');
    if (!toggle) return;

    function currentTheme() {
      return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    }

    function updateLabel() {
      var nextTheme = currentTheme() === 'dark' ? '浅色' : '深色';
      toggle.setAttribute('aria-label', '切换到' + nextTheme + '模式');
      toggle.setAttribute('title', '切换到' + nextTheme + '模式');
    }

    toggle.addEventListener('click', function () {
      var nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = nextTheme;
      try { localStorage.setItem('theme', nextTheme); } catch (error) {}
      updateLabel();
    });

    updateLabel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();

