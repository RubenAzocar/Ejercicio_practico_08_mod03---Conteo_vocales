// ============================================================================
// CONTADOR DE VOCALES EN PALABRAS
// Programa que solicita palabras al usuario y cuenta el total de vocales
// Autor: Rubén
// ============================================================================

let cantidadPalabras = prompt("Ingresa la cantidad de palabras que deseas analizar: ");
cantidadPalabras = parseInt(cantidadPalabras);

let listadoPalabras = prompt("Ingresa las palabras separadas por espacio: ");
let arrayPalabras = listadoPalabras.split(" ");

if (arrayPalabras.length !== cantidadPalabras) {
    alert("⚠️ Ingresaste " + arrayPalabras.length + " palabra(s), pero dijiste que ingresarías " + cantidadPalabras);
}

// ============================================================================
// FUNCIÓN PARA CONTAR VOCALES EN UNA PALABRA
// ============================================================================

const contarVocales = function (palabra) {
    let palabraMinusculas = palabra.toLowerCase();
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let caracter of palabraMinusculas) {
        if (vocales.includes(caracter)) {
            contador++;
        }
    }

    return contador;
};

// ============================================================================
// UNIFICACIÓN Y CONTEO TOTAL
// ============================================================================

let todasLasPalabras = arrayPalabras.join("");
let totalVocales = contarVocales(todasLasPalabras);

// ============================================================================
// SALIDA DE RESULTADOS
// ============================================================================

console.log("📊 Total de vocales encontradas: " + totalVocales);
window.alert("✅ El total de vocales en las palabras ingresadas es: " + totalVocales);
document.getElementById("resultado").innerHTML = "<h2>Resultado:</h2><p>Total de vocales: <strong>" + totalVocales + "</strong></p>";
