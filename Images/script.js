// === SIMPLE IMAGE CAROUSEL ===

// 1. Grab the pieces from the page
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

// 2. Keep track of which slide we are on
let currentIndex = 0;

// 3. Function to show a slide by index
function showSlide(index) {
  // If we go past the last image, loop back to the first
  if (index >= slides.length) index = 0;
  // If we go before the first image, loop to the last
  if (index < 0) index = slides.length - 1;

  currentIndex = index;

  // Move the whole strip left by 100% * index
  const amountToMove = -index * 100;
  track.style.transform = `translateX(${amountToMove}%)`;
}

// 4. Click events for buttons
nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// 5. Auto-play every 5 seconds (optional)
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

// 6. Start on the first slide
showSlide(0);

window.addEventListener("resize", () => {
  const track = document.querySelector(".auto-track");
  track.style.animation = "none";
  track.offsetHeight; // force repaint
  track.style.animation = "";
});

