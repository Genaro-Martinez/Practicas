function validarSudoku(sudoku) {
    // Función para verificar si un arreglo no contiene elementos repetidos
    const noHayRepetidos = arr => new Set(arr).size === arr.length;

    // Validar filas
    for (let fila of sudoku) {
        if (!noHayRepetidos(fila)) {
            return false;
        }
    }

    // Validar columnas
    for (let col = 0; col < 9; col++) {
        let valores = [];
        for (let fila of sudoku) {
            valores.push(fila[col]);
        }
        if (!noHayRepetidos(valores)) {
            return false;
        }
    }

    // Validar regiones 3x3
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let valores = [];
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    valores.push(sudoku[i + x][j + y]);
                }
            }
            if (!noHayRepetidos(valores)) {
                return false;
            }
        }
    }

    return true;
}

// Ejemplo de sudoku resuelto (representado como una matriz)
let sudokuResuelto = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

if (validarSudoku(sudokuResuelto)) {
    console.log("El sudoku resuelto es válido.");
} else {
    console.log("El sudoku resuelto no es válido.");
}
