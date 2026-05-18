(function () {
  var nav = document.createElement('nav');
  nav.className = 'topnav';
  nav.setAttribute('aria-label', 'Primary');
  nav.innerHTML = `
    <div class="nav-meta">
      <div class="nav-col">
        <span>[RYU KONRAD]</span>
        <span>[PROSE/POETRY]</span>
        <span>[MELBOURNE]</span>
      </div>
    </div>
    <div class="nav-links">
      <div class="nav-items">
        <div class="nav-item"><a href="./index.html" class="nav-link">[HOME]</a></div>
        <div class="nav-item"><a href="./publications.html" class="nav-link">[WORKS]</a></div>
        <div class="nav-item"><a href="./about.html" class="nav-link">[ABOUT]</a></div>
      </div>
      <div class="mode-clip"><div class="mode-wrap"><span class="mode-toggle">[DARK]</span></div></div>
    </div>`;

  document.currentScript.parentNode.insertBefore(nav, document.currentScript);

  var current = location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href').replace('./', '');
    if (current === href || (current === '' && href === 'index.html')) {
      link.parentElement.classList.add('active');
    }
  });

  var toggle = nav.querySelector('.mode-toggle');
  function applyMode(dark) {
    document.body.classList.toggle('dark', dark);
    toggle.textContent = dark ? '[LIGHT]' : '[DARK]';
  }
  var savedMode = localStorage.getItem('mode');
  applyMode(savedMode ? savedMode === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
  toggle.addEventListener('click', function () {
    var isDark = !document.body.classList.contains('dark');
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
    applyMode(isDark);
  });
}());
