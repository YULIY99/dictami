(function () {
  function trackDownload(event) {
    var target = event.target;
    var link = target && target.closest ? target.closest('a[download]') : null;
    if (!link || !window.zaraz || typeof window.zaraz.track !== 'function') return;

    window.zaraz.track('download', {
      file: link.getAttribute('download') || 'Dictami.dmg',
      path: new URL(link.href, window.location.href).pathname,
    });
  }

  document.addEventListener('click', trackDownload, { passive: true });
})();
