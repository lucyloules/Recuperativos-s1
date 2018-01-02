//////////////////////////// PROBLEMA 1  (50 pts.) ////////////////////////////////////////////////////
/*Dado un arreglo de números rotar sus elementos hacia la 
derecha n veces.
Ejemplo: arr = [1,2,3,4,5,6,7]
		n = 3
		retorna [5,6,7,1,2,3,4]*/

var arr =[1,2,3,4,5,6,7]; //arreglo dado
var n=3; // numero de veces que rotará el array
function rotarArrayDerecha(arr, n) { 
    for (var i = 0; i < n; i++) { //mediante el for rotamos el arreglo el numero de veces 
        arr.unshift(arr.pop()); // arr.pop(), corta  la ultima posición y el valor se inserta al inicio del arreglo con arr.unshift
    }
    return arr; // retorna el arreglo ya rotatado
}

console.log(rotarArrayDerecha(arr,n)); /*muestra en consola 
el resultado de la funcion */


//////////////////////////// PROBLEMA 2 (50 pts.) ////////////////////////////////////////////////////
/*Dado un arreglo de números positivos, retornar true si este se encuentra ordenado de menor a mayor, en caso contrario false. 
No puede usar el método sort() de javascript.*/

//////////////////////////// PROBLEMA 3 (50 pts.) ////////////////////////////////////////////////////
/*Dado un arreglo de números positivos, encontrar los elementos adyacentes cuya suma sea la mayor, retornar el resultado de la suma.
Ejemplo:	arr = [4, 5, 1, 2, 3, 4]  → 4 + 5
			retorna 9

	arr = [1, 2, 3]  → 2 + 3
			retorna 5          */
/*incompleto*/

var arr = [4,5,1,2,3,4];
var mayor, suma1, suma2 =0;
/*paso1: Buscar el número mayor del arreglo.
paso2: Encontrar la posiscion del numero y la position sus adyacentes 
paso3:Calcular las sumas de los elementos adyacentes del numero mayor.
paso4: Comparación de las sumas y obtener la mayor.   */

function sumaMayor(arr){
  for(i=0; i<arr.length;i++){
    if((arr[i]) > mayor){
      mayor = arr[i];
    }
  }
  arr.indexOf(mayor);
console.log(arr.indexOf(mayor));
  suma1 = mayor+(arr.indexOf(mayor)-1);
  suma2 = mayor+(arr.indexOf(mayor)+1);
  if(suma1 >= mayor){
    mayor = suma1;
    return mayor;
  }
  else{
    mayor = suma2;
  }
  return mayor
}
console.log(sumaMayor(arr));

//////////////////////////// PROBLEMA 4 (50 pts.) ////////////////////////////////////////////////////
/*Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice.

Ejemplo:	arr = [1, 2, 3]
			retorna 0

			arr = [3, 2, 1]
			retorna 2    */

arr =[7, 0, 5];
min = arr.length; //le designo un valor distinto de cero
function indiceNumeroMenor(arr){ //funcion calcula el menor y da su indice
  for(i=0; i <arr.length; i++ ){ //for busca el menor de los n°s del Array
    if(arr[i]<=min){//if compara el valor de la posicion con el valor
      min=arr[i];
    }
  }
  return arr.indexOf(min);
}
console.log(indiceNumeroMenor(arr));
/*otra version*/
//creo las variables a usar
var arr = [3,68,12,5,0,80];//Creo la variable con numeros
var numeroMenor = Math.min(...arr);//Math.min() devuleve el menor valor

function buscar(arr){ //Primero creo una funcion para encontrar el numero mas pequeño
	return arr === numeroMenor;
}

console.log("El numero menor es: "+numeroMenor + " y su indice es: "+arr.findIndex(buscar));
//findIndex():metodo que devuelve el índice de la primera coincidencia


function buscar(num){ //Primero creo una funcion para encontrar el numero mas pequeño
	return num === masChico;
};
//Creo la variable con numeros
var arr = [34,67,4,23,1,100]
//Uso el metodo Math.min() que devuleve el valor mas bajo
var masChico = Math.min(...arr);
console.log(masChico);
//Uso el metodo findIndex(), ya que devuelve el índice del primer elemento encontrado en la función
console.log(arr.findIndex(buscar));

