let btn = document.querySelector("#btnSubmit")
btn.addEventListener("click", validarFormulario);


let captchaValidado = false
let formulario = document.querySelector("#formContacto")
let mensajeAlEnviar = document.querySelector("#mensajeAlEnviar")


function validarFormulario(event) {
    event.preventDefault();

    let s = "asdfasdf@asdfasd"
    alert(s.includes("@"))
    if (!captchaValidado)
        mensajeAlEnviar.innerHTML = "Debe validar correctamente el captcha"
    alert(formulario.email.value)
}

