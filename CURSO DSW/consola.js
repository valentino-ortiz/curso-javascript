/* Funciones de Registro */
console.assert(5 < 3)       //Aparece un mensaje de error en la consola si la afirmacion es falsa, sino no aparece nada

console.clear()     //Limpia la consola

console.error("Que hiciste boludo?");       //Muestra un mensaje como error

console.info("Hola");        //Da un mensaje informativo

console.log("Hola")         //Da un mensaje depurativo

console.table([0,2,3,45,123,52345,7,4])     //Crea una tabla con el array u objeto que ingresemo como parametro

console.warn("Cuidado...")      //Da una advertencia

console.dir([0,2,3,45,123,52345,7,4])

/* Funciones de Conteo */
console.count()     // Generea un contador
console.count()
console.count() 
console.count()
console.count()
console.count()
console.countReset()       //Resetea el contador
console.count()

/* Funciones de Agrupacion */
console.clear()

console.group("Saludo")        //Crea niveles de grupos abierto
console.log("Hola");
console.log("Como vas");

console.group("SubGrupo")     //Crea otro nivel de grupo

console.groupEnd("SubGrupo")        //Cierra el nivel de grupo

console.clear();

console.groupCollapsed("Frutas")        //Crea un grupo cerrado 

/* Funciones de Temporizacion */
console.clear()

console.time()      //Crea un contador en segundos

console.timeLog()      //Muestra el contador

console.timeEnd()          //Termina el contador

