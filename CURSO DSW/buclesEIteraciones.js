// let nro = 0;

/*
while (nro <= 10){
    nro++;
    document.write(nro + "<br>");
}
*/

/*
do {
    document.write(nro + "<br>");
    nro++;
}

while (nro > 10)  */              // ejecuta la primera iteracion, despues pregunta

/*
while(nro < 1000){
    nro++;
    document.write(nro + "<br>");
    if (nro === 10){ 
        break;                  // detiene el bucle
    }
}

document.write("fin");
*/

/*
for(let i = 0; i < 20; i++){
    if(i === 12){
        continue;               //termina esa iteracion
    }
    document.write(i + "<br>");
}
*/

/*
let animales = ["Gato","Perro","Conejo"];

for(animal in animales){                    // devuelve la posicion del elemento, muestra tambien el nombre de los atributos de un objeto
    document.write(animales[animal] + "<br>");          // animal tiene la posicion
}
document.write("<br>");

for(animal of animales){                    // devuelve el contenido del elemento
    document.write(animal + "<br>");
}
*/

/* 
array1 = ["Jose","Maria","Alberto"];
array2 = ["Pedro","Marcelo",array1,"Micaela"];

forRancio:
for (let array in array2){
    if (array == 2){
        for(let array in array1){
            document.write(array1[array] + "<br>");
            break forRancio;
        }
    }
    else{
        document.write(array2[array] + "<br>");
    }
}
*/
/*
let a = '1';

switch (a) {
    case 1:             // compara contra lo que le sigue al case, si es igual entra, sino sigue
        console.log(`a is 1`);
        break;
    case 2:
        console.log(`a is 2`);
        break;
    case '1':
        console.log(`a is '1'`);
        break;
    default:            // si no entro por ninguna de las anteriores, entra a esta, seria un else
        console.log('no match');
        break;
}
*/

const datos = ['array', 1, true, undefined, 'story'];

console.log('for');
for (let i = 0; i < datos.length; i++) {        // Recorre cada posicion del array
    const element = datos[i];
    console.log(`el elemento ${i} es ${element} de tipo ${typeof element}`);
}

console.log('forEach');
datos.forEach((element, i) => {     // Para cada elemento, devuelve indice [i]
    console.log(`el elemento ${i} es ${element} de tipo ${typeof element}`);
});