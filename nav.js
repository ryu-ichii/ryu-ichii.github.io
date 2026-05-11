(function () {
  var nav = document.createElement('nav');
  nav.className = 'topnav';
  nav.setAttribute('aria-label', 'Primary');
  nav.innerHTML =
    '<div class="nav-meta">' +
      '<div class="nav-col">' +
        '<span>[JANE&nbsp;DOE]</span>' +
        '<span>[WRITER]</span>' +
        '<span>[MELBOURNE]</span>' +
      '</div>' +
      '<div class="nav-col">' +
        '<span>[FICTION]</span>' +
        '<span>[NONFICTION]</span>' +
        '<span>[POETRY]</span>' +
      '</div>' +
    '</div>' +
    '<div class="nav-links">' +
      '<a href="./index.html" class="nav-link">[HOME]</a>' +
      '<a href="./about.html" class="nav-link">[ABOUT]</a>' +
      '<a href="./publications.html" class="nav-link">[PUBLICATIONS]</a>' +
    '</div>';

  document.currentScript.parentNode.insertBefore(nav, document.currentScript);

  var current = location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href').replace('./', '');
    if (current === href || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}());
