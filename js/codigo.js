//Diapositiva 36 ejemplo de javascrip dentro de un documento

alert("Hola Mundo");
alert("Soy el primer script")

//Ejercisio de diapositiva 45 Arrays

var meses =["Enero","Febrero", "Marzo", "Abril", "Mayo", "JUnio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var i = 0;
while(i<11){
	console.log(mes[i]);
	i++;
}

//Ejercisio de diapositiva 64 Operadores

var valores = [true, 5, false, "hola", "adios", 2];
 
// Cual de los 2 elementos de texto es mayor
// Si el resultado es true, el primer texto es mayor
var resultado = valores[3] > valores[4];
alert(resultado);
 
// Combinar valores booleanos
var valor1 = valores[0];
var valor2 = valores[2];
 
// Obtener un resultado TRUE
var resultado = valor1 || valor2;
alert(resultado);
 
// Obtener un resultado FALSE
resultado = valor1 && valor2;
alert(resultado);
 
// Operaciones matemáticas
var num1 = valores[1];
var num2 = valores[5];
 
var suma = num1 + num2;
alert(suma);
 
var resta = num1 - num2;
alert(resta);
 
var multiplicacion = num1 * num2;
alert(multiplicacion);
 
var division = num1 / num2;
alert(division);
 
var modulo = num1 % num2;
alert(modulo);

//Ejercisio de Diapositiva 73 Funciones 

//1 Ejercisio Dos Numeros

console.log("introducir el primer número");
var num1 = prompt();
console.log("introducir el segundo número");
var num2 = prompt();


function max() {
	if (num1 > num2) {
    	console.log("el número mayor es " + num1);
} 
	else if (num2 > num1) {
    	console.log("el número mayor es " + num2);
} 
	else if (num1 == num2) {
    	console.log("los números son iguales");
} 
}

max();

//2 Tres Numeros

console.log("introduce el primer número");
var num1 = prompt();
console.log("introduce el segundo número");
var num2 = prompt();
console.log("introduce el tercer número");
var num3 = prompt();


function max() {
	if (num1 > num2) {
    	console.log("el número mayor es " + num1);
} 
if (num1 > num3) {
    	console.log("el número mayor es " + num1);

}
if (num2 > num3) {
    	console.log("el número mayor es " + num2);
}  
	else if (num2 > num1) {
    	console.log("el número mayor es " + num2);
} 
	else if (num2 > num3) {
    	console.log("el número mayor es " + num2);
} 
	else if (num3 > num1) {
    	console.log("el número mayor es " + num3);
} 
	else if (num1 == num2) {
    	console.log("los números son iguales");
} 
else if (num1 == num3) {
    	console.log("los números son iguales");
} 
else if (num3 == num1) {
    	console.log("los números son iguales");
} 
}
//3 Vocales

console.log("introducir una vocal");
var vocal = prompt();


function caracter() {
if ((vocal === 'a') || (vocal === 'e') || (vocal === 'i') || (vocal === 'o') || (vocal === 'u')) {
    console.log(vocal + " es vocal");
} 
else if ((vocal != 'a') || (vocal != 'e') || (vocal != 'i') || (vocal != 'o') || (vocal != 'u')) {
    console.log(vocal + " es consonante");
} 
}
caracter();

//Ejercisio de Diapositiva 74 Funciones Parte 2

//1 Funcion de sumas en un array

var valores = [2, 4, 6, 8, 10, 12];

var numero1 = valores[0];
var numero2 = valores[1];
var numero3 = valores[2];
var numero4 = valores[3];
var numero5 = valores[4];
var numero6 = valores[5];

console.log(numero1+numero2+numero3+numero4+numero5+numero6); 
console.log(numero1*numero2*numero3*numero4*numero5*numero6);

//2 Funcion de String

var saludo = ["Hola" "Saludos"];
animals.reverse();

console.log(saludo);

//3 Funcion de Saludo---cadena---

var cadena = "palabra",
    separador = "",
    empiezacadena = cadena.split(separador);
    empiezacadena.reverse();

console.log(empiezacadena);

//4 Funcion de Array Palabra mas larga

var mensaje = "Como estas";
var palabras = mensaje.split(" ");

console.log(saludo);


var palabra1 = palabras[0].length;
var palabra2 = palabras[1].length;

if (palabra1 > palabra2){
  console.log("la palabra mas larga tiene " + palabra1 + " caracteres y es Como");
}
else{
  console.log("la palabra mas larga tiene " + palabra2 + " caracteres y es estas");
}

//Ejercisio de Diapositiva 102 Objetos

//! Represental los objetos

var coche = new auto{
	marca: "Toyota",
	estilo: "Carabolla",
	annio: "2015",
	color: "azul"
	dueño: "luis Perez"
	precio: function(){
		console.log if("coche" + coche.marca + estilo.carabolla 
						+ annio.2015 + color.azul + dueño.luisperez)
	},
	else{ (cond) var coche = {true};

	}
};

var comida = new hamburgesa {
	"queso",
	 "4porciones",
	 "pan",
	 "carne"
	 "tomate"
	 "lechuga"
	 "mayonesa"
	 "15 minutos"
	};


	function hamburgesa(){
		console.log if {
			"cumple con todo" true
		};
	}

//combinacion de Objetos y arreglos

var computadora = new computadora();
conputadora.id ="Compaq", "2005", "Windows XP", "15 pulgadas", "Vanesa Garcia"

computadora.nombre = "Conputadora";
computadora.muestraId = function() {
  alert("El ID de computadora es "+ this.id);
}
computadora.muestraNombre = function() {
  alert(this.nombre);
}

//

var computadora = new computadora();
conputadora.id ="HP", "2003", "Linux", "13 pulgadas", "Luisa Francia"

computadora.nombre = "Conputadora";
computadora.muestraId = function() {
  alert("El ID de computadora es "+ this.id);
}
computadora.muestraNombre = function() {
  alert(this.nombre);
}

//

var computadora = new computadora();
conputadora.id ="Sony", "2004", "Windows 7", "14 pulgadas", "Julia Fernandez"

computadora.nombre = "Conputadora";
computadora.muestraId = function() {
  alert("El ID de computadora es "+ this.id);
}
computadora.muestraNombre = function() {
  alert(this.nombre);
}

//

var computadora = new computadora();
conputadora.id ="Asus", "2002", "Windows XP", "15 pulgadas", "Vanesa Garcia"

computadora.nombre = "Conputadora";
computadora.muestraId = function() {
  alert("El ID de computadora es "+ this.id);
}
computadora.muestraNombre = function() {
  alert(this.nombre);
}

//

var computadora = new computadora();
conputadora.id ="Toshiba", "2008", "Windows 10", "10 pulgadas", "María Reyes"

computadora.nombre = "Conputadora";
computadora.muestraId = function() {
  alert("El ID de computadora es "+ this.id);
}
computadora.muestraNombre = function() {
  alert(this.nombre);
}
//

var computadora = new computadora();
conputadora.id ="Apple", "2014", "OSX", "13 pulgadas", "Fernanda Ramos"

computadora.nombre = "Conputadora";
computadora.muestraId = function() {
  alert("El ID de computadora es "+ this.id);
}
computadora.muestraNombre = function() {
  alert(this.nombre);
}

//Ejercicios de la Diapositiva de pagina 103 Lista de precios sin IVG:

var valorDeVenta = [20, 14, 24, 20, 15, 25, 40, 25, 13, 8, 5.4, 10, 11]

var numero1 = valores[0];
var numero2 = valores[1];
var numero3 = valores[2];
var numero4 = valores[3];
var numero5 = valores[4];
var numero6 = valores[5];
var numero7 = valores[6];
var numero8 = valores[7];
var numero9 = valores[8];
var numero10 = valores[9];
var numero11 = valores[10];
var numero12 = valores[11];
var numero13 = valores[12];

console.log();
	


//Ejercicios de la Diapositiva de pagina 104 Cooders

var coders =[
    {
        nombre: "Julia",
        ciudad:"Lima",
        email:"julia@lima.la",
        edad:24
    },
    {
        nombre:"Constanza",
        ciudad:"Santiago",
        email:"constanza@santiago.la",
        edad:19
    },
    {
        nombre:"Claudia",
        ciudad:"Mexico",
        email:"caudia@mexico.la",
        edad:17
    },
    {
        nombre:"Juana",
        ciudad:"Arequipa",
        email:"juana@arequipa.la",
        edad:21
    }];

function Persona(primerNombre) {
  this.email = email;
  alert('Una email de una persona');
};

coders.push
(
	nombre:"mari",
	ciudad:"DF",
	email:"mari@mexico.la",
    edad:23
 ),
coders.unshift
(
	nombre:"Nayelli",
	ciudad:"DF",
	email:"nalle@mexico.la",
    edad:23
);

function();{
	var
}
	
	






