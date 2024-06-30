const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click" , e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSignUp.addEventListener("click" , e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
})

// loginprueba.js

function redirectToNewPage() {
    // Redirigir a la página deseada después de enviar el formulario
    window.location.href = "/public/registro_exitoso.html";  // Reemplaza "nueva_pagina.html" con la ruta de tu página nueva
    return false;  // Para prevenir que el formulario se envíe por defecto
}

