let cadena1 = "Cadena de prueba";
let cadena2 = "Cadena";
let cadena3 = "de prueba ";
let cadena4 = "de";
let cadena5 = "Hola como estas??? ";
let cadena6 = "Hola como estas";
let cadena7 = "ABCDEFGHIJKLMNÑ";
let cadena8 = 50;
let cadena9 = "   Hola como estas   ";

let resultado0 = cadena1.concat(cadena2);

document.write("<h2>Funciones que buscan cadenas y devuelven valores </h2>");

document.write("<b>Funcion concat:</b> " +resultado0);

let resultado = cadena1.startsWith(cadena2);        //devuelve true o false dependiendo de si la cadena seleccionada arranca con el parametro      

document.write("</br><b>Funcion startsWith:</b> " + resultado);

let resultado1 = cadena1.endsWith(cadena3);     //devuelve true o false dependiendo de si la cadena seleccionada termina con el parametro      

document.write("</br><b>Funcion endsWith:</b> " + resultado1);

let resultado2 = cadena1.includes(cadena4);     //devuelve true o false dependiendo de si la cadena seleccionada incluye con el parametro      

document.write("</br><b>Funcion includes:</b> " + resultado2);

let resultado3 = cadena1.indexOf(cadena4);     //funciona igual al includes, la unica diferencia es que devuelve la posicion en la que se encuentra la primera letra, la primera vez que se encuentra. Devuelve -1 cuando no se encuentra el string

document.write("</br><b>Funcion indexOf:</b> " + resultado3);

let resultado4 = cadena1.lastIndexOf(cadena4);     //funciona igual al indexOf, la unica diferencia es que devuelve la posicion en la que se encuentra la primera letra, la ultima vez que se encuentra. Devuelve -1 cuando no se encuentra el string

document.write("</br><b>Funcion lastindexOf:</b> " + resultado4);

let resultado5 = cadena1.padStart(20, 1);     //Agrega el segundo parametro al principio de la cadena, hasta que la longitud de la misma sea igual al primer parametro

document.write("<h2>Funciones que modifican cadenas </h2>");

document.write("<b>Funcion padStar:</b> " + resultado5);

let resultado6 = cadena1.padEnd(20, 1);     //Agrega el segundo parametro al principio de la cadena, hasta que la longitud de la misma sea igual al primer parametro

document.write("</br><b>Funcion padEnd:</b> " + resultado6);

let resultado7 = cadena5.repeat(5);     //Repite la cadena la cantidad de veces que diga el parametro.

document.write("</br><b>Funcion repeat:</b> " + resultado7);

document.write("<h2>Funciones que transforman cadenas </h2>");

let resultado8 = cadena6.split("como");     //Divide la cadena en base al parametro que definamos, devuelve un array

document.write("<b>Funcion split:</b> " + resultado8);

let resultado9 = cadena7.substring(2,6);     //Devuelve lo que seleccionamos, desde el primer parametro (Incluido), hasta el segundo (No incluido)

document.write("</br><b>Funcion subString:</b> " + resultado9);

let resultado10 = cadena6.toLowerCase();     //Convierte la cadena a minuscula 

document.write("</br><b>Funcion toLowerCase:</b> " + resultado10);

let resultado11 = cadena6.toUpperCase();     //Convierte la cadena a mayuscula 

document.write("</br><b>Funcion toUpperCase:</b> " + resultado11);

let resultado12 = cadena8.toString();     //Convierte la cadena a string 

document.write("</br><b>Funcion toString:</b> ", 2 + resultado12);

let resultado13 = cadena6.trim();     //Elimina los espacios en blanco

document.write("</br><b>Funcion trim:</b> " + resultado13.length, " --> 'Hola como estas'</br><b>Funcion length:</b> " + cadena9.length, " -->'   Hola como estas   '");

let resultado14 = cadena6.trimEnd();     //Elimina los espacios en blanco del final 

document.write("</br><b>Funcion trimEnd:</b> ", resultado14.length);

let resultado15 = cadena6.trimStart();     //Elimina los espacios en blanco del principio 

document.write("</br><b>Funcion trimStart:</b> ", resultado14.length);
