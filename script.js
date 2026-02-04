function toggleSection(id) {
  const section = document.getElementById(id);

  document.querySelectorAll('.content').forEach(el => {
    if (el.id !== id) {
      el.classList.remove('show');
    }
  });

  section.classList.toggle('show');
}
