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

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Fazer os slides mudarem automaticamente a cada 5 segundos
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlide();
}, 5000);

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "assets/images/icons/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "assets/images/icons/close_white_36dp.svg";
  }
}