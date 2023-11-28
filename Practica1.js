// Funcion para verificar el correo electronico
function verificarCorreo() {
    // Obtener el valor del correo electronico ingresado
    var correoUsuario = document.getElementById("email").value;

    // Realizar comprobaciones con el correo electronico
    if (esCorreoValido(correoUsuario)) {
        mostrarResultado("¡El correo electronico tiene una terminacion valida!");
        // Acciones adicionales si es necesario
    } else {
        mostrarResultado("Por favor, ingresa una direccion de correo con una de estas terminaciones: .com, .com.mx o .mx.");
    }
}

// Funcion para validar el correo electronico
function esCorreoValido(correo) {
    // Expresion regular para validar el correo electronico
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|com\.mx|mx)$/;

    // Verifica si el correo cumple con la expresion regular
    return regexCorreo.test(correo);
}

// Funcion para mostrar el resultado al final
function mostrarResultado(resultado) {
    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = resultado;
}
