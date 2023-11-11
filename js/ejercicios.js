//FORMULARIO
const formBusqueda = document.getElementById("busqueda");

//INVOCACION DE BOTON SUBMIT Y FUNCION DE FILTRADO
document.getElementById("busquedaBoton").addEventListener("click" , async (e) => {
    e.preventDefault();

    //INPUT DONDE INGRESAMOS QUÉ BUSCAR
    const musculosinput = document.getElementById("busquedaInput");
    //LLAMO AL FETCH DEL ARCHIVO .JSON NO ME ENCUENTRA EL ARCHIVO ¿?
    let response = await fetch(`../json/data.json`);
    //CONVIERTO LA RESPUESTA A .JSON()
    let data = await response.json();
    //FILTRADO
    let filtroMusc = data.filter((data)=> data.musculo.includes(musculosinput.value));
    let filtroDif = data.filter((data)=> data.dificultad.includes(musculosinput.value));

    //CONDICIONAL PARA CADA CASO DE RESPUESTA
    if(musculosinput === "espalda" || musculosinput === "pecho" || musculosinput === "cuadricep" || musculosinput === "femorales" || musculosinput === "gluteos" || musculosinput === "hombro" || musculosinput === "biceps" || musculosinput === "triceps"){
        let ejerciciosNombreMsg = "";
        filtroMusc.forEach((el) => {
            ejerciciosNombreMsg += `${ el.nombre }\n`
        })
        console.log(ejerciciosNombreMsg);
    } else if (musculosinput === "baja" || musculosinput === "media" || musculosinput === "alta") {
        let ejerciciosDifMsg = "";
        filtroDif.forEach ((el) => {
            ejerciciosDifMsg += `${el.nombre}\n`
        })
        console.log(ejerciciosDifMsg);
    }
});

