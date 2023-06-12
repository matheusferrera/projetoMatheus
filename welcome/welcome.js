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
    vantaBG.setOptions({chaos: 2 + scroll/30, spacing: scroll/50});
    vantaBG.resize();
    
    // Ajustar abertura do círculo da primeira página
    document.getElementById("circleSvg-saibaMais").setAttribute("cx", scroll/5 + "vw");
    document.getElementById("circleSvg-saibaMais").setAttribute("cy", scroll/5 + "vh");
    document.getElementById("circleSvg-saibaMais").setAttribute("r", scroll/10 + "vw");
    
    document.getElementById("maskDiv-saibaMais").style.left = (50 - (scroll/5)) + "vw";
    document.getElementById("maskDiv-saibaMais").style.top = (80 - (scroll/5)) + "vh";
  
    requestAnimationFrame(animacao);
  }

  requestAnimationFrame(animacao);
  


  