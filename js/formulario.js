//FORMULARIO

// //INVOCACION FORMULARIO
let inputFormulario = document.getElementById("formulario");


//CONSTRUCTOR PARA GENERAR EL OBJETO DEL FORMULARIO
class InfoForm{
  constructor(nombreYApellido, edad , email , peso , sesiones , objetivo){
    this.nombreYApellido = nombreYApellido;
    this.edad = edad;
    this.email = email;
    this.peso = peso;
    this.sesiones = sesiones;
    this.objetivo= objetivo;
  }
}


//BOTON QUE GUARDA LA INFO DEL FORM EN EL OBJETO
let btnGuardar = document.getElementById("btnGuardar");

//EVENTO DE CREACION DEL OBJETO A PARTIR DEL FORM 
btnGuardar.onclick = (e) => {
  e.preventDefault();
  let Form = [{nombreYApellido: document.getElementById("nombreYapellido").value,
              edad: document.getElementById("edad").value,
              email: document.getElementById("exampleInputEmail").value,
              peso: document.getElementById("peso").value,
              sesiones: document.getElementById("sesiones").value,
              objetivo: document.getElementById("objetivo").value}];

  //GUARDADO EN EL SESSION
  sessionStorage.setItem("formulario" , JSON.stringify(Form));

  sessionStorage.getItem("Informacion del alumno" , JSON.stringify(Form));
 
  //VARIABLE PARA SWAL
  let nombre = document.getElementById("nombreYapellido").value;
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Formulario enviado correctamente! Muchas gracias' + " " + nombre,
    showConfirmButton: false,
    timer: 1500
  })

  //AUTO RESET CUANDO SE APLICA EL SUBMIT
  let resetBtn = document.getElementById("btnRes");

  resetBtn.click();
}
