// Esperamos a que el contenido del documento esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {

    // Obtiene el elemento de imagen principal utilizando su ID 'mainImage'
    const mainImage = document.getElementById('mainImage');

    // Seleccionar todos los elementos con la clase 'thumbnail' (miniaturas de las imágenes)
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Iterar sobre cada miniatura de imagen
    thumbnails.forEach(thumbnail => {

        // Añadir un evento 'click' a cada miniatura
        thumbnail.addEventListener('click', function () {

            // Actualizar la imagen principal con la fuente (src) de la miniatura que se ha clickeado
            mainImage.src = this.src;

            // Eliminar la clase 'active' de todas las miniaturas (para desactivar la anterior seleccionada)
            thumbnails.forEach(tn => tn.classList.remove('active'));

            // Añadir la clase 'active' a la miniatura que se ha clicado (para destacar la seleccionada)
            this.classList.add('active');
        });
    });
});
