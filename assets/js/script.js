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

// Galeria funerária, seção secundária
  const imagens = document.querySelectorAll('.imagem-galeria');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const botaoFechar = document.querySelector('.fechar');

  imagens.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      const legenda = img.closest('figure')?.querySelector('figcaption')?.textContent;
      lightboxCaption.textContent = legenda || img.alt;
      lightbox.classList.add('visible');
    });
  });

  botaoFechar.addEventListener('click', () => {
    lightbox.classList.remove('visible');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxCaption) {
      lightbox.classList.remove('visible');
    }
  });
