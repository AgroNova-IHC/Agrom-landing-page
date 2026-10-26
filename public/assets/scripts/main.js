
/* ESTHER - FORMULARIO DE CONTACTO */

const formularioContacto = document.getElementById("formulario-contacto");

if (formularioContacto) {
    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault();

        const estado = document.getElementById("contacto-estado");

        estado.textContent =
            "Gracias por tu interés en AgrOm. " +
            "Pronto nos contactaremos con usted.";
    });
}
