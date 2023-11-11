//FORMULARIO
const formBusqueda = document.getElementById("busqueda");

//INVOCACION DE BOTON SUBMIT Y FUNCION DE FILTRADO
document.getElementById("busquedaBoton").addEventListener("click" , async (e) => {
    e.preventDefault();

    //INPUT DONDE INGRESAMOS QUÉ BUSCAR
    const musculosinput = document.getElementById("busquedaInput");
    //LLAMO AL FETCH DEL ARCHIVO .JSON
    let response = await fetch(`../json/data.json`);
    //CONVIERTO LA RESPUESTA A .JSON()
    let data = await response.json();
    //FILTRADO FILTER IS NOT A FUNCTION ¿?
    let filtroMusc = data.filter((el)=> el.musculo.includes(musculosinput.value));
    let filtroDif = data.filter((el)=> el.dificultad.includes(musculosinput.value));

    //CONDICIONAL PARA CADA CASO DE RESPUESTA
    if(
        musculosinput.value === "espalda" ||
        musculosinput.value === "pecho" || 
        musculosinput.value === "cuadricep" ||
        musculosinput.value === "femorales" ||
        musculosinput.value === "gluteos" ||
        musculosinput.value === "hombro" ||
        musculosinput.value === "biceps" ||
        musculosinput.value === "triceps"
    ){

        let ejerciciosNombreMsg = "";
        filtroMusc.forEach((el) => {
            ejerciciosNombreMsg += `${ el.nombre }\n`
        })
        console.log(ejerciciosNombreMsg);
    } else if (
                musculosinput === "baja" ||
                musculosinput === "media" ||
                musculosinput === "alta"
            ){
            let ejerciciosDifMsg = "";
            filtroDif.forEach ((el) => {
                ejerciciosDifMsg += `${el.nombre}\n`
            })
            console.log(ejerciciosDifMsg);
        }
});

