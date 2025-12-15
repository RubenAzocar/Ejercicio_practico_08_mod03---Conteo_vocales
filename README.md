# 🔤 Contador de Vocales en Palabras

## 📋 Descripción

Aplicación web interactiva que solicita al usuario un conjunto de palabras y calcula el número total de vocales presentes en todas ellas. Este ejercicio práctico forma parte del **Módulo 3** del Curso Fullstack de Talento Digital.

## 🎯 Objetivo del Ejercicio

Desarrollar un programa en JavaScript que:
- Procese entrada de datos del usuario mediante `prompt()`
- Almacene información en arrays
- Utilice funciones expresivas para procesamiento de cadenas
- Aplique métodos de manipulación de strings y arrays
- Muestre resultados de múltiples formas

## ✨ Características

- ✅ Validación de entrada de datos
- ✅ Función expresiva para conteo de vocales
- ✅ Procesamiento de mayúsculas y minúsculas
- ✅ Uso de métodos modernos de JavaScript (`split()`, `join()`, `includes()`, `toLowerCase()`)
- ✅ Salida múltiple de resultados (consola, alerta, HTML)

## 🚀 Cómo usar

1. **Abrir la aplicación**
   - Abre el archivo `index.html` en tu navegador web

2. **Ingresar cantidad de palabras**
   - Se mostrará un cuadro de diálogo
   - Ingresa un número (ejemplo: `3`)

3. **Ingresar las palabras**
   - Escribe las palabras separadas por espacios
   - Ejemplo: `casa perro gato`

4. **Ver resultados**
   - El resultado aparecerá en la página web
   - También se mostrará una alerta con el total
   - Puedes ver detalles adicionales en la consola del navegador (F12)

## 📂 Estructura del Proyecto

```
Ejercicio_practico_08_mod03 - Conteo_vocales/
│
├── index.html                      # Página principal HTML
├── app.js                          # Código JavaScript principal
├── app_comentado_educativo.js      # Versión con comentarios detallados
└── README.md                       # Este archivo
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura de la página
- **JavaScript (ES6+)**: Lógica de programación
  - Funciones expresivas
  - Bucles `for...of`
  - Métodos de arrays y strings
  - Manipulación del DOM

## 📚 Conceptos Aplicados

### 1. Entrada de Datos
```javascript
prompt()      // Solicitar datos al usuario
parseInt()    // Convertir string a número
```

### 2. Manipulación de Arrays
```javascript
.split(" ")   // Dividir string en array
.join("")     // Unir array en string
.length       // Obtener cantidad de elementos
```

### 3. Funciones Expresivas
```javascript
const funcionNombre = function(parametro) {
    // código
    return resultado;
};
```

### 4. Métodos de Strings
```javascript
.toLowerCase()    // Convertir a minúsculas
.includes()       // Verificar si contiene elemento
```

### 5. Bucles de Iteración
```javascript
for (let elemento of array) {
    // procesar cada elemento
}
```

## 🎓 Aprendizajes Clave

- **Validación de datos**: Verificar que la entrada del usuario sea correcta
- **Funciones reutilizables**: Crear funciones que pueden usarse múltiples veces
- **Manipulación de cadenas**: Procesar texto de forma eficiente
- **Arrays**: Almacenar y procesar colecciones de datos
- **Salida múltiple**: Mostrar información de diferentes formas

## 💡 Ejemplo de Uso

**Entrada:**
- Cantidad: `3`
- Palabras: `manzana sol estrella`

**Proceso:**
1. Se crea el array: `["manzana", "sol", "estrella"]`
2. Se valida que hay 3 palabras ✅
3. Se unen las palabras: `"manzanasolestrella"`
4. Se cuentan las vocales: `a, a, a, o, e, e, a = 7 vocales`

**Salida:**
```
Total de vocales: 7
```

## 🔍 Cómo Funciona

1. **Solicitud de datos**: El programa pide al usuario la cantidad de palabras y luego las palabras mismas
2. **Validación**: Verifica que la cantidad ingresada coincida con el número de palabras
3. **Función contarVocales**: 
   - Convierte el texto a minúsculas
   - Define un array de vocales `['a', 'e', 'i', 'o', 'u']`
   - Recorre cada carácter verificando si es una vocal
   - Cuenta y retorna el total
4. **Unificación**: Combina todas las palabras en un solo string
5. **Conteo total**: Aplica la función sobre el texto completo
6. **Resultados**: Muestra el resultado en consola, alerta y HTML

## 📖 Archivos Educativos

- **`app.js`**: Código limpio y funcional para producción
- **`app_comentado_educativo.js`**: Versión con comentarios línea por línea explicando cada elemento del código en detalle

## 👨‍💻 Autor

**Rubén**  
Curso Fullstack - Talento Digital  
Módulo 3 - Ejercicio Práctico 08

## 📝 Notas Adicionales

- Las vocales consideradas son: a, e, i, o, u (minúsculas y mayúsculas)
- No se cuentan vocales con tilde (á, é, í, ó, ú)
- Los espacios y caracteres especiales son ignorados
- El programa es sensible a la validación de entrada

## 🎯 Criterios de Evaluación Cumplidos

✅ Preparación del entorno (HTML + JS enlazado)  
✅ Ingreso de datos con `prompt()`  
✅ Almacenamiento en arrays  
✅ Función expresiva `contarVocales()`  
✅ Uso de `toLowerCase()`  
✅ Uso de `includes()`  
✅ Unificación con `join()`  
✅ Salida con `console.log()`  
✅ Salida con `window.alert()`  
✅ Salida con `innerHTML`  

---

**¡Ejercicio completado con éxito!** 🎉
