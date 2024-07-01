// Espera a que el contenido del documento esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {

    // Obtiene el formulario de suscripción usando su ID 'subscribeForm'
    const subscribeForm = document.getElementById('subscribeForm');

    // Obtiene el elemento donde se mostrarán los mensajes al usuario usando su ID 'subscribeMessage'
    const subscribeMessage = document.getElementById('subscribeMessage');

    // Añade un evento 'submit' al formulario de suscripción
    subscribeForm.addEventListener('submit', function (event) {

        // Evita que el formulario se envíe de forma predeterminada (es decir, evita que la página se recargue)
        event.preventDefault();

        // Obtiene el valor del campo de correo electrónico en el formulario usando su ID 'subscribeEmail'
        const email = document.getElementById('subscribeEmail').value;

        // Define un patrón básico de validación de correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Comprueba si el valor del correo electrónico no coincide con el patrón definido
        if (!emailPattern.test(email)) {

            // Si el correo electrónico no es válido, muestra un mensaje de error
            subscribeMessage.textContent = 'Por favor, introduce un correo electrónico válido.';

            // Cambia el color del mensaje a rojo para indicar un error
            subscribeMessage.style.color = 'red';

            // Termina la ejecución de la función aquí
            return;
        }

        // Si el correo electrónico es válido, muestra un mensaje de éxito
        subscribeMessage.textContent = 'Gracias por suscribirte a nuestro boletín.';

        // Cambia el color del mensaje a verde para indicar éxito
        subscribeMessage.style.color = 'green';

        // Resetea el formulario, limpiando todos los campos
        subscribeForm.reset();
    });
});
