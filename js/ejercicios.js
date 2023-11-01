class Ejercicio{
    constructor (nombre, musculo, dificultad){
        this.nombre = nombre;
        this.musculo = musculo;
        this.dificultad = dificultad;
    }
  }


  const Ejercicios = [{nombre: "remo Horizontal", musculo: "espalda", dificultad:"baja"},
                    {nombre: "serrucho con mancuerna", musculo: "espalda", dificultad:"media"},
                    {nombre: "press de  Banca", musculo: "pecho", dificultad:"media"},
                    {nombre: "cruces de Poleas", musculo: "pecho", dificultad:"alta"},
                    {nombre: "sentadilla libre", musculo: "cuadricep",dificultad:"media"},
                    {nombre: "estocadas con mancuernas",musculo:  "cuadriceps", dificultad:"media"},
                    {nombre: "peso Muerto", musculo: "femorales", dificultad:"media"},
                    {nombre: "hipThrust", musculo: "gluteos", dificultad:"media"},
                    {nombre: "press Militar", musculo: "hombro", dificultad:"media"},
                    {nombre: "vuelo lateral", musculo: "hombro" , dificultad:"baja"},
                    {nombre: "curl bicep con barra", musculo: "biceps", dificultad:"baja"},
                    {nombre: "curl concentrado", musculo: "biceps", dificultad:"baja"},
                    {nombre: "extension con soga", musculo: "triceps", dificultad:"media"},
                    {nombre: "skullcrasher", musculo: "triceps", dificultad:"alta"}];


  document.getElementById("busqueda");
  let musculosinput = document.getElementById("busquedaInput");
  let boton = document.getElementsByClassName("busquedaBoton");
  let filtroMusc = Ejercicios.filter((Ejercicios)=> Ejercicios.musculo.includes(musculosinput));
  let filtroDif = Ejercicios.filter((Ejercicios)=> Ejercicios.dificultad.includes(musculosinput));
  
  boton.onclick = busqueda ;
  
  //NO EJECUTA LA FUNCION DE BUSQUEDA, POR QUE¿?
  function busqueda (e) {
    
    e.preventDefault();

    if(musculosinput == "espalda" || musculosinput == "pecho" || musculosinput == "cuadricep" || musculosinput == "femorales" || musculosinput == "gluteos" || musculosinput == "hombro" || musculosinput == "biceps" || musculosinput == "triceps"){
        let ejerciciosNombreMsg = "";
        filtroMusc.forEach((el) => {
            ejerciciosNombreMsg += `${ el.nombre }\n`
        })
        alert(ejerciciosNombreMsg);
    } else if (musculosinput === "baja" || musculosinput === "media" || musculosinput === "alta") {
        let ejerciciosDifMsg = "";
        filtroDif.forEach ((el) => {
            ejerciciosDifMsg += `${el.nombre}\n`
        })
        alert(ejerciciosDifMsg);
    }
  }


 