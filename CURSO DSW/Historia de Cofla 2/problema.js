const sumar = (n1,n2) =>{
    return parseInt(n1) + parseInt(n2);
}

const restar = (n1,n2) =>{
    return parseInt(n1) - parseInt(n2);
}

const multiplicar = (n1,n2) =>{
    return parseInt(n1) * parseInt(n2);
}

const dividir = (n1,n2) =>{
    return parseInt(n1) / parseInt(n2);
}

alert("¿Qué operación deseas realizar?");
let opt = prompt("1. Sumar;   2.Restar;   3.Multiplicar;   4.Dividir");
let n1 = prompt("Ingrese el primer numero: ");
let n2 = prompt("Ingrese el segundo numero: ");

if(opt == 1){
    alert(sumar(n1,n2));
} else if(opt == 2){
    alert(restar(n1,n2));
} else if(opt == 3){
    alert(multiplicar(n1,n2));
} else if(opt == 4){
    alert(dividir(n1,n2));
} else{
    alert("Ingrese una opción valida");
}

