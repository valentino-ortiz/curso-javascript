/* ARRAY NORMALES */
/*
let frutas = ["Banana", "Manzana", "Pera", 5, 9, "Pedro"];   //Los arrays no tienen tamaño fijo

document.write(frutas[5]); 
*/

/* ARRAY ASOCIATIVOS - OBEJETOS */
let pc1 = {
    nombre: "DaltoPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB"
};

let pc2 = ["DaltoPC","Intel Core I7","16GB","1TB"];

/*
document.write(pc1["nombre"]);
document.write(pc1["procesador"]); */

let nombre = pc1["nombre"];
let espacio = pc1["espacio"];
let ram = pc1["ram"];
let procesador = pc1["procesador"];

let frase = `El nombre de mi PC es: <b>${nombre}</b> <br>
            El procesador es: <b>${procesador}</b> <br>
            La memoria ram es de: <b>${ram}</b> <br>
            El espacio en disco es de: <b>${espacio}</b>`;

document.write(frase);