//FORMULARIO

// //INVOCACION FORMULARIO
let inputFormulario = document.getElementById("formulario");

//UNICA FUNCION QUE SE EJECUTA CORRECTAMENTE

inputFormulario.addEventListener("submit", validarForm);

function validarForm(e){
  e.preventDefault();

  alert ("Formulario enviado! Muchas gracias");

  let resetBtn = document.getElementById("btnRes");

  resetBtn.click();
}
