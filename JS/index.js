// JavaScript to cycle through hero slides
document.addEventListener('DOMContentLoaded', () => {
    const slides = [
      "url('https://img.freepik.com/premium-photo/illustration-healthy-eating-fruit-vegetable-shopping-bag-green-background_1191615-12209.jpg')",
      "url('https://img.freepik.com/premium-photo/different-types-foods-grocery-shopping-concept_1191615-14810.jpg')",
      "url('https://img.freepik.com/premium-photo/fresh-vegetables-fruits-grocery-bag_1191615-15320.jpg')"
    ];
  
    let currentSlide = 0;
    const slideElement = document.querySelector('.hero-slide');
  
    function changeSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      slideElement.style.backgroundImage = slides[currentSlide];
      slideElement.classList.add('active');
  
      setTimeout(() => {
        slideElement.classList.remove('active');
      }, 5000); // Show each slide for 5 seconds
    }
  
    // Initial setup
    slideElement.style.backgroundImage = slides[currentSlide];
    slideElement.classList.add('active');
  
    function searchProduct() {
      const searchQuery = document.getElementById('searchInput').value.trim();
      if (searchQuery) {
        // Redirect to Category page with search query as a URL parameter
        window.location.href = `/HTML/Category.html?search=${encodeURIComponent(searchQuery)}`;
      }
    }
    
    // Optional: Scroll to Deals section
    function scrollToDeals() {
      document.getElementById("deals").scrollIntoView({ behavior: "smooth" });
    }
    
    // Change slides every 5 seconds
    setInterval(changeSlide, 5000);
  });
  
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
  
    // Function to set item positions
    function setSlidePosition() {
      items.forEach((item, index) => {
        item.style.left = `${itemWidth * index}px`;
      });
    }
    setSlidePosition();
  
    // Function to move to a specific slide
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
  
  
  document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
      alert('Product added to cart!');
      // Implement further functionality here
    });
  });
  
 
