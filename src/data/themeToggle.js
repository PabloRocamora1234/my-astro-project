document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  if (!themeToggleButton) return;

  if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    htmlElement.classList.remove('dark');
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
  }

  themeToggleButton.addEventListener('click', () => {
    const isDarkMode = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggleButton.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });
});