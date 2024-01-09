
function ejercicio5() {

	var tama = parseInt(prompt("Ingresa el tamanio del arreglo del cuadro magico (nxn)"));
	var cuadrado = new Array(tama), numeros = new Array(Math.pow(tama, 2));
	b = 0;
	for (var i = 0; i < tama; i++) {
		cuadrado[i] = new Array(tama);
		for (var j = 0; j < tama; j++) {
			numeros[b] = parseInt(prompt("Ingresa los numeros. Posicion ["
				+ (i + 1) + "] [" + (j + 1) + "] :"));

			cuadrado[i][j] = numeros[b];
			b++;
		}
	}
	console.log(cuadrado);



	function comprobarSuma() {
		let sumaBase = 0;
		// suma de prueba
		for (let i = 0; i < cuadrado.length; i++) {
			sumaBase += cuadrado[0][i];

		}

		var sumaFilas = 0;
		var sumaColumnas = 0;
		var sumaDiagonales = 0;

		for (i = 0; i < tama; i++) {
			sumaDiagonales += cuadrado[i][i];
			sumaColumnas = 0;
			sumaFilas = 0;
			for (j = 0; j < tama; j++) {
				sumaFilas += cuadrado[i][j];
				sumaColumnas += cuadrado[j][i];
			}
			if (sumaBase != sumaFilas) {
				console.log();
				return console.log("No es un cuadrado magico");
			}
			if (sumaBase != sumaColumnas) {
				return console.log("No es un cuadrado magico");
			}

		}
		if (sumaBase != sumaDiagonales) {
			return console.log("No es un cuadrado magico");
		}
		return console.log("SI es un cuadrado magico");
	}

	//numeros consecutivos
	comprobarSuma();
	numeros.sort(function (a, b) { return a - b });
	let consecutivos = true;
	for (b = 0; b < numeros.length - 1; b++) {
		if (numeros[b] + 1 != numeros[b + 1]) {
			consecutivos = false;
			break;
		}
	}

	if (consecutivos) {
		console.log("Tienen numeros consecutivos:");
	} else {
		console.log("No tienen numeros consecutivos:");
	}


}