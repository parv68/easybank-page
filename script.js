const toggleButton = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});