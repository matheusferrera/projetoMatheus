// Armazena as referências aos elementos para evitar acessos repetidos ao DOM
const circleSvgServicos = document.querySelector("#circleSvg-servicos");
const maskDivServicos = document.querySelector("#maskDiv-servicos");
const servico1 = document.querySelector("#servico1");
const servico2 = document.querySelector("#servico2");
const servico3 = document.querySelector("#servico3");
const servico1Text = document.querySelector("#servico1-text");
const servico2Text = document.querySelector("#servico2-text");
const servico3Text = document.querySelector("#servico3-text");



function animacaoServ(){

    let scroll = this.scrollY;

    if(this.scrollY > 2000)
    {
        scroll = scroll - 2000 
        
        circleSvgServicos.setAttribute("cx", (50 + (scroll/3)) + "vw"); 
        circleSvgServicos.setAttribute("cy", (50 + (scroll/3)) + "vw"); 
        circleSvgServicos.setAttribute("r", (40 + (scroll/4)) + "vw"); 
        
        maskDivServicos.style.left = (0 - (scroll/3)) + "vw";
        maskDivServicos.style.top = (85 - (scroll/5)) + "vh";

    }

    if(this.scrollY < 2000){
        circleSvgServicos.setAttribute("cx", "50vw"); 
        circleSvgServicos.setAttribute("cy", "50vw"); 
        circleSvgServicos.setAttribute("r",  "40vw"); 
        
        maskDivServicos.style.left = "0vw";
        maskDivServicos.style.top = "85vh";
    }

    if (this.scrollY > 2000 && this.scrollY < 3000){
        servico1.style.color = "#97FF66";
        servico1.style.fontSize = "2rem";
        servico1Text.style.opacity = "1";

        servico2.style.color = "grey";
        servico2.style.fontSize = "1.5rem";
        servico2Text.style.opacity = "0";

        servico3.style.color = "grey";
        servico3.style.fontSize = "1.5rem";
        servico3Text.style.opacity = "0";
    }

    if (this.scrollY > 3000 && this.scrollY < 3300){
        servico1.style.color = "grey";
        servico1.style.fontSize = "1.5rem";
        servico1Text.style.opacity = "0";

        servico2.style.color = "#97FF66";
        servico2.style.fontSize = "2rem";
        servico2Text.style.opacity = "1";

        servico3.style.color = "grey";
        servico3.style.fontSize = "1.5rem";
        servico3Text.style.opacity = "0";
    }

    if (this.scrollY > 3300 && this.scrollY < 3600){
        servico1.style.color = "grey";
        servico1.style.fontSize = "1.5rem";
        servico1Text.style.opacity = "0";

        servico2.style.color = "grey";
        servico2.style.fontSize = "1.5rem";
        servico2Text.style.opacity = "0";

        servico3.style.color = "#97FF66";
        servico3.style.fontSize = "2rem";
        servico3Text.style.opacity = "1";
    }

    requestAnimationFrame(animacaoServ);
}

requestAnimationFrame(animacaoServ);