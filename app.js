// Registro de usuario
function registrar() {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        localStorage.setItem('registrado', 'true');
        localStorage.setItem('usuario', nombre);
        alert("¡Registro exitoso!");
        window.location.href = 'index.html';
    } else {
        alert("Por favor pon tu nombre.");
    }
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('registrado');
    localStorage.removeItem('usuario');
    location.reload();
}

// Saludo personalizado
window.onload = function() {
    const registrado = localStorage.getItem('registrado');
    const usuario = localStorage.getItem('usuario');
    const saludo = document.getElementById('saludo');

    if (registrado === 'true' && saludo) {
        saludo.innerText = "¡Bienvenido, " + usuario + "! Tienes acceso a los códigos.";
    }
};
