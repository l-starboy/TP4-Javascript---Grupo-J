document.addEventListener('DOMContentLoaded', function() {
    const carrito = document.getElementById('carrito');
    const imgCarrito = document.getElementById('img-carritobt');
    const carritoCount = document.getElementById('carrito-count');
    let itemCount = 0;

    // Mostrar el carrito al hacer clic en la imagen del carrito
    imgCarrito.addEventListener('click', function() {
        toggleCarrito();
    });

    // Función para mostrar u ocultar el carrito
    function toggleCarrito() {
        carrito.classList.toggle('mostrar');
    }

    // Resto del código para el manejo del carrito
    const listaProductos = document.querySelector('.catalogo .row');
    const lista = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    const comprarCarritoBtn = document.getElementById('comprar-carrito');

    cargarEventListeners();

    function cargarEventListeners() {
        listaProductos.addEventListener('click', comprarProducto);
        carrito.addEventListener('click', eliminarProducto);
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
        comprarCarritoBtn.addEventListener('click', comprarCarrito);
    }

    function comprarProducto(e) {
        e.preventDefault();
        if (e.target.textContent === 'COMPRAR') {
            const producto = e.target.closest('.card');
            leerDatosProducto(producto);
            actualizarContadorCarrito(1);
        }
    }

    function leerDatosProducto(producto) {
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('.card-title').textContent,
            precio: producto.querySelector('.card-footer small').textContent,
            id: producto.querySelector('.card-title').textContent
        };
        insertarCarrito(infoProducto);
    }

    function insertarCarrito(producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width="100" />
            </td>
            <td>
                ${producto.titulo}
            </td>
            <td>
                ${producto.precio}
            </td>
            <td>
                <button class="btn-eliminar" data-id="${producto.id}">X</button>
            </td>
        `;
        lista.appendChild(row);
    }

    function eliminarProducto(e) {
        e.preventDefault();
        if (e.target.classList.contains('btn-eliminar')) {
            e.target.parentElement.parentElement.remove();
            actualizarContadorCarrito(-1);
        }
    }

    function vaciarCarrito() {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        actualizarContadorCarrito(-itemCount);
        return false;
    }

    function comprarCarrito() {
        if (itemCount === 0) {
            alert("No tienes productos seleccionados para realizar la compra");
        } else {
            vaciarCarrito();
            alert("Indumentaria 2k24 te agradece por la compra!");
        }
    }

    function actualizarContadorCarrito(cantidad) {
        itemCount += cantidad;
        carritoCount.textContent = itemCount;
    }
});