// --- FUNCIONES DE REGISTRO Y SESIÓN ---

// 1. Registrar usuario (Corrección para evitar 'null')
function registrar() {
    const nombreInput = document.getElementById('nombre').value.trim(); // .trim() quita espacios vacíos
    const emailInput = document.getElementById('email').value.trim();

    // Verificación básica: no dejar campos vacíos
    if (nombreInput === "" || emailInput === "") {
        alert("⚠️ Por favor, rellena tu nombre y correo para continuar.");
        return; // Detiene la función aquí
    }

    // Guardamos los datos de forma segura
    localStorage.setItem('registrado', 'true');
    localStorage.setItem('usuarioNombre', nombreInput); // Usamos una clave más específica
    
    alert("¡Registro exitoso, " + nombreInput + "! Ya puedes ver los códigos completos.");
    
    // Redirigimos al index
    window.location.href = 'index.html';
}

// 2. Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('registrado');
    localStorage.removeItem('usuarioNombre');
    alert("Sesión cerrada. Los códigos completos se han vuelto a bloquear.");
    window.location.href = 'index.html'; // Recarga para actualizar el estado
}

// 3. Saludo personalizado en index.html
function gestionarSaludo() {
    const saludoElemento = document.getElementById('saludo');
    const btnLogout = document.querySelector('.btn-logout');
    
    // Si no estamos en index.html, esta función no hace nada
    if (!saludoElemento) return;

    const estaRegistrado = localStorage.getItem('registrado') === 'true';
    const nombreUsuario = localStorage.getItem('usuarioNombre');

    if (estaRegistrado && nombreUsuario) {
        // Usuario logueado: mostrar nombre y botón de cerrar sesión
        saludoElemento.innerHTML = "¡Hola de nuevo, <span style='color: #fff; font-weight: bold;'>" + nombreUsuario + "</span>! Tienes acceso total a los códigos.";
        if (btnLogout) btnLogout.style.display = 'inline-block';
    } else {
        // Usuario NO logueado: mensaje genérico y esconder botón
        saludoElemento.innerText = "Regístrate para acceder a los códigos completos.";
        if (btnLogout) btnLogout.style.display = 'none';
    }
}

// --- GESTIÓN DE BLOQUEO EN PÁGINAS DE CÓDIGO ---

// 4. Verificar acceso y aplicar bloqueo/desbloqueo
function gestionarBloqueoCodigo() {
    const seccionBloqueada = document.querySelector('.seccion-bloqueada');
    
    // Si la página no tiene sección bloqueada, no hacemos nada
    if (!seccionBloqueada) return;

    const estaRegistrado = localStorage.getItem('registrado') === 'true';

    if (estaRegistrado) {
        // USUARIO REGISTRADO: Desbloquear
        const codigoBorroso = seccionBloqueada.querySelector('.codigo-borroso');
        const capaBloqueo = seccionBloqueada.querySelector('.capa-bloqueo');

        if (codigoBorroso) codigoBorroso.classList.remove('codigo-borroso');
        if (capaBloqueo) capaBloqueo.style.display = 'none';
    }
    // Si no está registrado, el CSS ya se encarga de mostrarlo bloqueado
}

// --- EJECUCIÓN AL CARGAR LA PÁGINA ---
window.onload = function() {
    gestionarSaludo();
    gestionarBloqueoCodigo();
};
