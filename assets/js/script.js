let contador = 1;

function trocarSlide() {
  contador++;
  if (contador > 3) {
    contador = 1;
  }
  document.getElementById("radio" + contador).checked = true;
}

// Troca a cada 6 segundos
setInterval(trocarSlide, 6000);
    
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