//FORMULARIO
const formBusqueda = document.getElementById("busqueda");

//INVOCACION DEL BOTON Y FUNCION DE FILTRADO
document.getElementById("busquedaBoton").addEventListener("click", (e) => {
    e.preventDefault();
    //TRAIGO EL INPUT, TOMO EL VALOR Y USO LOWERCASE PARA EVITAR ERRORES DE TIPEO
    let musculosInput = document.getElementById("busquedaInput").value.toLowerCase();
    //LLAMO EL ARRAY DE OBJETOS JSON
    fetch(`../json/data.json`)
        .then((response) => response.json())
        .then((data) => {
            let ejercicios = data.ejercicios;

            let filtroMusc = ejercicios.filter((el) => el.musculo && el.musculo.toLowerCase().includes(musculosInput));
            let filtroDif = ejercicios.filter((el) => el.dificultad && el.dificultad.toLowerCase().includes(musculosInput));

            // CONCATENO RESULTADOS DE AMBOS FILTROS
            let resultados = filtroMusc.concat(filtroDif);

            // FILTRO DUPLICADOS POR SI HAY COINCIDENCIAS
            let resultadosUnicos = Array.from(new Set(resultados.map((el) => el.nombre)));

            // IMPRIMO RESULTADOS EN SWAL
            if (resultadosUnicos.length > 0) {
                let mensaje = resultadosUnicos.join("\n");
                Swal.fire({
                    title: "Ejercicios: ",
                    text: mensaje,
                    icon: "info"
                  });
            } else {
                Swal.fire({
                    icon: "error",
                    text: "No se encontraron coincidencias",
                  });
            }
        });
});

