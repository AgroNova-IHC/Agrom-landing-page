// Esther: interacciones

const botonMenu = document.getElementById("menu-boton");
const menu = document.getElementById("menu-lista");

botonMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar");
    botonMenu.setAttribute("aria-expanded", menu.classList.contains("mostrar"));
});

const enlaces = menu.querySelectorAll("a");
enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        menu.classList.remove("mostrar");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});

const botonesPlan = document.querySelectorAll("[data-plan]");
botonesPlan.forEach(function (boton) {
    boton.addEventListener("click", function () {
        document.getElementById("tipo-consulta").value = boton.dataset.plan;
    });
});

const formulario = document.getElementById("formulario-contacto");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const tipo = document.getElementById("tipo-consulta");
    const mensaje = document.getElementById("mensaje").value.trim();
    const salida = document.getElementById("consulta-preparada");
    const estado = document.getElementById("contacto-estado");

    salida.value = "CONSULTA AGROM\n" +
        "Nombre: " + nombre + "\n" +
        "Correo: " + correo + "\n" +
        "Tipo: " + tipo.options[tipo.selectedIndex].text + "\n\n" +
        "Mensaje: " + mensaje;

    salida.hidden = false;
    salida.focus();
    salida.select();

    if (document.execCommand("copy")) {
        estado.textContent = "Consulta copiada. Puedes pegarla en tu correo. No se ha enviado automáticamente.";
    } else {
        estado.textContent = "Consulta preparada. Copia el texto de abajo; todavía no se ha enviado.";
    }
});
