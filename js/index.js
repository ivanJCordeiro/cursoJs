function saludo() {
    alert("Bienvenidos a RutiNow, a continuacion les dejaremos una breve guia: ");
}

function despedida(){
    alert("Gracias por visitar nuestro sitio");
}

saludo();

let texto= prompt("buscas informacion, ejemplos, entrenamiento o consejos?: ");

while(texto !="salir"){ 
    if (texto === "informacion"){
        alert("vaya a la pestaña Inicio")
    } else if ( texto === "ejemplos"){
        alert("Vaya a la pestaña Ejercicios")
    } else if (texto === "entrenamiento"){
        alert("Vaya a la pestaña Rutinas")
    } else if (texto === "consejos"){
        alert("Vaya a la pestaña alimentacion")
    } else {
        alert("Ponganse en contacto con nosotros en la pestaña Contacto")
    };
    texto = prompt("Buscas informacion, ejemplos, entrenamiento o consejos? (para cerrar la ventana escriba: salir): ");
}

let repeticiones = Number(prompt("Ingrese numero de repeticiones: "));
let kilos = Number(prompt("Ingrese carga MAXIMA alcanzada: "));

const calculadora =(rep, kg) =>{
    if ( rep <= 2){
        return kg * 1;
    }else if ((rep > 2) && (rep < 6)){
        return kg * 0.95;
    }else if ((rep >= 6) && (rep <= 8)){
        return kg * 0.85;
    }else if ((rep > 8) && (rep <= 12)){
        return kg * 0.75;
    }else{
        return kg * 0.70;
    }
}

console.log(calculadora(repeticiones, kilos));

despedida();
