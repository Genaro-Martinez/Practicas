
const cantidadNumeros = prompt("Ingresa cuantos numeros quieres leer:");

const numeros = [];

for (let i = 0; i < cantidadNumeros; i++) {
    const numero = prompt(`Ingresa el numero ${i + 1}:`);
    numeros.push(Number(numero));
}
const valorX = prompt("Ingresa el valor x con el cual comparar:");

const mayoresAX = numeros.filter(num => num > valorX);

console.log(`De tu lista, ${mayoresAX.length} valores son mayores a ${valorX}`);
