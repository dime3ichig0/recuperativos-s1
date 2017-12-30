



Ejercicio numero 11 (20 puntos)

var notas = [1,2,3,4,5,6,7,3,5,1]; /*arreglo de notas*/

function promedio(notas){
  var suma = 0; /*variable que guarda las sumas de las notas*/
  for (var i = 0; i < notas.length; i++) { /*recorre las notas para sumarlas*/
  	suma = suma + notas[i];
  }
  
  var promedio = suma / 10; /*varaible para guardar el promedio*/
  if (promedio >= 4){
  	alert("aprobado"); /*si la nota es >=4 sale mensaje de aprobado*/
  }else{
  	alert("reprobado");  /*si la nota es <4 sale mensaje de reprobado*/
    
  }
}

promedio(notas); // llamando a la funcion 







Ejercicio numero 14 (20 puntos)


function numerosPares(array){ /*Creando una nueva funcion*/ 
  var newArray = []; /*nuevo arreglo que va a contener mis numeros pares*/
  for (var i = 0; i < array.length; i++) { /*para recorrer;que solo me devuelva numeros pares*/
    if (array[i] % 2 == 0){ /*si la condicion se cumple,me devuelve numeros pares*/
      newArray.push(array[i]) /*agregando mis elementos pares a mi NewArray que esta vacio*/
    }
  }
  return newArray /*retorna*/
}

numerosPares([1,2,3,4,5,6,7,8,9,10]) /*llamando a la funcion*/






Ejercicio 4 (50 puntos)

function numLittle(arr) { /*creando una funcion*/
  var min = Math.min.apply(null, arr); /*la funcion Math.min.apply busca el valor mas pequeño dentro del array*/
  var index = arr.indexOf(min);/*indexOF devuelve el indice del numero solicitado */
  return index;/*retorna el indice*/

}

numLittle([1, 4, 3, 6, ,2,10]);









Ejercicio numero 15 (20 puntos)

unction mult(arr){
  var nuevoArray = []; /*arreglo vacio para guardar el nuevo arreglo*/
  for(var i=0; i<arr.length; i++){ /*recorre el arreglo*/
    nuevoArray.push(arr[i]*12); /*multiplica cada numero por 12 y lo agrega al nuevo array*/
  }
  return nuevoArray;
}

mult([1,2,1,4]);







