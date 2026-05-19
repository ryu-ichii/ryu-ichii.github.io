(function () {

  /* ── Contact section ── */
  var rule = document.createElement('hr');
  rule.className = 'rule';

  var wrap = document.createElement('div');
  wrap.className = 'table-wrap';
  wrap.innerHTML = `
    <section class="table-section single" id="contact">
      <div class="contact-layout">
        <div class="contact-rows">
          <div class="table-row"><a href="#" class="copy-email">[S4108334@STUDENT.RMIT.EDU.AU]</a></div>
          <div class="table-row"><a href="https://www.rmit.edu.au">[RMIT UNIVERSITY]</a></div>
          <div class="table-row"><a href="https://www.instagram.com/ryu___ske/">[INSTAGRAM]</a></div>
          <div class="table-row"><a href="https://www.linkedin.com/in/ryu-konrad">[LINKEDIN]</a></div>
          <div class="table-row"><a href="https://github.com/ryu-ichii">[GITHUB]</a></div>
        </div>
        <div class="contact-arts">
          <div class="rmit-wrap">
            <pre class="contact-art rmit-diamond"></pre>
            <pre class="contact-art rmit-text"></pre>
          </div>
          <pre class="contact-art instagram-art"></pre>
          <pre class="contact-art linkedin-art"></pre>
          <pre class="contact-art github-art"></pre>
        </div>
      </div>
    </section>`;

  var script = document.currentScript;
  script.parentNode.insertBefore(rule, script);
  script.parentNode.insertBefore(wrap, script);

  /* ── Copy email ── */
  var emailLink = wrap.querySelector('.copy-email');
  emailLink.addEventListener('click', function (e) {
    e.preventDefault();
    navigator.clipboard.writeText('s4108334@student.rmit.edu.au').then(function () {
      var orig = emailLink.textContent;
      emailLink.textContent = '[COPIED]';
      setTimeout(function () { emailLink.textContent = orig; }, 1500);
    });
  });

  /* ── ASCII art icons ── */
  function pixelate(raw) {
    return raw.split('\n').map(function (line) {
      return line.split('').map(function (c) { return c === ' ' ? ' ' : '0'; }).join('');
    }).join('\n');
  }

  wrap.querySelector('.rmit-diamond').textContent =
    "       0000000\n" +
    "       0000000000\n" +
    "   0000000000000000\n" +
    "   00000000000000000\n" +
    "   000000000000000000\n" +
    "00000000000000000000000\n" +
    "00000000000000000000000\n" +
    "00000000000000000000000\n" +
    "00000000000000000000000\n" +
    "00000000000000000000000\n" +
    "   000000000000000000\n" +
    "   00000000000000000\n" +
    "   0000000000000000\n" +
    "       0000000000\n" +
    "       0000000";

  wrap.querySelector('.rmit-text').textContent =
    "   ooooooooo.   ooo        ooooo ooooo ooooooooooooo\n" +
    "   `888   `Y88. `88.       .888' `888' 8'   888   `8\n" +
    "    888   .d88'  888b     d'888   888       888\n" +
    "    888ooo88P'   8 Y88. .P  888   888       888\n" +
    "    888`88b.     8  `888'   888   888       888\n" +
    "    888  `88b.   8    Y     888   888       888\n" +
    "   o888o  o888o o8o        o888o o888o     o888o";

  wrap.querySelector('.instagram-art').textContent = pixelate(
    '  %U\\]<lllIIIiiiiiiii</UB\n' +
    ' 0{]\\zQZZQQQLLLCCCCLJx[I>w \n' +
    'w})q                #$ Jllw\n' +
    '~)w                \\I?% vI[\n' +
    '||M       #0YuzZ#  U)n  mIl\n' +
    'ttW     #n//+t\\{[t#     mIl\n' +
    'jj&    ot+L8   Mu{}o    mIl\n' +
    'xx8    ufw       c{t    qll\n' +
    'uu8   Bnn&       b})    qll\n' +
    'zz%    Yxk       C)j    q<<\n' +
    'UU%    *cup$   BL||o    p>>\n' +
    'JJB     MCuuUCzjtv#     p>>\n' +
    'CCB       Wk0Z0qM       p]?\n' +
    '0L#                     J])\n' +
    '#Q0&                   q}[m\n' +
    ' #0QqhMMMMM###*hoooad0r()m \n' +
    '  $owQLLCJUUzcuxnrft~|jL%'
  );

  wrap.querySelector('.linkedin-art').textContent = pixelate(
    ' hoooooooooooooooooooooo* \n' +
    'wJJJJJJJJJJJJJJJJJJJJJJJJm\n' +
    'OJJJpW*0JJJJJJJJJJJJJJJJJw\n' +
    'OJJb    LJJJJJJJJJJJJJJJJw\n' +
    'OJJb    CJJJJJJJJJJJJJJJJw\n' +
    'OJJJm#oZJJJJJJJJJJJJJJJJJw\n' +
    'OJJ0$$$*JJW$$#O8   BqJJJJw\n' +
    'OJJq    JJ           aJJJw\n' +
    'OJJq    JJ     8&     CJJw\n' +
    'OJJq    JJ    wJJL    0JJw\n' +
    'OJJq    JJ    LJJJ    OJJw\n' +
    'OJJq    JJ    LJJJ    OJJw\n' +
    'OJJq    JJ    LJJJ    OJJw\n' +
    'OJJq    JJ    LJJJ    OJJw\n' +
    'OJJQhhhkJJbhhaCJJJdhhoLJJw\n' +
    'wJJJJJJJJJJJJJJJJJJJJJJJJm\n' +
    ' bkkkkkkkkkkkkkkkkkkkkkka'
  );
  
    wrap.querySelector('.github-art').textContent = pixelate(
      '              ZpdddpZ              \n' +
      '          ph###########hq          \n' +
      '        a#################b        \n' +
      '      p#####################m      \n' +
      '     o###ho############*oh###a     \n' +
      '    h####    abpmOmpba    ####o    \n' +
      '   d#####                 #####p   \n' +
      '   ######                 ######   \n' +
      '  p#####                  O#####O  \n' +
      '  o####h                   *####a  \n' +
      '  h####o                   h####o  \n' +
      '  h####*                   #####o  \n' +
      '  b#####                  O#####d  \n' +
      '   #####*                 ######   \n' +
      '   h##**##b             a######o   \n' +
      '    ##h  *###h       *#########    \n' +
      '     ###  a**a       *########     \n' +
      '      *#*            h######h      \n' +
      '       b##haak       h#####d       \n' +
      '         b*##o       h##*d         \n' +
      '            q        Jq'
    );

})();