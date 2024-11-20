function scrollToDeals() {
  const dealsSection = document.getElementById('deals');
  if (dealsSection) {
    dealsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const items = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  const itemWidth = items[0].getBoundingClientRect().width;
  let currentIndex = 0;
  
  // Function to move to a right or left slide
  function moveToSlide(index) {
    track.style.transform = `translateX(-${itemWidth * index}px)`;
  }

  // Event listeners for buttons
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    moveToSlide(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    moveToSlide(currentIndex);
  });

  // Optional: Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    moveToSlide(currentIndex);
  }, 5000);
});