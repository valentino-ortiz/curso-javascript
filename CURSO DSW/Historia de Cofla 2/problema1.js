let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cuántos años tenes?");
    if(edad >= 18){
        if(time >= 2 && time < 7 && free == true){
            alert("Felicidades! Podes pasar gratis al establecimiento");
            free = true;
        } else { 
            alert("Podes pasar al establecimiento abonando X pesos.");
        }
    } else {
        alert("Lo sentimos, no permitimos menores de edad en el establecimiento.");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(3);
