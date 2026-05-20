document.getElementById('formularioLogin').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita envío automático

    // Obtener valores
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Validación básica
    if (usuario === 'Fany' && contrasena === '1265') {
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
        // window.location.href = "file:///C:/Users/steph/Downloads/pagina%20de%20inicio/pagina%20de%20inicio/login%20-%201.html";
    } else {
        alert('Usuario o contraseña incorrectos. Intenta nuevamente.');
    }
});
