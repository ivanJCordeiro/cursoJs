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

  
const formBusqueda = document.getElementById("busqueda");
const musculosinput = document.getElementById("busquedaInput");
const boton = document.getElementsByClassName("busquedaBoton");
const filtroMusc = Ejercicios.filter((Ejercicios)=> Ejercicios.musculo.includes(musculosinput));
const filtroDif = Ejercicios.filter((Ejercicios)=> Ejercicios.dificultad.includes(musculosinput));

formBusqueda.onclick = busqueda;

//NO EJECUTA LOS ALERTS, POR QUE ¿?
function busqueda (e) {
    e.preventDefault();

    if(musculosinput === "espalda" || musculosinput === "pecho" || musculosinput === "cuadricep" || musculosinput === "femorales" || musculosinput === "gluteos" || musculosinput === "hombro" || musculosinput === "biceps" || musculosinput === "triceps"){
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
};


