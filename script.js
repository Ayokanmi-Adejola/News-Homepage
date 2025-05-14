document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const navList = document.getElementById('nav-list');
  const overlay = document.getElementById('overlay');

  // Open mobile menu
  menuToggle.addEventListener('click', () => {
    navList.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  });

  // Close mobile menu
  closeMenu.addEventListener('click', () => {
    navList.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
  });

  // Close menu when clicking on overlay
  overlay.addEventListener('click', () => {
    navList.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close menu when clicking on a nav link (for mobile)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when window is resized to desktop size
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navList.classList.contains('active')) {
      navList.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
