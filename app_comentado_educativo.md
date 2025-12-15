// ============================================================================
// CONTADOR DE VOCALES EN PALABRAS - VERSIÓN EDUCATIVA CON COMENTARIOS DETALLADOS
// ============================================================================
// Este programa solicita al usuario que ingrese un conjunto de palabras
// y luego calcula cuántas vocales hay en total entre todas esas palabras
// ============================================================================

// ============================================================================
// LÍNEA 10: Solicitar la cantidad de palabras
// ============================================================================
let cantidadPalabras = prompt("Ingresa la cantidad de palabras que deseas analizar: ");
// EXPLICACIÓN LÍNEA 10:
// - let: palabra reservada para declarar una variable que puede cambiar su valor
// - cantidadPalabras: nombre descriptivo de la variable (usa camelCase)
// - prompt(): método del navegador que muestra un cuadro de diálogo para que el usuario escriba algo
// - El texto entre comillas es el mensaje que verá el usuario
// - El valor que devuelve prompt() SIEMPRE es un STRING (texto), incluso si el usuario escribe números
// - Por eso en la siguiente línea debemos convertirlo a número

// ============================================================================
// LÍNEA 20: Convertir el texto a número entero
// ============================================================================
cantidadPalabras = parseInt(cantidadPalabras);
// EXPLICACIÓN LÍNEA 20:
// - parseInt(): función de JavaScript que convierte un string a número entero
// - Ejemplo: parseInt("5") devuelve el número 5
// - Si el usuario escribe "3", se convierte en el número 3
// - Necesitamos un número porque luego haremos comparaciones matemáticas
// - ¿Por qué usar "let" y no "const"? Porque aquí estamos REASIGNANDO la variable
// - La variable cantidadPalabras primero tenía un string, ahora tiene un número

// ============================================================================
// LÍNEA 30: Solicitar las palabras al usuario
// ============================================================================
let listadoPalabras = prompt("Ingresa las palabras separadas por espacio: ");
// EXPLICACIÓN LÍNEA 30:
// - Otra vez usamos prompt() para pedir entrada al usuario
// - El usuario debe escribir las palabras separadas por espacios
// - Ejemplo de entrada válida: "casa perro gato"
// - El resultado se guarda en la variable listadoPalabras
// - Esta variable contiene UN SOLO STRING con todas las palabras juntas

// ============================================================================
// LÍNEA 40: Convertir el string de palabras en un array (lista)
// ============================================================================
let arrayPalabras = listadoPalabras.split(" ");
// EXPLICACIÓN LÍNEA 40:
// - .split(" "): es un MÉTODO de los strings que divide un texto en partes
// - El parámetro " " (espacio) indica DÓNDE dividir
// - Ejemplo: "casa perro gato".split(" ") → ["casa", "perro", "gato"]
// - El resultado es un ARRAY (lista) donde cada elemento es una palabra
// - ¿Por qué usar array? Porque es más fácil trabajar con listas de elementos
// - Cada palabra ahora es un elemento separado que podemos contar y procesar

// ============================================================================
// LÍNEAS 50-52: Validación de entrada
// ============================================================================
if (arrayPalabras.length !== cantidadPalabras) {
    alert("⚠️ Ingresaste " + arrayPalabras.length + " palabra(s), pero dijiste que ingresarías " + cantidadPalabras);
}
// EXPLICACIÓN LÍNEAS 50-52:
// - if: estructura condicional que ejecuta código solo si la condición es verdadera
// - arrayPalabras.length: propiedad que devuelve la CANTIDAD de elementos en el array
//   Ejemplo: ["casa", "perro"].length devuelve 2
// - !==: operador de comparación que significa "NO es igual a"
// - cantidadPalabras: el número que el usuario dijo que ingresaría
// - Si las cantidades no coinciden, se muestra una alerta informativa
// - alert(): método del navegador que muestra un mensaje emergente
// - El operador + concatena (une) strings para formar el mensaje completo
// NOTA EDUCATIVA: Esta validación es opcional, pero es una buena práctica

// ============================================================================
// LÍNEAS 62-79: FUNCIÓN PARA CONTAR VOCALES
// ============================================================================
// Esta función recibe una palabra y devuelve cuántas vocales tiene

