(function () {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('nav__mobile--open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  /* Close menu when a mobile link is clicked */
  mobileMenu.querySelectorAll('.nav__mobile-link, .nav__mobile-cta').forEach(function (el) {
    el.addEventListener('click', function () {
      mobileMenu.classList.remove('nav__mobile--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* Close on outside click */
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('nav__mobile--open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
})();
