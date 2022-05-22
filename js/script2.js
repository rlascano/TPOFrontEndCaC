//Validacion Formulario
const formulario = document.querySelector("#contact-form");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const emailInput = document.querySelector("#email");
const edadInput = document.querySelector("#edad");
const consultaTextarea = document.querySelector("#consulta");
const mensajeError = document.querySelector(".mensaje_error");
const mensajeExito = document.querySelector(".mensaje_exito");
let listaErrores = document.querySelector(".mensaje_error ul");

formulario.addEventListener("submit", validar);

function validar(evt) {
  evt.preventDefault();
  mensajeExito.classList.remove("mostrar");
  mensajeError.classList.remove("mostrar");
  let errores = obtenerErrores(
    nombreInput.value,
    apellidoInput.value,
    emailInput.value,
    edadInput.value,
    consultaTextarea.value
  );

  if (errores.length > 0) {
    listaErrores.innerHTML = "";
    for (const error of errores) {
      let li = document.createElement("li");
      li.textContent = error;
      listaErrores.appendChild(li);
    }
    mensajeError.classList.add("mostrar");
  } else {
    mensajeExito.classList.add("mostrar");
  }
}

function obtenerErrores(nombre, apellido, email, edad, consulta) {
  let errores = [];
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (nombre == "") {
    errores.push("El nombre no debe estar en blanco");
  }
  if (apellido == "") {
    errores.push("El apellido no debe estar en blanco");
  }
  if (!email.match(emailRegex)) {
    errores.push("La dirección de correo no es válida");
  }
  if (+edad < 18) {
    errores.push("Debes ser mayor de 18 años");
  }
  if (consulta == "") {
    errores.push("No especificaste tu consulta");
  }

  return errores;
}
