let nombres = ["Pedro", "María", "Jorge"];

document.write("<h2>Metodos de Arrays</h2>")
document.write("<h3>Metodos Transformadores</h3>Estos métodos transforman el array seleccionado, no crean uno nuevo.")
document.write("</br></br><b>Array original:</b> " + nombres);

let resultado0 = nombres.pop();     //Elimina el ultimo elemento, muestra el elemento eliminado

document.write("</br><b>Funcion pop:</b> " + resultado0);

document.write("</br><b>Array despues de aplicar pop:</b> " + nombres);

let nombres1 = ["Pedro", "María", "Jorge"];

document.write("</br></br><b>Array original:</b> " + nombres1);

let resultado1 = nombres1.shift();     //Elimina el primer elemento, muestra el elemento eliminado

document.write("</br><b>Funcion shift:</b> " + resultado1);

document.write("</br><b>Array despues de aplicar shift:</b> " + nombres1);

let nombres2 = ["Pedro", "María", "Jorge"];

document.write("</br></br><b>Array original:</b> " + nombres2);

let resultado2 = nombres2.push("Micaela", "Valentino");     //Agrega un elemento al final de la lista, devuelve la cantidad de elementos que tiene el array despues de la modificacion

document.write("</br><b>Funcion push:</b> " + resultado2);

document.write("</br><b>Array despues de aplicar push:</b> " + nombres2);

let numeros = [1,2,3,4,5];

document.write("</br></br><b>Array original:</b> " + numeros);

let resultado3 = numeros.reverse();     //Invierte el orden de los elementos del array

document.write("</br><b>Funcion reverse:</b> " + resultado2);

document.write("</br><b>Array despues de aplicar reverse:</b> " + numeros);

let numeros2 = [1,2,3,4,5];

document.write("</br></br><b>Array original:</b> " + numeros2);

let resultado4 = numeros2.unshift(-1,0);     //Agrega elementos a la izquierda, devuelve la cantidad de elementos del array

document.write("</br><b>Funcion reverse:</b> " + resultado4);

document.write("</br><b>Array despues de aplicar reverse:</b> " + numeros2);

let numeros3 = [1,5,2,4,7,3,5];

document.write("</br></br><b>Array original:</b> " + numeros3);

let resultado5 = numeros3.sort();     //Ordena los elementos de un array y los devuelve ordenado

document.write("</br><b>Funcion sort:</b> " + resultado5);

document.write("</br><b>Array despues de aplicar sort:</b> " + numeros3);

let cadena3 = ["Abecedario","Manzana", "Pedro", "Dedo", "Bobo"];

document.write("</br></br><b>Array original:</b> " + cadena3);

let resultado6 = cadena3.splice(1,3,"Roberto");     //Arranca desde el primer parametro, y elimina los elemntos hacia la derecha (segundo parametro --> cantidad de elementos a eliminar), reemplaza los elementos eliminados por el tercer parametro

document.write("</br><b>Funcion splice:</b> " + resultado6);

document.write("</br><b>Array despues de aplicar splice:</b> " + cadena3);

document.write("<h3>Metodos Accesores</h3>Estos métodos crean un nuevo array, no modifican el anterior.")

let cadena4 = ["Abecedario","Manzana", "Pedro", "Dedo", "Bobo"];

document.write("</br></br><b>Array original:</b> " + cadena4);

let resultado7 = cadena4.join("</br>Elemento: ");     //Convierte la cadena en texto, utilizando el separador que querramos

document.write("</br><b>Funcion join:</b></br>Elemento:  " + resultado7);

let cadena5 = ["Abecedario","Manzana", "Pedro", "Dedo", "Bobo"];

document.write("</br></br><b>Array original:</b> " + cadena5);

let resultado8 = cadena5.slice(0,2);     //Crea una cadena de texto desde el primer elemento, hasta el segundo, sin incluir

document.write("</br><b>Funcion slice:</b>" + resultado8);

document.write("<h3>Metodos de Repetecion</h3>Estos métodos reciben como parametro una funcion.")

let cadena6 = ["Abecedario","Manzana", "Pedro", "Dedo", "Bobo"];

document.write("</br></br><b>Array original:</b> " + cadena6 + "</br><b>Funcion filter:</b></br>");

let resultado9 = cadena6.filter(elemento => elemento.length > 5);     //Devuelve como funcion los i elementos del array

document.write(resultado9);

// Permite hacer lo mismo que el forEach, con la diferencia de que crea un nuevo array con los elementos que cumplan la condicion dada