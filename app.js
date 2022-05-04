window.addEventListener("load", function(){
    let numeroAleatorio = Math.floor(Math.random()*100)+1;
    const numero = document.querySelector('.numero');
    const intentoEnviado = document.querySelector('.intentoEnviado');
    const resultado = document.querySelector('.resultado');
    const pista = document.querySelector('.pista');
    let intentos = 1;    
    let reiniciarBoton;
    
    function reiniciarJuego(){
        reiniciarBoton = document.createElement("button");
        reiniciarBoton.textContent = "Reiniciar Juego";
        document.querySelector('.game').appendChild(reiniciarBoton);        
        reiniciarBoton.addEventListener('click', function(){
            resultado.textContent = '';
            pista.textContent = '';
            numero.value = '';
            pista.style.backgroundColor = 'var(--var-color-fondo)';
            document.querySelector('.game').removeChild(reiniciarBoton);
            numeroAleatorio = Math.floor(Math.random()*100)+1;
            numero.focus();
            intentos = 1;
        });
    }
    
    function validarNumero(n){        
        if(n === numeroAleatorio){            
            pista.textContent  = "FELICITACIONES: Lo adivinaste!!!";
            pista.style.backgroundColor = "green";       
            reiniciarJuego();
        }else if (intentos === 10){
            pista.textContent  = "FALLASTE!!";
            reiniciarJuego();
        }else if(n< numeroAleatorio){            
            pista.textContent  = "Número muy bajo!";
            pista.style.backgroundColor = "red";            
        } else {
            pista.textContent  = "Número muy alto";            
            pista.style.backgroundColor = "red";            
        }        
        intentos++;
        numero.value = "";
        numero.focus();
    }
    numero.focus();
    intentoEnviado.addEventListener('click', function(){
        let numeroDigitado = Number(numero.value);
        if(intentos === 1){
            resultado.textContent = 'Intentos anteriores: ';
        }
        validarNumero(numeroDigitado);
        resultado.textContent += " "+numeroDigitado;
    })
})


