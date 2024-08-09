/*
function saludar(){
let respuesta = prompt("Hola Valentino. ¿Cómo fue tu dia?");
if (respuesta === "bien"){
    alert("Me alegro.");
}else{
    alert("Una pena.");
}
}

/*
let saludar = function(){
let respuesta = prompt("Hola Valentino. ¿Cómo fue tu dia?");
if (respuesta === "bien"){
    alert("Me alegro.");
}else{
    alert("Una pena.");
}
}
*/

/*
function saludar(){
    alert("Hola.");
    return "La función se ejecutó correctamente.";   // el return finaliza la funcion.
}

let saludo = saludar();

document.write(saludo);
*/

/*
let num1 = prompt("Ingrese el primero número:");
let num2 = prompt("Ingrese el segundo número:");;

function suma(n1,n2){
    let res = parseInt(n1) + parseInt(n2);
    return res;    
}

let res = suma(num1,num2);
document.write(res);
*/

/*
function saludar(nombre, saludo = 'Holis') {
    return `${saludo} ${nombre}`;
}

document.write(saludar('John', 'Hola') + "<br>");
document.write(saludar('John') + "<br>"); //parameters are optionals but can have a default value
document.write(saludar() + "<br>"); //parameters can't be mandatory
document.write(saludar('Hola', 'John') + "<br>"); //order matters
document.write(saludar('John', 'Hola', '!') + "<br>"); //additional parametters are ignored
*/


/*
function saludar(nombre){
    let frase = `¡Hola ${nombre}! ¿Cómo estas?`;
    document.write(frase);
}

saludar("Pedro");
*/

/* FUNCIONES FLECHA */
const saludar = nombre => document.write(`Hola como estas ${nombre}`);       // Si hay un solo parametro, no es necesario poner parentesis
saludar("Pedro"); 