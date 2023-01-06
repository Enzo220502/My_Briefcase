let btn = document.querySelector("#btn_submit")
btn.addEventListener("click", validarFormulario);
let pregunta = document.querySelector("#label_captcha")
let respuesta = document.querySelector("#respuesta_captcha")
let sumaCaptcha
randomizeCaptcha()


function randomizeCaptcha (){
     let n1 = Math.floor(Math.random() * 100 + 1 );
     let n2 = Math.floor(Math.random() * 100 + 1);
     sumaCaptcha = n1 + n2;
    pregunta.innerHTML = "Ingrese la suma de " + n1 + " y " + n2
}

let formulario = document.querySelector("#form_contacto");
let mensajeAlEnviar = document.querySelector("#mensaje_al_enviar");
validarFormulario()

function validarFormulario(event) {
    event.preventDefault();
    if (sumaCaptcha == respuesta.value)
        mensajeAlEnviar.innerHTML = "Has verificado correctamente el captcha";
    else{
        mensajeAlEnviar.innerHTML ="Por favor, verifica tu respuesta";
        randomizeCaptcha();
        }    
}

