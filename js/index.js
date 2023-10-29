// function saludo() {
//     alert("Bienvenidos a RutiNow, a continuacion les dejaremos una breve guia: ");
// }

// function despedida(){
//     alert("Gracias por visitar nuestro sitio");
// }

// saludo();

// let texto= prompt("buscas informacion, ejemplos, entrenamiento o consejos?: ");

// while(texto !="salir"){ 
//     if (texto === "informacion"){
//         alert("vaya a la pestaña Inicio")
//     } else if ( texto === "ejemplos"){
//         alert("Vaya a la pestaña Ejercicios")
//     } else if (texto === "entrenamiento"){
//         alert("Vaya a la pestaña Rutinas")
//     } else if (texto === "consejos"){
//         alert("Vaya a la pestaña alimentacion")
//     } else {
//         alert("Ponganse en contacto con nosotros en la pestaña Contacto")
//     };
//     texto = prompt("Buscas informacion, ejemplos, entrenamiento o consejos? (para cerrar la ventana escriba: salir): ");
// }

// let repeticiones = Number(prompt("Ingrese numero de repeticiones: "));
// let kilos = Number(prompt("Ingrese carga MAXIMA alcanzada: "));

// const calculadora =(rep, kg) =>{
//     if ( rep <= 2){
//         return kg * 1;
//     }else if ((rep > 2) && (rep < 6)){
//         return kg * 0.95;
//     }else if ((rep >= 6) && (rep <= 8)){
//         return kg * 0.85;
//     }else if ((rep > 8) && (rep <= 12)){
//         return kg * 0.75;
//     }else{
//         return kg * 0.70;
//     }
// }

// console.log(calculadora(repeticiones, kilos));

// despedida();

//FILTRO
// class Ejercicio{
//     constructor (nombre, musculo, dificultad, orden){
//         this.nombre = nombre;
//         this.musculo = musculo;
//         this.dificultad = dificultad;
//         this.orden = orden;
//     }
//   }


//   const Ejercicios = [{nombre: "remo Horizontal", musculo: "espalda", dificultad:"baja" , orden: "1"},
//                     {nombre: "serrucho con mancuerna", musculo: "espalda", dificultad:"media" , orden: "1"},
//                     {nombre: "press de  Banca", musculo: "pecho", dificultad:"media" , orden: "2"},
//                     {nombre: "cruces de Poleas", musculo: "pecho", dificultad:"alta" , orden: "2"},
//                     {nombre: "sentadilla libre", musculo: "cuadricep",dificultad:"media" , orden: "3"},
//                     {nombre: "estocadas con mancuernas",musculo:  "cuadriceps", dificultad:"media" , orden: "3"},
//                     {nombre: "peso Muerto", musculo: "femorales", dificultad:"media" , orden: "4"},
//                     {nombre: "hipThrust", musculo: "gluteos", dificultad:"media" , orden: "4"},
//                     {nombre: "press Militar", musculo: "hombro", dificultad:"media" , orden: "5"},
//                     {nombre: "vuelo lateral", musculo: "hombro" , dificultad:"baja" , orden: "5"},
//                     {nombre: "curl bicep con barra", musculo: "biceps", dificultad:"baja" , orden: "6"},
//                     {nombre: "curl concentrado", musculo: "biceps", dificultad:"baja" , orden: "6"},
//                     {nombre: "extension con soga", musculo: "triceps", dificultad:"media" , orden: "7"},
//                     {nombre: "skullcrasher", musculo: "triceps", dificultad:"alta" , orden: "7"}];

//   let musculosinput = document.getElementById("formNav");
//   let boton = document.getElementsByClassName("btnFiltro");
//   let filtroMusc = Ejercicios.filter((Ejercicios)=> Ejercicios.orden.includes(musculosinput));
//   let filtroDif = Ejercicios.filter((Ejercicios)=> Ejercicios.dificultad.includes(musculosinput));

//   function busqueda (e) {
//      e.preventDefault();
//     if(musculosinput === "1" || musculosinput === "2" || musculosinput === "3" || musculosinput === "4" || musculosinput === "5" || musculosinput === "6" || musculosinput === "7"){
//         let ejerciciosNombreMsg = "";
//         filtroMusc.forEach((el) => {
//             ejerciciosNombreMsg += `${ el.nombre }\n`
//         })
//         alert(ejerciciosNombreMsg);
//     } else if (musculosinput === "baja" || musculosinput === "media" || musculosinput === "alta") {
//         let ejerciciosDifMsg = "";
//         filtroDif.forEach ((el) => {
//             ejerciciosDifMsg += `${el.nombre}\n`
//         })
//         alert(ejerciciosDifMsg);
//     }
//   }


//   musculosinput.addEventListener("submit", busqueda);

  //FORMULARIO
  let inputFormulario = document.getElementById("formulario");
  
  inputFormulario.addEventListener("submit", validarForm);

  function validarForm(e){
    e.preventDefault();

    alert ("Formulario enviado! Muchas gracias");

    let resetBtn = document.getElementById("btnRes");

    resetBtn.click();
  }

