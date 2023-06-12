// Armazena as referências aos elementos para evitar acessos repetidos ao DOM
const circleSvgServicos = document.querySelector("#circleSvg-servicos");
const maskDivServicos = document.querySelector("#maskDiv-servicos");
const servico1 = document.querySelector("#servico1");
const servico2 = document.querySelector("#servico2");
const servico3 = document.querySelector("#servico3");
const servico1Text = document.querySelector("#servico1-text");
const servico2Text = document.querySelector("#servico2-text");
const servico3Text = document.querySelector("#servico3-text");

// Define as classes CSS para aplicar as alterações de estilo
const activeServicoClass = "active-servico";
const activeServicoTextClass = "active-servico-text";

// Variável para armazenar o último valor de scroll
let lastScroll = 0;

function animacaoServ() {
  const scroll = window.scrollY || window.pageYOffset;

  // Verifica se o scroll mudou significativamente antes de realizar as atualizações
  if (Math.abs(scroll - lastScroll) > 10) {
    
    // Atualiza a posição do círculo SVG
    console.log("entrou")
    if (window.scrollY > 2000) {
      const circleScroll = scroll - 2000;
      const circleCx = 50 + circleScroll / 3 + "vw";
      const circleCy = 50 + circleScroll / 3 + "vw";
      const circleR = 40 + circleScroll / 4 + "vw";
      circleSvgServicos.setAttribute("cx", circleCx);
      circleSvgServicos.setAttribute("cy", circleCy);
      circleSvgServicos.setAttribute("r", circleR);

      const maskLeft = 0 - (scroll - 2000) / 3 + "vw";
      const maskTop = 85 - (scroll - 2000) / 5 + "vh";
      maskDivServicos.style.left = maskLeft;
      maskDivServicos.style.top = maskTop;
    } 
    
    if(window.scrollY < 2000) {
      circleSvgServicos.setAttribute("cx", "50vw");
      circleSvgServicos.setAttribute("cy", "50vw");
      circleSvgServicos.setAttribute("r", "40vw");

      maskDivServicos.style.left = "0vw";
      maskDivServicos.style.top = "85vh";
    }

    // Atualiza o estado dos serviços
    if (window.scrollY > 2000 && window.scrollY < 3000) {
      servico1.classList.add(activeServicoClass);
      servico1.style.fontSize = "2rem";
      servico1Text.classList.add(activeServicoTextClass);

      servico2.classList.remove(activeServicoClass);
      servico2.style.fontSize = "1.5rem";
      servico2Text.classList.remove(activeServicoTextClass);

      servico3.classList.remove(activeServicoClass);
      servico3.style.fontSize = "1.5rem";
      servico3Text.classList.remove(activeServicoTextClass);
    } 
    
    if (window.scrollY > 3000 && window.scrollY < 3300) {
      servico1.classList.remove(activeServicoClass);
      servico1.style.fontSize = "1.5rem";
      servico1Text.classList.remove(activeServicoTextClass);

      servico2.classList.add(activeServicoClass);
      servico2.style.fontSize = "2rem";
      servico2Text.classList.add(activeServicoTextClass);

      servico3.classList.remove(activeServicoClass);
      servico3.style.fontSize = "1.5rem";
      servico3Text.classList.remove(activeServicoTextClass);
    } 
    if (window.scrollY > 3300 && window.scrollY < 3600) {
      servico1.classList.remove(activeServicoClass);
      servico1.style.fontSize = "1.5rem";
      servico1Text.classList.remove(activeServicoTextClass);

      servico2.classList.remove(activeServicoClass);
      servico2.style.fontSize = "1.5rem";
      servico2Text.classList.remove(activeServicoTextClass);

      servico3.classList.add(activeServicoClass);
      servico3.style.fontSize = "2rem";
      servico3Text.classList.add(activeServicoTextClass);
    }

    // Atualiza o último valor de scroll
    lastScroll = scroll;
  }

  requestAnimationFrame(animacaoServ);
}

// Verifica se o navegador suporta requestAnimationFrame e fallback para setTimeout
const requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

requestAnimFrame(animacaoServ);