const contarVocales = function (palabra) {
    // EXPLICACIÓN LÍNEA 62:
    // - const: usamos const porque esta función NO se reasignará (no cambiará)
    // - contarVocales: nombre descriptivo de la función
    // - function(palabra): declaración de función expresiva que recibe un parámetro
    // - palabra: es el PARÁMETRO, una variable que contendrá el valor que le pasemos
    // - Ejemplo de uso: contarVocales("hola") → palabra tomará el valor "hola"
    // - { : abre el BLOQUE de código de la función

    // ========================================================================
    // LÍNEA 72: Convertir a minúsculas
    // ========================================================================
    let palabraMinusculas = palabra.toLowerCase();
    // EXPLICACIÓN LÍNEA 72:
    // - .toLowerCase(): MÉTODO de strings que convierte TODO a minúsculas
    // - Ejemplo: "HOLA".toLowerCase() devuelve "hola"
    // - ¿Por qué? Para que 'A' y 'a' se traten igual al buscar vocales
    // - Sin esto, 'A' (mayúscula) NO coincidiría con 'a' en nuestro array de vocales
    // - Guardamos el resultado en una nueva variable para no perder la palabra original

    // ========================================================================
    // LÍNEA 80: Definir array de vocales (con y sin acento)
    // ========================================================================
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    // EXPLICACIÓN LÍNEA 80:
    // - const: usamos const porque este array NO cambiará
    // - vocales: nombre descriptivo del array
    // - ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']: ARRAY LITERAL con las vocales
    // - Los corchetes [] indican que es un array
    // - Incluye las 5 vocales SIN acento: 'a', 'e', 'i', 'o', 'u'
    // - Incluye las 5 vocales CON acento (tilde): 'á', 'é', 'í', 'ó', 'ú'
    // - ¿Por qué incluir vocales acentuadas? Porque en español es muy común usar tildes
    // - Ejemplos: "canción", "José", "útil", "médico", "mamá"
    // - Sin las vocales acentuadas, NO se contarían correctamente
    // - Cada vocal va entre comillas simples porque son strings de un solo carácter
    // - Las comas separan los elementos del array
    // - Este array servirá como REFERENCIA para comparar cada carácter
    // - IMPORTANTE: .toLowerCase() también convierte Á→á, É→é, Í→í, Ó→ó, Ú→ú
    // - Por eso solo necesitamos las minúsculas en el array

    // ========================================================================
    // LÍNEA 88: Inicializar contador
    // ========================================================================
    let contador = 0;
    // EXPLICACIÓN LÍNEA 88:
    // - let: usamos let porque este valor SÍ cambiará (se incrementará)
    // - contador: variable que llevará la cuenta de vocales encontradas
    // - = 0: inicializamos en cero porque aún no hemos encontrado ninguna vocal
    // - Cada vez que encontremos una vocal, haremos: contador++

    // ========================================================================
    // LÍNEAS 96-102: Bucle for...of para recorrer caracteres
    // ========================================================================
    for (let caracter of palabraMinusculas) {
        // EXPLICACIÓN LÍNEA 96:
        // - for: palabra reservada para crear un bucle (ciclo repetitivo)
        // - let caracter: declaramos una variable temporal que existirá solo dentro del bucle
        // - of palabraMinusculas: indica que vamos a recorrer cada carácter de ese string
        // - Este bucle se ejecutará TANTAS VECES como caracteres tenga la palabra
        // - En cada iteración, 'caracter' tendrá un valor diferente:
        //   Si palabraMinusculas = "hola"
        //   1ª iteración: caracter = 'h'
        //   2ª iteración: caracter = 'o'
        //   3ª iteración: caracter = 'l'
        //   4ª iteración: caracter = 'a'

        // ====================================================================
        // LÍNEA 110: Verificar si el carácter es una vocal
        // ====================================================================
        if (vocales.includes(caracter)) {
            // EXPLICACIÓN LÍNEA 110:
            // - if: condicional que ejecuta código solo si la condición es verdadera
            // - vocales.includes(caracter): MÉTODO que verifica si caracter está en el array
            // - .includes(): devuelve true si encuentra el elemento, false si no
            // - Ejemplo: ['a','e','i'].includes('a') → true
            // - Ejemplo: ['a','e','i'].includes('b') → false
            // - Si el carácter ES una vocal, entramos al if y ejecutamos el código dentro

            // ================================================================
            // LÍNEA 119: Incrementar el contador
            // ================================================================
            contador++;
            // EXPLICACIÓN LÍNEA 119:
            // - contador++: operador de incremento que suma 1 al valor actual
            // - Es equivalente a escribir: contador = contador + 1
            // - Si contador era 0, ahora será 1
            // - Si contador era 5, ahora será 6
            // - Esto cuenta cada vocal que encontramos
        }
    }

    // ========================================================================
    // LÍNEA 132: Retornar el resultado
    // ========================================================================
    return contador;
    // EXPLICACIÓN LÍNEA 132:
    // - return: palabra reservada que DEVUELVE un valor desde la función
    // - contador: el valor que estamos devolviendo (el total de vocales)
    // - Cuando llamemos contarVocales("hola"), la función devolverá 2
    // - Sin return, la función no devolvería nada (sería undefined)
    // - return también TERMINA la ejecución de la función
};
// La llave } cierra el bloque de la función