//////////////////////////// PROBLEMA 5 (50 pts.) ////////////////////////////////////////////////////
/* Dado un arreglo de números positivos, encontrar el elemento más pequeño e intercambiarlo por el primer elemento del arreglo.

Ejemplo:	arr = [3, 2, 1]
			retorna [1, 2, 3]

			arr = [4, 3, 1, 2]
			retorna [1, 3, 4, 2]  */

//////////////////////////// PROBLEMA 6 (30 pts.) ////////////////////////////////////////////////////
/* Dado un arreglo de números enteros positivos, se necesita 
detectar si están en orden ascendente (menor a mayor). Si es 
así, nuestra función debe retornar true, en caso contrario 
false. (Puede usar método sort()) */

//////////////////////////// PROBLEMA 7 (30 pts.) ////////////////////////////////////////////////////
/* Dado un arreglo y un número, verificar si el número se 
encuentra en el arreglo. En caso de ya existir deberá retornar 
el arreglo sin cambios, en caso contrario retornar el arreglo
nuevo con el número ingresado.
Ejemplos:   arr = [1, 2, 3, 4]					arr = [1, 2, 3, 4]
      number = 4						number = 8
      retorna [1, 2, 3, 4]				retorna [1, 2, 3, 4, 8] */

/*declaramos variables*/
var arr =[1,2,3,4];
var number=5;
function existeNumero(array, number) {// 
  if(!array.includes(number)){ //si no existe el numero en el array, lo agrega al final con el metodo push
    arr.push(number);// metodo push agrega un elemento alfinal del array
    return array; //
  }
  else{
    return array;
  }
}

console.log(existeNumero(arr,number));
/*El método includes() determina si una matriz incluye un elemento determinado, devuelve true o false según corresponda.*/

//////////////////////////// PROBLEMA 8 (30 pts.) ////////////////////////////////////////////////////
/*declaramos las variables*/
arr= [1,5,8,19];
number=19;

function devuelvePosicion(arr, number){
  if(arr.indexOf(number)===-1){
    return "No existe en el arreglo el numero: "+number;
  }
  else{
  return "El numero : "+ number + " tiene la posicion : " + arr.indexOf(number); 
  }
}
console.log(devuelvePosicion(arr,number));

/*indexOf devuelve la posición de un elemento de un arreglo y cuando elemento no se encuentra devuelve el valor: -1 */

//////////////////////////// PROBLEMA 9 (30 pts.) ////////////////////////////////////////////////////
/*declaramos las variables*/
arr1=[1,2,3,4];
arr2=[5,6,7,8];
nuevoArr=[];
// retorna nuevoArr=[6,8,10,12]
// suma indices de los arreglos mediante la variable auxiliar y las sumas parciales las asigna a nuevoArr
function sumaIndices(arr1, arr2){
  for( i = 0; i < arr1.length; i++){
    nuevoArr[i] = arr1[i] + arr2[i]; 
  }
  return nuevoArr;
}
console.log("El valor de nuevoArr: " + sumaIndices(arr1,arr2));

//////////////////////////// PROBLEMA 10 (30 pts.) ////////////////////////////////////////////////////
/*Un grupos de amigos van a un evento y sus nombres están dentro de un arreglo. 
Escribir una función donde dado el nombre de la persona puedas retornar el asiento que le toca. La numeración comienza en 1, si la persona no tiene asiento retornar 0.
Ejemplo:  lista = [“Allison”, “Belén”, “Nadia”, “Marcia”, “Ale”, “Fabián”]
		    nombre = “Nadia”
		    retorna 3    */


/* declarolasvariables */
var listaNombre = ['Lucia', 'Carola', 'Elizabeth', 'Daniela', 'Patricia']; //Ingresamos el array con distintos elementos 
var pos = 0;
function devuelvePosicionInvitado(listaNombre){
  pos = (listaNombre.indexOf('Daniela')+1); //indexOf retorna la posicion de 'Daniela' y sumamos 1 xq index Of cuenta desde 0
  return pos
}
console.log("La posicion de la invitada es: "+devuelvePosicionInvitado(listaNombre));//retorna 0

