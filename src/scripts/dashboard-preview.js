(function () {
  var tabs = document.querySelectorAll('.dashboard-preview__tab');
  var panels = document.querySelectorAll('.dashboard-preview__panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(function (panel) {
        panel.hidden = true;
      });

      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      var panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = false;
    });
  });

  document.querySelectorAll('[data-action="toggle-complete"]').forEach(function (button) {
    button.addEventListener('click', function () {
      var row = button.closest('.appointment-row');
      var status = row && row.querySelector('.appointment-row__status');
      if (!row || !status) return;

      var isDone = status.classList.toggle('appointment-row__status--done');
      status.classList.toggle('appointment-row__status--pending', !isDone);
      status.textContent = isDone ? 'Completado' : 'Pendiente';
      button.textContent = isDone ? 'Marcar pendiente' : 'Marcar completado';
    });
  });
})();
