/*resolver este ejercicio de prueba tecnica en javascript, y dice asi: nos dan una cadena de texto y tenemos que sacar el numero de veces que se repite cada palabra de este texto, texto puede tener punto , palabras en minusculas y mayusculas , encontrarlo si tener que hacer un algoritmo costoso.
*/ 



const text = "Hola, hola! Este es un texto de prueba. Este texto tiene palabras repetidas, palabras como hola y texto.";

function normalize(word) {
  return word.toLowerCase().replace(/[.,!?"'();:]/g, ""); // Normalizar con más signos de puntuación
}

function wordsRepetitions(text) {
  const contador = {}; // Contador de palabras
  const separateWords = text.split(/\s+/); // Separar texto en palabras usando expresión regular
  
  for (let word of separateWords) {  
    const normalizedWord = normalize(word); // Normaliza la palabra una vez
    if (normalizedWord in contador) { 
      ++contador[normalizedWord];
    } else {
      contador[normalizedWord] = 1; // Si no existe, la inicializamos en 1
    }
  }
  
  console.log(contador);
}

wordsRepetitions(text);

/*Explicación del Código Mejorado
Separación de Palabras:

text.split(/\s+/) usa una expresión regular para dividir el texto en palabras, manejando múltiples espacios.
Normalización de Palabras:

La función normalize se ha ampliado para eliminar una gama más amplia de signos de puntuación.
Eficiencia:

Normalizar la palabra una vez por iteración mejora la eficiencia.
Resultado Esperado
Con el código mejorado, el objeto contador imprimirá el número de veces que cada palabra se repite en el texto, manejando correctamente los signos de puntuación y separadores de palabras.*/