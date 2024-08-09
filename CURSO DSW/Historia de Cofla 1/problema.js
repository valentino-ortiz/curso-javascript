/* 
Problema A - Heladeria
3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: los precios no
estan al lado de cada estante con su respectivo helado.
Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, así que... veamos como podemos ayudarlos

Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD 

Los precios de helados son los siguientes:
Palito de helado de agua: $0.6 USD
Palito de helado de crema: $1 USD
Bombón helado marca heladix: $1.6 USD
Bombón helado marca heladovich: $ 1.7 USD
Bombón helado marca helardo: $1.8 USD
Potecito de helado con confites: $2.9 USD
Pote de 1/4 KG > $2.9 USD

Crear soluciones:
    * Ingresar el monto y mostrar el mas caro
    * Si hay 2 o mas, mostrar ambos
    * Indicar el vuelto
*/

const helAgua = 0.6, helCrem = 1, helDix = 1.6, helVich = 1.7, helArdo = 1.8, helConf = 2.9, cuarto = 2.9;

let dinero = prompt("¿Cuánto dinero tenes?");
dinero = parseFloat(dinero);

if (dinero < 0.6){
    alert("Lo lamentamos, no puedes comprar ningun helado.")
}
else if (dinero >= 0.6 && dinero < 1){
    alert("Puedes comprar un helado de agua.");
    if ((dinero - 0.6) != 0){
        alert("Te sobrarian $" + (dinero - 0.6) + " USD");
    }
    else{
        alert("No te sobraria dinero");
    }
}
else if (dinero >= 1 && dinero < 1.6){
    alert("Puedes comprar un helado de crema.");
    if ((dinero - 1) != 0){
        alert("Te sobrarian $" + (dinero - 1) + " USD");
    }
    else{
        alert("No te sobraria dinero");
    }
}
else if (dinero >= 1.6 && dinero < 1.7){
    alert("Puedes comprar un helado marca Heladix.");
    if ((dinero - 1.6) != 0){
        alert("Te sobrarian $" + (dinero - 1.6) + " USD");
    }
    else{
        alert("No te sobraria dinero");
    }
}
else if (dinero >= 1.7 && dinero < 1.8){
    alert("Puedes comprar un helado marca Heladovich.");
    if ((dinero - 1.7) != 0){
        alert("Te sobrarian $" + (dinero - 1.7) + " USD");
    }
    else{
        alert("No te sobraria dinero");
    }
}
else if (dinero >= 1.8 && dinero < 2.9){
    alert("Puedes comprar un helado de marca Helardo.");
    if ((dinero - 1.8) != 0){
        alert("Te sobrarian $" + (dinero - 1.8) + " USD");
    }
    else{
        alert("No te sobraria dinero");
    }
}
else{
    alert("Puedes comprar un helado de confites, o un pote de 1/4Kg.")
    if ((dinero - 2.9) != 0){
        alert("Te sobrarian $" + (dinero - 2.9) + " USD");
    }
    else{
        alert("No te sobraria dinero");
    }
}
/*
Problema B - Boletos de loteria
    * Si le alcanza uno, lo compra
    * Si le alcanza para dos, los compra
    * Si le alcanza para tres y sobra, regala el vuelto
    * Debe mostrar que compro y el vuelto
*/

