(function () {
  // मोबाइल मेन्यू
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ऊपर जाने का बटन
  var topBtn = document.querySelector('.to-top');
  window.addEventListener('scroll', function () {
    if (topBtn) topBtn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  // स्क्रॉल पर धीरे से प्रकट होना
  var items = document.querySelectorAll('.card, .svc, .fest-item, .timing, .bank, .trust-box, .g, .frame');
  items.forEach(function (el) { el.classList.add('rv'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // वर्ष
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // संपर्क फॉर्म (अभी केवल डेमो — बैकएंड जुड़ने पर बदलें)
  var form = document.getElementById('contactForm');
  var msg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      msg.textContent = 'धन्यवाद! आपका संदेश प्राप्त हुआ। हम शीघ्र संपर्क करेंगे। 🙏';
      form.reset();
    });
  }
})();
