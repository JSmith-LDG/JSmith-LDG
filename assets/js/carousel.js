document.addEventListener('DOMContentLoaded', function() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const themeToggleButton = document.getElementById('theme-toggle');
    
    // Carousel functionality
    if (carouselWrapper && prevButton && nextButton) {
      const carouselItems = document.querySelectorAll('.carousel-item');
      const totalItems = carouselItems.length;
      let currentIndex = 0;
      let autoSlideInterval;
  
      function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselWrapper.style.transform = `translateX(${offset}%)`;
      }
  
      function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
          currentIndex = (currentIndex + 1) % totalItems;
          updateCarousel();
        }, 5000);
      }
  
      function stopAutoSlide() {
        clearInterval(autoSlideInterval);
      }
  
      // Event listeners for buttons
      nextButton.addEventListener('click', function() {
        stopAutoSlide();
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
        startAutoSlide(); // Restart auto-slide after manual change
      });
  
      prevButton.addEventListener('click', function() {
        stopAutoSlide();
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
        startAutoSlide(); // Restart auto-slide after manual change
      });
  
      // Initialize auto-slide
      startAutoSlide();
    }
});