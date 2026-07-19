// Only show loader on homepage (index.html)
(function() {
  var path = window.location.pathname;
  var isHome = path === '/' || path.endsWith('index.html') || path.endsWith('/missing-manual/');
  if (!isHome) return;

  var style = document.createElement('style');
  style.textContent = [
    '#tmm-loader{position:fixed;inset:0;background:#fff;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity 0.7s ease,visibility 0.7s ease}',
    '#tmm-loader.done{opacity:0;visibility:hidden}',
    '.tl-logo{width:44px;height:44px;border-radius:10px;background:#4F46E5;display:flex;align-items:center;justify-content:center;margin-bottom:20px;animation:tlPulse 1.2s cubic-bezier(0.4,0,0.6,1) infinite}',
    '.tl-logo span{color:#fff;font-size:20px;font-weight:700;font-family:monospace}',
    '.tl-bar{width:160px;height:2px;background:#F0F0F0;border-radius:2px;overflow:hidden;margin-bottom:16px}',
    '.tl-progress{height:100%;background:linear-gradient(90deg,#4F46E5,#DC4A22);border-radius:2px;width:0%;animation:tlLoad 1.2s cubic-bezier(0.4,0,0.2,1) forwards}',
    '.tl-text{font-size:11px;font-weight:600;color:#A1A1AA;letter-spacing:0.1em;text-transform:uppercase;font-family:sans-serif}',
    '@keyframes tlPulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(79,70,229,0.3)}50%{transform:scale(1.05);box-shadow:0 0 0 8px rgba(79,70,229,0)}}',
    '@keyframes tlLoad{0%{width:0%}60%{width:75%}100%{width:100%}}'
  ].join('');
  document.head.appendChild(style);

  var loader = document.createElement('div');
  loader.id = 'tmm-loader';
  loader.innerHTML = '<div class="tl-logo"><span>M</span></div><div class="tl-bar"><div class="tl-progress"></div></div><div class="tl-text">The Missing Manual</div>';
  document.body.insertBefore(loader, document.body.firstChild);

  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.classList.add('done');
      var app = document.getElementById('app');
      if (app) app.style.opacity = '1';
    }, 1300);
  });
})();
