    const heightTotal = window.innerHeight;
    const widthTotal = window.innerWidth;
    
    //Eventos de scroll
    setInterval(function() {
        let scroll = this.scrollY;
 

    //animação de letras atrás do canva
        document.getElementById("text-canva1").style.paddingRight = (scroll) + "vw";
    }, 10);

    //criação do rive
    // const r = new rive.Rive({
    //         src: "blog_bot.riv",
    //         canvas: document.getElementById("canvas"),
    //         autoplay: true,
    //         stateMachines: "State Machine 1",
    //         onLoad: () => {  
    //             // Get the inputs via the name of the state machine
    //             const inputs = r.stateMachineInputs('State Machine 1');
    //             const TriggerLimited = inputs.find(i => i.name === 'isLimited');
    //             const TriggerVisible = inputs.find(i => i.name === 'isVisible');
    //             TriggerLimited.value = false;
    //             TriggerVisible.value = true;
    //         }
    //     });

    //Escrever palavras saibaMais
    consoleText(['Crio experiências', 'Crio sentimentos', 'Crio conexões', 'Crio clientes', 'Crio obras de arte'], 'text',['black']);

    function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function() {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
        }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
            x = -1;
            letterCount += x;
            waiting = false;
        }, 1000)
        } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
        }
    }, 120)
    window.setInterval(function() {
        if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;

        } else {
        con.className = 'console-underscore'

        visible = true;
        }
    }, 400)
    }
