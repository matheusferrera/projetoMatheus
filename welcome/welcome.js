const circleSvgSaibaMais = document.getElementById("circleSvg-saibaMais");
const maskDivSaibaMais = document.getElementById("maskDiv-saibaMais");

const vantaBG = VANTA.TRUNK({
    el: "#div-welcome-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x97FF66,
    backgroundColor: 0x171717,
    chaos: -2.00,
  })
  
  function animacao() {
    let scroll = window.scrollY;
    const innerHeight = window.innerHeight;

    // Ajustar abertura do círculo da primeira página
    if (3 * innerHeight > scroll){

      vantaBG.setOptions({chaos: 2 + scroll/30, spacing: scroll/50});
      vantaBG.resize();

      circleSvgSaibaMais.setAttribute("cx", scroll/5 + "vw");
      circleSvgSaibaMais.setAttribute("cy", scroll/5 + "vh");
      circleSvgSaibaMais.setAttribute("r", scroll/10 + "vw");
      
      maskDivSaibaMais.style.left = (50 - (scroll/5)) + "vw";
      maskDivSaibaMais.style.top = (80 - (scroll/5)) + "vh";
    }
    
  
    requestAnimationFrame(animacao);
  }

  requestAnimationFrame(animacao);
  


  