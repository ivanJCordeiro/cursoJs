//FORMULARIO

// //INVOCACION FORMULARIO
let inputFormulario = document.getElementById("formulario");

//UNICA FUNCION QUE SE EJECUTA CORRECTAMENTE

inputFormulario.addEventListener("submit", validarForm);

function validarForm(e){
  e.preventDefault();
  let nombre = document.getElementById("nombreYapellido").value;
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Formulario enviado correctamente! Muchas gracias' + " " + nombre,
    showConfirmButton: false,
    timer: 1500
  })

  let resetBtn = document.getElementById("btnRes");

  resetBtn.click();
}



// //ERROR EN STORAGE





// //GUARDA LA CLAVE PERO NO EL VALOR EN EL SESSION STORAGE, DONDE ESTA EL ERROR?
// //STORAGE

// let nombreYApellido = document.getElementById("nombreYapellido");
// let edad = document.getElementById("edad");
// let email = document.getElementById("exampleInputEmail");
// let peso = document.getElementById("peso");
// let sesiones = document.getElementById("sesiones");
// let objetivo = document.getElementById("objetivo");

// sessionStorage.setItem("nombreCompleto" , nombreYApellido.value);
// sessionStorage.setItem("edad", edad.value);
// sessionStorage.setItem("email", email.value);
// sessionStorage.setItem("peso", peso.value);
// sessionStorage.setItem("sesiones", sesiones.value);
// sessionStorage.setItem("objetivo", objetivo.value);


// //ARRAY DE ALUMNOS
// let infoAlumno = {}

// infoAlumno.nombreCompleto = sessionStorage.getItem("nombreCompleto");
// infoAlumno.edad = parseInt(sessionStorage.getItem("edad"));
// infoAlumno.email = sessionStorage.getItem("email");
// infoAlumno.peso = parseInt(sessionStorage.getItem("peso"));
// infoAlumno.sesiones = parseInt(sessionStorage.getItem("sesiones"));
// infoAlumno.objetivo = sessionStorage.getItem("objetivo");

// //BOTON QUE GUARDA LA INFO DEL FORM EN EL SESSION STORAGE
// let btnGuardar = document.getElementById("btnGuardar");

// // FUNCION DE GUARDADO DEL ARRAY EN EL STORAGE
// btnGuardar.onclick = (e) => {
//   e.preventDefault();
//   let infoAlumno = {}
  
//   let nombreYApellido = document.getElementById("nombreYapellido");
//   let edad = document.getElementById("edad");
//   let email = document.getElementById("exampleInputEmail");
//   let peso = document.getElementById("peso");
//   let sesiones = document.getElementById("sesiones");
//   let objetivo = document.getElementById("objetivo");

//   sessionStorage.setItem("nombreCompleto" , nombreYApellido.value);
//   sessionStorage.setItem("edad", edad.value);
//   sessionStorage.setItem("email", email.value);
//   sessionStorage.setItem("peso", peso.value);
//   sessionStorage.setItem("sesiones", sesiones.value);
//   sessionStorage.setItem("objetivo", objetivo.value);

//   let arrayPush = {
//    nombre: nombreYApellido.value,
//    edad: edad.value,
//    email: email.value,
//    peso: peso.value,
//    sesiones: sesiones.value,
//    objetivo: objetivo.value
//   }

//   infoAlumno.push(arrayPush);

//   sessionStorage.getItem("infoAlumno", JSON.stringify(infoAlumno));
// }

// //LOS addEventListener ME LOS TOMA TODOS CON ERRORES ¿?