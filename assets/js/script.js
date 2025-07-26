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

// Função para ampliar as imagens
document.querySelectorAll('.galeria-estrutura img, .equipe-contato img, .ajuda-container img, .empresa-destaque img').forEach(img => {
  img.addEventListener('click', () => {
    // Criar o overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 1000;

    // Clonar a imagem e aplicar estilos
    const clone = img.cloneNode();
    clone.style.maxWidth = '90%';
    clone.style.maxHeight = '90%';
    clone.style.borderRadius = '8px';
    clone.style.boxShadow = '0 0 24px rgba(0,0,0,0.6)';
    overlay.appendChild(clone);

    // Fechar ao clicar fora
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });

    document.body.appendChild(overlay);
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