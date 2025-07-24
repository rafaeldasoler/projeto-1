const slides = document.querySelectorAll('.carrossel-slide');
const radios = document.querySelectorAll('input[name="btn-radio"]');
const pointers = document.querySelectorAll('.pointer');

let contador = 1;

function atualizarSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('ativo', contador === index + 1);
    pointers[index].classList.toggle('ativo', contador === index + 1);
    radios[index].checked = contador === index + 1;
  });
}

// Inicializa
atualizarSlides();

// Transição automática
setInterval(() => {
  contador = contador < slides.length ? contador + 1 : 1;
  atualizarSlides();
}, 6000);

// Clique nas bolinhas
pointers.forEach((pointer, index) => {
  pointer.addEventListener('click', () => {
    contador = index + 1;
    atualizarSlides();
  });
});


// Função para mostrar/ocultar o menu mobile
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

// Função para fechar o botão flutuante
function fecharBotao() {
  const container = document.querySelector('.flutuante-container');
  if (container) {
    container.style.display = 'none';
  }
}