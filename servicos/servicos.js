function animacaoServ(){

    let scroll = this.scrollY;

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

    if (this.scrollY > 2000 && this.scrollY < 3000){
        document.getElementById("servico1").style.color = "#97FF66";
        document.getElementById("servico1").style.fontSize = "2rem";
        document.getElementById("servico1-text").style.opacity = "1";

        document.getElementById("servico2").style.color = "grey";
        document.getElementById("servico2").style.fontSize = "1.5rem";
        document.getElementById("servico2-text").style.opacity = "0";

        document.getElementById("servico3").style.color = "grey";
        document.getElementById("servico3").style.fontSize = "1.5rem";
        document.getElementById("servico3-text").style.opacity = "0";
    }

    if (this.scrollY > 3000 && this.scrollY < 3300){
        document.getElementById("servico1").style.color = "grey";
        document.getElementById("servico1").style.fontSize = "1.5rem";
        document.getElementById("servico1-text").style.opacity = "0";

        document.getElementById("servico2").style.color = "#97FF66";
        document.getElementById("servico2").style.fontSize = "2rem";
        document.getElementById("servico2-text").style.opacity = "1";

        document.getElementById("servico3").style.color = "grey";
        document.getElementById("servico3").style.fontSize = "1.5rem";
        document.getElementById("servico3-text").style.opacity = "0";
    }

    if (this.scrollY > 3300 && this.scrollY < 3600){
        document.getElementById("servico1").style.color = "grey";
        document.getElementById("servico1").style.fontSize = "1.5rem";
        document.getElementById("servico1-text").style.opacity = "0";

        document.getElementById("servico2").style.color = "grey";
        document.getElementById("servico2").style.fontSize = "1.5rem";
        document.getElementById("servico2-text").style.opacity = "0";

        document.getElementById("servico3").style.color = "#97FF66";
        document.getElementById("servico3").style.fontSize = "2rem";
        document.getElementById("servico3-text").style.opacity = "1";
    }

    requestAnimationFrame(animacaoServ);
}

requestAnimationFrame(animacaoServ);