(function () {
  var hamburger = document.querySelector('.nav__hamburger');
  var mobileNav = document.getElementById('nav-mobile');

  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', function () {
    var isOpen = mobileNav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  });
})();
