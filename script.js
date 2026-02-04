function toggleSection(id) {
  const section = document.getElementById(id);
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    const content = item.nextElementSibling;

    if (content.id !== id) {
      content.classList.remove('show');
      item.classList.remove('active');
    }
  });

  section.classList.toggle('show');

  const activeButton = section.previousElementSibling;
  activeButton.classList.toggle('active');
}
