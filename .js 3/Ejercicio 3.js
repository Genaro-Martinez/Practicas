//Ejercicio 3
function ejercicio3(){
let a = new Array(3), b = new Array(3);

for(var i = 0; i < 3; i++){
    let A = parseInt(prompt("Dame los datos de A"));
    a[i] = A;    
}
console.log("a:",a);

for(i = 0; i < 3; i++){
    let B = parseInt(prompt("Dame los datos de B"));
    b[i] = B;
}
console.log("b:",b); 

let producto = 0;
for(i = 0; i < 3; i++){
    producto += (a[i]*b[i]);
}
console.log("producto interno entre a y b:",producto);

if (producto != 0) {
    console.log("a y b son ortagonales");
}else{
    console.log("a y b no son ortagonales");
}
}