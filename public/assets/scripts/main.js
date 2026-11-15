// Esther: menú móvil
let botonMenu = document.getElementById("boton-menu");
let menu = document.getElementById("menu-principal");

botonMenu.addEventListener("click", function () {
    menu.classList.toggle("abierto");
    let abierto = menu.classList.contains("abierto");
    botonMenu.setAttribute("aria-expanded", abierto);
    botonMenu.textContent = abierto ? "✕" : "☰";
});

// Esther: cerrar el menú
let enlaces = menu.querySelectorAll("a");
for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", function () {
        menu.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.textContent = "☰";
    });
}

// Esther: elegir un plan
let botonesPlan = document.querySelectorAll(".elegir-plan");
for (let i = 0; i < botonesPlan.length; i++) {
    botonesPlan[i].addEventListener("click", function () {
        document.getElementById("plan").value = botonesPlan[i].getAttribute("data-plan");
    });
}

// Esther: mensaje del formulario
let formulario = document.getElementById("formulario-contacto");
let mensaje = document.getElementById("mensaje-formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    mensaje.textContent = "¡Gracias, " + nombre + "! Completaste el formulario correctamente.";
    mensaje.style.display = "block";
    formulario.reset();
});


// Esther: galería de la aplicación
let mockups = document.querySelectorAll(".mockup-slide");
let posicionMockup = 0;
let contadorMockup = document.getElementById("mockup-contador");

function mostrarMockup(numero) {
    mockups[posicionMockup].classList.remove("activo");
    mockups[posicionMockup].setAttribute("aria-hidden", "true");
    posicionMockup = (numero + mockups.length) % mockups.length;
    mockups[posicionMockup].classList.add("activo");
    mockups[posicionMockup].setAttribute("aria-hidden", "false");
    contadorMockup.textContent = (posicionMockup + 1) + " de " + mockups.length;
}

document.getElementById("mockup-anterior").addEventListener("click", function () {
    mostrarMockup(posicionMockup - 1);
});

document.getElementById("mockup-siguiente").addEventListener("click", function () {
    mostrarMockup(posicionMockup + 1);
});

setInterval(function () {
    mostrarMockup(posicionMockup + 1);
}, 5000);