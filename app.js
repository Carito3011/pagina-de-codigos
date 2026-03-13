function cerrarSesion() {
    // Esto borra los datos específicos que creamos
    localStorage.removeItem('registrado');
    localStorage.removeItem('perfilCompleto');
    
    // O puedes usar localStorage.clear(); para borrar TODO
    
    alert("Registro eliminado. El contenido volverá a estar bloqueado.");
    window.location.reload(); // Recarga la página para aplicar los cambios
}
// Si el usuario ya está registrado, mostrar su nombre en el saludo
const perfil = JSON.parse(localStorage.getItem('perfilCompleto'));
if (perfil && perfil.nombre) {
    document.getElementById('saludo').innerText = "¡Hola de nuevo, " + perfil.nombre + "!";
}