//CALCULADORA

document.getElementById("calculadoraRM");

// //INVOCO BOTON DE TOTAL

let salida = document.getElementById("salidaBtn");

salida.onclick = calculadora;

function calculadora (e) {
    e.preventDefault();
    const rm = parseFloat(document.getElementById("rm").value);
    const reps = parseFloat(document.getElementById("reps").value);
    let resultado ;

    if ( reps <= 2){
        resultado = rm * 1;
    }else if ((reps > 2) && (reps < 6)){
        resultado = rm * 0.95;
    }else if ((reps >= 6) && (reps <= 8)){
        resultado = rm * 0.85;
    }else if ((reps > 8) && (reps <= 12)){
        resultado = rm * 0.75;
    }else{
        resultado = rm * 0.70;
    }
   
    document.getElementById("resultado").value = "recomendacion: " +  resultado + "Kg";
};

