document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
  
    if (!themeToggleButton) return;
  
    // Función para actualizar el icono
    const updateIcon = (isDark) => {
      themeToggleButton.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    };
  
    // Verificar si hay un tema guardado
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    htmlElement.classList.toggle('dark', isDarkMode);
    updateIcon(isDarkMode);
  
    themeToggleButton.addEventListener('click', () => {
      const isDark = htmlElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateIcon(isDark);
    });
  });
  