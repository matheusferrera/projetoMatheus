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
  
  
  vantaBG.resize()
  
  
  //Eventos de scroll
  setInterval(function() {
      let scroll = this.scrollY;
      vantaBG.setOptions({chaos: 2 + scroll/30, spacing: scroll/50})
      vantaBG.resize()
      
  
      //ajustar abertura do circulo da primeira pagina
      document.getElementById("circleSvg").setAttribute("cx", scroll/5 + "vw"); 
      document.getElementById("circleSvg").setAttribute("cy", scroll/5 + "vh"); 
      document.getElementById("circleSvg").setAttribute("r", scroll/10 + "vw"); 
      
      document.getElementById("maskDiv").style.left = (50 - (scroll/5)) + "vw";
      document.getElementById("maskDiv").style.top = (80 - (scroll/5)) + "vh";
  

  }, 10);
  
  
  new rive.Rive({
          src: "cortadito.riv",
          canvas: document.getElementById("canvas"),
          autoplay: true
      });
  