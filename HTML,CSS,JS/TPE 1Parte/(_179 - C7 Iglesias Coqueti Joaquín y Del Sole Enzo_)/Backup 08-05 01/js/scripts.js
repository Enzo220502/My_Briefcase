let btn = document.querySelector("#btn_submit")
btn.addEventListener("click", validarFormulario);


let captchaValidado = false
let formulario = document.querySelector("#form_contacto")
let mensajeAlEnviar = document.querySelector("#mensaje_al_enviar")


function validarFormulario(event) {
    event.preventDefault();

    let s = "asdfasdf@asdfasd"
    alert(s.includes("@"))
    if (!captchaValidado)
        mensajeAlEnviar.innerHTML = "Debe validar correctamente el captcha"
    alert(formulario.email.value)
}

