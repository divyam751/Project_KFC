// script.js
const slider = document.querySelector(".slider");
let slideIndex = 0;
const slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slideIndex++;
  if (slideIndex === slider.children.length) {
    slideIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
