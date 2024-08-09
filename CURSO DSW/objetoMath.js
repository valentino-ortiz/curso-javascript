document.write("<h1>Objeto Math</h1>")

let numero1 = Math.sqrt(25);     //Calcula la raiz cuadrada del parametro

document.write("<b>Funcion sqrt:</b> " + numero1); //</br>

let numero2 = Math.cbrt(27);    //Calcula la raiz cubica del parametro

document.write("</br><b>Funcion cbrt:</b> " + numero2); //</br>

let numero3 = Math.max(1,2,7,6,54,3)        //Devuelve el numero mas grande de los parametros ingresados

document.write("</br><b>Funcion max:</b> " + numero3);

let numero4 = Math.min(1,2,7,6,54,3)        //Devuelve el numero mas chico de los parametros ingresados

document.write("</br><b>Funcion min:</b> " + numero4);

let numero5 = Math.random()*100       //Devuelve un numero pseudo-aleatorio entre 0 y 1

document.write("</br><b>Funcion random:</b> " + numero5);

let numero6 = Math.round(numero5);      //Redondea el parametro

document.write("</br><b>Funcion round:</b> " + numero6);

let numero7 = Math.floor(8.9);      //Redondea el parametro al siguiente entero menor o igual

document.write("</br><b>Funcion floor:</b> " + numero7);

let numero8 = Math.random()*99;
let numero9 = Math.floor(numero8 + 1);

document.write("</br><b>Numero aleatorio entre 0 y 100: </b>" + numero9);

let numero10 = Math.fround(9.7643);     //

document.write("</br><b>Funcion fround:</b> " + numero10);

let numero11 = Math.trunc(9.7643);     //Elimina los decimales

document.write("</br><b>Funcion trunc:</b> " + numero11);


