function animacaoServ(){

    let scroll = this.scrollY;
    console.log(scroll)
    if(this.scrollY > 2000)
    {
        scroll = scroll - 2000 
        
        document.getElementById("circleSvg-servicos").setAttribute("cx", (50 + (scroll/3)) + "vw"); 
        document.getElementById("circleSvg-servicos").setAttribute("cy", (50 + (scroll/3)) + "vw"); 
        document.getElementById("circleSvg-servicos").setAttribute("r", (40 + (scroll/4)) + "vw"); 
        
        document.getElementById("maskDiv-servicos").style.left = (0 - (scroll/3)) + "vw";
        document.getElementById("maskDiv-servicos").style.top = (85 - (scroll/5)) + "vh";

    }

    if(this.scrollY < 2000){
        document.getElementById("circleSvg-servicos").setAttribute("cx", "50vw"); 
        document.getElementById("circleSvg-servicos").setAttribute("cy", "50vw"); 
        document.getElementById("circleSvg-servicos").setAttribute("r",  "40vw"); 
        
        document.getElementById("maskDiv-servicos").style.left = "0vw";
        document.getElementById("maskDiv-servicos").style.top = "85vh";
    }

    requestAnimationFrame(animacaoServ);
}

requestAnimationFrame(animacaoServ);