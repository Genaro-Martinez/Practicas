// Ejercicio 2
function ejercicio2() {
    let espacio = 0;
    espacio = parseInt(prompt("datos a ingresar:"))
    var datos = new Array(espacio);
    for (var i = 0; i < espacio; i++) {
        let dato = parseFloat(prompt("Calificaión:"));
        if (dato >= 6) {
            datos[i] = Math.round(dato);
        } else {
            datos[i] = dato;
        }
        console.log("dato:", datos[i]);
    }
    var promedio = 0;
    for (i = 0; i < espacio; i++) {
        if (datos[i] >= 6) {
            promedio++;
        }
    }
    console.log(promedio, "datos son mayor al prmedio");
}