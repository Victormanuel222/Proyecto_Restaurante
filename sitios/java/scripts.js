var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var mensaje = document.getElementById("mensaje");
var mensajeNombre = document.getElementById("mensajeNombre");
var mensajeCorreo = document.getElementById("mensajeCorreo");
var mensajeMensaje = document.getElementById("mensajeMensaje");

formulario.addEventListener("submit", (event) => {
  if (nombre.value === "") {
    event.preventDefault();
    mensajeNombre.innerHTML = "Error, captura tu nombre";
    mensajeNombre.classList.add("mostrar");
  } else {
    mensajeNombre.classList.remove("mostrar");
    mensajeNombre.classList.add("borrar");
  }

  if (correo.value === "") {
    event.preventDefault();
    mensajeCorreo.innerHTML = "Error, captura tu correo";
    mensajeCorreo.classList.add("mostrar");
  } else {
    mensajeCorreo.classList.remove("mostrar");
    mensajeCorreo.classList.add("borrar");
  }

  if (mensaje.value === "") {
    event.preventDefault();
    mensajeMensaje.innerHTML = "Error, captura tu mensaje";
    mensajeMensaje.classList.add("mostrar");
  } else {
    mensajeMensaje.classList.remove("mostrar");
    mensajeMensaje.classList.add("borrar");
  }
});