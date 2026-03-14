// Öznur Altmışkara Güzellik Merkezi — Menü ve scroll etkileşimleri
(function () {
  const header = document.querySelector('.header');
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  // Scroll'da header gölgesi
  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobil menü
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Bölümler scroll ile görünür (reveal)
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
