// --- 1. FUNCIÓN GLOBAL DE CIERRE ---
function cerrarSesion() {
    localStorage.clear(); 
    alert("Sesión cerrada.");
    window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("inputBusqueda");
    const loader = document.getElementById("loader-busqueda");
    const tarjetas = document.querySelectorAll(".card");

    if (buscador) {
        // EVENTO 1: Cuando el usuario escribe o borra (Búsqueda automática al borrar)
        buscador.addEventListener("input", () => {
            const texto = buscador.value.toLowerCase().trim();
            
            // Si el buscador está vacío, mostramos todo de una vez
            if (texto === "") {
                tarjetas.forEach(t => t.style.display = "flex");
                if (loader) loader.classList.add("hidden"); // Por si acaso el loader estaba prendido
            }
        });

        // EVENTO 2: Cuando el usuario presiona ENTER (Muestra el loader y busca)
        buscador.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                const texto = buscador.value.toLowerCase().trim();

                // Mostrar loader
                if (loader) loader.classList.remove("hidden");
                
                setTimeout(() => {
                    tarjetas.forEach(t => {
                        const contenido = t.innerText.toLowerCase();
                        t.style.display = contenido.includes(texto) ? "flex" : "none";
                    });

                    // Ocultar loader
                    if (loader) loader.classList.add("hidden");
                }, 500); // Un poco más rápido para que no sea molesto
            }
        });
    }

    // Saludo
    const perfil = JSON.parse(localStorage.getItem('perfilCompleto'));
    if (perfil && perfil.nombre) {
        const saludo = document.getElementById('saludo');
        if (saludo) saludo.innerText = "¡Hola, " + perfil.nombre + "!";
    }
});