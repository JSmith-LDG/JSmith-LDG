document.addEventListener('DOMContentLoaded', function() {
  // const themeToggleButton = document.getElementById('theme-toggle');
  // const icon = themeToggleButton.querySelector('.icon');
  // const currentTheme = localStorage.getItem('theme') || 'light-mode';

  // // Apply the current theme with transition
  // document.body.classList.add(currentTheme);
  // document.body.style.transition = 'background-color 0.5s, color 0.5s';

  // // Set the icon based on the current theme
  // icon.textContent = currentTheme === 'light-mode' ? '🌙' : '☀️';

  // themeToggleButton.addEventListener('click', function() {
  //   const isLightMode = document.body.classList.contains('light-mode');

  //   if (isLightMode) {
  //     document.body.classList.replace('light-mode', 'dark-mode');
  //     icon.textContent = '☀️'; // Sun icon for light mode
  //     localStorage.setItem('theme', 'dark-mode');
  //   } else {
  //     document.body.classList.replace('dark-mode', 'light-mode');
  //     icon.textContent = '🌙'; // Moon icon for dark mode
  //     localStorage.setItem('theme', 'light-mode');
  //   }
  // });

  const homeButton = document.getElementById('load-home');
  const gamesButton = document.getElementById('load-games');
  const aboutButton = document.getElementById('load-about');

  function navigateTo(url) {
      console.log('Navigating to:', url);
      window.location.href = url;
  }

  if (homeButton) {
      homeButton.addEventListener('click', function() {
          navigateTo('/'); // Adjust the URL path to match Jekyll-generated URL
      });
  }

  if (gamesButton) {
      gamesButton.addEventListener('click', function() {
          navigateTo('/games'); // Adjust the URL path to match Jekyll-generated URL
      });
  }

  if (aboutButton) {
      aboutButton.addEventListener('click', function() {
          navigateTo('/about'); // Adjust the URL path to match Jekyll-generated URL
      });
  }

  const background = document.getElementById('retro-background');

  function createPixels() {
    const numberOfPixels = 200; // Adjust based on need
    for (let i = 0; i < numberOfPixels; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.left = `${Math.random() * 100}vw`; // Random position within viewport
      pixel.style.top = `${Math.random() * 100}vh`; // Random position within viewport
      background.appendChild(pixel);
    }
  }

  createPixels();

});