// ============================================================================
// LÍNEAS 145-147: UNIFICAR TODAS LAS PALABRAS
// ============================================================================
let todasLasPalabras = arrayPalabras.join("");
// EXPLICACIÓN LÍNEA 145:
// - .join(""): MÉTODO de arrays que UNE todos los elementos en un solo string
// - El parámetro "" (string vacío) indica QUÉ poner entre los elementos
// - Ejemplo: ["casa", "perro"].join("") → "casaperro"
// - Ejemplo: ["casa", "perro"].join(" ") → "casa perro"
// - Ejemplo: ["casa", "perro"].join("-") → "casa-perro"
// - Al usar "", las palabras se juntan SIN separación
// - ¿Por qué? Para contar todas las vocales como un texto continuo
// - Resultado: si arrayPalabras = ["casa", "sol"], todasLasPalabras = "casasol"

// ============================================================================
// LÍNEA 160: APLICAR LA FUNCIÓN contarVocales
// ============================================================================
let totalVocales = contarVocales(todasLasPalabras);
// EXPLICACIÓN LÍNEA 160:
// - contarVocales(todasLasPalabras): LLAMADA a la función que creamos antes
// - Le pasamos como argumento la cadena completa de todas las palabras
// - La función procesará "casasol" y contará: a, a, o = 3 vocales
// - El resultado que devuelve return se guarda en totalVocales
// - Ejemplo: si todasLasPalabras = "hola", totalVocales = 2
// - Esta variable ahora contiene el NÚMERO TOTAL de vocales encontradas

// ============================================================================
// LÍNEAS 173-181: SALIDA DE RESULTADOS (3 formas diferentes)
// ============================================================================

// ============================================================================
// LÍNEA 179: Mostrar en la consola del navegador
// ============================================================================
console.log("📊 Total de vocales encontradas: " + totalVocales);
// EXPLICACIÓN LÍNEA 179:
// - console.log(): método que imprime información en la CONSOLA del navegador
// - La consola se abre con F12 en Chrome/Edge, o clic derecho → Inspeccionar → Console
// - Es útil para DEPURAR (debug) y ver valores mientras desarrollamos
// - El operador + concatena el texto con el número
// - Si totalVocales = 5, se imprimirá: "📊 Total de vocales encontradas: 5"
// - Los emojis 📊 son opcionales, solo hacen el mensaje más visual

// ============================================================================
// LÍNEA 191: Mostrar en una alerta emergente
// ============================================================================
window.alert("✅ El total de vocales en las palabras ingresadas es: " + totalVocales);
// EXPLICACIÓN LÍNEA 191:
// - window.alert(): método del objeto window que muestra un cuadro de diálogo
// - Es lo mismo que escribir solo alert(), pero más explícito
// - Detiene la ejecución del código hasta que el usuario cierre la alerta
// - Muestra un mensaje emergente en el CENTRO de la ventana
// - El usuario debe hacer clic en "Aceptar" para continuar
// - Es una forma VISUAL de mostrar el resultado al usuario

// ============================================================================
// LÍNEA 203: Mostrar en la página HTML
// ============================================================================
document.getElementById("resultado").innerHTML = "<h2>Resultado:</h2><p>Total de vocales: <strong>" + totalVocales + "</strong></p>";
// EXPLICACIÓN LÍNEA 203:
// - document: objeto global que representa toda la página HTML
// - .getElementById("resultado"): método que BUSCA un elemento HTML por su ID
// - En el HTML debe existir un elemento con id="resultado", por ejemplo: <div id="resultado"></div>
// - .innerHTML: propiedad que permite CAMBIAR el contenido HTML de un elemento
// - El signo = ASIGNA el nuevo contenido
// - "<h2>Resultado:</h2>...": string que contiene CÓDIGO HTML
// - <h2>: etiqueta HTML para un encabezado de nivel 2
// - <p>: etiqueta HTML para un párrafo
// - <strong>: etiqueta HTML que pone el texto en NEGRITA
// - El operador + concatena el HTML con el valor de totalVocales
// - Resultado final en la página: se verá un encabezado "Resultado:" y abajo el número en negrita
// - Esta es la forma PROFESIONAL de mostrar resultados en aplicaciones web

// ============================================================================
// FIN DEL PROGRAMA
// ============================================================================
// El programa ha terminado de ejecutarse
// El usuario ha visto el resultado en 3 lugares diferentes:
// 1. En la consola del navegador (para desarrolladores)
// 2. En una alerta emergente (feedback inmediato)
// 3. En la página HTML (integración con la interfaz)
// ============================================================================
