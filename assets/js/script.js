const slidesContainer = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const totalSlides = slideElements.length;
let index = 0;

function updateSlide() {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.btn-next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateSlide();
});

document.querySelector('.btn-prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
});

setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlide();
}, 5000);

updateSlide();