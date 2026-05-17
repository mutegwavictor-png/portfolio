// ===== Hamburger Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ===== Dark Mode Toggle =====
const darkBtn = document.getElementById('dark');
if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    darkBtn.textContent = document.body.classList.contains('light-mode')
      ? 'dark mode'
      : 'dark mode';
  });
}
