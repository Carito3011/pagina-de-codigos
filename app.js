document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("inputBusqueda");
    const loader = document.getElementById("loader-busqueda");
    const tarjetas = document.querySelectorAll(".card");
    const btnCerrar = document.getElementById("btnCerrarSesion");

    // LÓGICA DEL BUSCADOR
    if (buscador) {
        buscador.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                
                // Mostrar loader grande abajo
                loader.classList.remove("hidden");
                
                setTimeout(() => {
                    const texto = buscador.value.toLowerCase().trim();
                    
                    tarjetas.forEach(t => {
                        const contenido = t.innerText.toLowerCase();
                        t.style.display = contenido.includes(texto) ? "flex" : "none";
                    });

                    // Ocultar loader al terminar
                    loader.classList.add("hidden");
                }, 1000); // 1 segundo para que luzca el loader
            }
        });
    }

    // LÓGICA CERRAR SESIÓN (Solución definitiva)
    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            localStorage.clear(); // Limpia el registro
            alert("Sesión cerrada.");
            window.location.reload(); 
        });
    }
});