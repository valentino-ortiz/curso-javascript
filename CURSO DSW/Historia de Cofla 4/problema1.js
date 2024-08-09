class Calculadora {
    constructor(n1,n2){
        this.n1 = n1;
        this.n2 = n2
    }
    sumar(n1,n2){
        return parseInt(n1) + parseInt(n2);
    }
    restar(n1,n2){
        return parseInt(n1) - parseInt(n2);
    }  
    multiplicar(n1,n2){
        return parseInt(n1) * parseInt(n2);
    }
    dividir(n1,n2) {
        return parseInt(n1) / parseInt(n2);
    }
    potenciar(n1,exp){
        return n1**exp;
    }
    raizCuadrada(n1){
        return Math.sqrt(n1);
    }
    raizCubica(n1){
        return Math.cbrt(n1);
    }
}

const calc = new Calculadora();

alert("¿Qué operación deseas realizar?");
let opt = prompt("1. Sumar;   2.Restar;   3.Multiplicar;   4.Dividir;   5.Potenciar;   6.Raiz Cuadrada;   7. Raiz Cubica");
if (opt == 5){
    n1 = prompt("Ingrese la base: ");
    n2 = prompt("Ingrese el exponente: ");
}else if (opt == 6 || opt == 7){
    n1 = prompt("Ingrese el numero: ");
}
else{
    n1 = prompt("Ingrese el primer numero: ");
    n2 = prompt("Ingrese el segundo numero: ");
}

if(opt == 1){
    alert(calc.sumar(n1,n2));
} else if(opt == 2){
    alert(calc.restar(n1,n2));
} else if(opt == 3){
    alert(calc.multiplicar(n1,n2));
} else if(opt == 4){
    alert(calc.dividir(n1,n2));
} else if(opt == 5){
    alert(calc.potenciar(n1,n2));
}  else if(opt == 6){
    alert(calc.raizCuadrada(n1));
}  else if(opt == 7){
    alert(calc.raizCubica(n1));
}  else{
    alert("Ingrese una opción valida");
}

