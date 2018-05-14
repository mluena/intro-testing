function paddingLeft(initialString,stringLength,character){
    
    if (stringLength <= initialString.length){
        return initialString;
    }
    else if (stringLength > initialString.length){
        let finalAdding = '';
        let characters = stringLength - initialString.length;
        for (let i = 0; i < characters; i++){
            finalAdding = finalAdding + character;
         }
         return finalAdding + initialString;
    }

  }
  module.exports = paddingLeft;


//   Crear una función padding-left que se encarga de meter caracteres de relleno en un cadena por el lado izquierdo hasta llegar a un tamaño deseado. Toma 3 parámetros

// La cadena inicial
// Un tamaño final
// Un valor del padding, por defecto es un espacio
// Ejemplo: padding-left('hola', 6, 'x') devuelve 'xxhola'

// Si el tamaño final es menor o igual que la cadena inicial, se devuelve sin tocar la inicial.