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
    texto = prompt("Busacas informacion, ejemplos, entrenamiento o consejos? (para cerrar la ventana escriba: salir): ");
}
