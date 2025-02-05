document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('menu');

  hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');

    menu.classList.toggle('transition-all');
    menu.classList.toggle('duration-500');
    menu.classList.toggle('ease-in-out');
  });
});