//////////////////////////// PROBLEMA 11 (20 pts.) ////////////////////////////////////////////////////
/*declaramoslas variables*/
var notas = [5,2,3,4,5,4,1,1,6,2]; //ejemplo de arreglo
var suma =0; //inicializoen 0
function promedio(){

  for(var i = 0; i <notas.length; i++) {
	suma += notas[i]; //suma va acumulando las notas
  }
	prom = (suma/10);//al terminar de acumular lasnotas, se divide por 10 para calcular el promedio

  if (prom >= 4){//si el promedioes >=4 paso, sino reprueba
 	alert("¡Felicitaciones haz aprobado el ramo! con nota: "+prom); //alerta que indica que aprobo
  }else {
	alert("No haz aprobado el ramo por está vez nota: "+prom); //alerta que indica que reprobo
  }
} 

promedio(notas);
//////////////////////////// PROBLEMA 12 (20 pts.) ////////////////////////////////////////////////////

function esPalindromo(palabra) {
  /*1)transformamos letras de la palabra en minúsculas
  	2)mediante split separamos las letras
  	3)con reverse ordenamos las letras al reves (invertimos)
  	4)con join volvemos a unir las letras */
   var invertida = palabra.toLowerCase().split('').reverse().join('');
      if (palabra == invertida) { //comparamos las palabras
   // si es igual retorna 'true'
    return true;
    }else {
    //si no es gual retorna 'false'
     return false;	
         }
     }
	
esPalindromo("Ama") //hay un error no me esta transformando la palabra en minusculas
//////////////////////////// PROBLEMA 13 (20 pts.) ////////////////////////////////////////////////////
/* Dado dos string (palabra1 y palabra2) escribir una función para determinar si palabra1 es anagrama de palabra2.
Si es anagrama debe retornar true, en caso contrario false.
Una palabra es anagrama de otra cuando contiene las mismas letras en un orden distinto.
Ejemplo: la palabra anagrama es un anagrama de la palabra anmgraaa
 */
function ordenapalabras (str1, str2) {//establecemos la funcion con 2 palabras a comparar 
  /*
  paso1.- dividimos la primera palabra elegida en letras individuales
  paso2.- ordenamos las letras alfabeticamente con el método sort()
  paso3.- reunimos las letras ya ordenadas */
  var palabra1 = str1.split('').sort().join('');
  var palabra2 = str2.split('').sort().join('');

  if (palabra1 === palabra2) { //si palabra1 es exactamente igual a palabra2--> retorna true
    return true;
  } else {
  		return false;// de lo contrario retorna 'falso'
  		}
  }

console.log(ordenapalabras("amor", "roma")); //ejemplo roma, amor
//////////////////////////// PROBLEMA 14 (20 pts.) ////////////////////////////////////////////////////

/*Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
	Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   			output nuevoArr = [2, 4, 6, 8, 10]*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function soloPares(arr){}
var pares = arr.filter(function(pares){//filter, filtra los numeros que cumplen la condicion de ser pares
	return pares % 2 === 0; //par: un numero es par cuando al aplicar modulo de 2 da igual a cero, sino no es par
});

console.log(pares); // muestra por consola los numeros que son pares del arreglo


//////////////////////////// PROBLEMA 15 (20 pts.) ////////////////////////////////////////////////////
/*Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
Ejemplo: input arr = [1, 2, 3, 4]
		 output nuevoArr = [12, 24, 36, 48] */

/*declaro las variables*/
var arr = [1,2,3,4]; 
var n = 12;
var newArray = [];

function multiplicaArrayPorNumero(arr,n){
  for(i = 0; i < arr.length; i++){
    newArray[i] = arr[i]*n;//muliplico cada elemento del array por 12
  }
  return newArray;//retorno el nuevo array
  
}
Console.log(multiplicaArrayPorNumero(arr,n)); // Error no muestra el nuevo arrayamplificado por 12


/* otra funcion pero no me funciono en replit
var numbers = [1,2,3,4];
var mul = numbers.map(function (x) {
	return x * 12;
});*/

//map() crea un nuevo array con los resultados de la funcion que se le pidio.