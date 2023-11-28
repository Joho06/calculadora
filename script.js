// Selecciona los elementos necesarios del DOM
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

// Agrega un event listener a cada botón
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // Obtiene el valor del botón clicado
        const botonApretado = boton.textContent;

        // Lógica para el botón "C"
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        // Lógica para el botón "←"
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // Lógica para el botón "="
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        // Lógica para otros botones
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
