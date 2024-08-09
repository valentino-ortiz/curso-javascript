let cant = prompt("¿Cuántos alumnos hay en la comisión?");
let alumTot = [];

for(i = 0; i < cant; i++){
    alumTot[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre,p) =>{
    let presente = prompt(nombre);
    if(presente === "P" || presente === "p"){
        alumTot[p][1]++;
    }
}

for(dia = 0; dia < 30; dia++){
    for(i = 0; i < alumTot.length; i++){
        tomarAsistencia(alumTot[i][0],i);
    }
}

for(i = 0; i < alumTot.length; i++){
    alert("El alumno " + alumTot[i][0] + " tuvo " + alumTot[i][1] + " presencias y " + (30 - alumTot[i][1]) + " ausencias.");
    if(((30 - alumTot[i][1]) * 30)/100) <= 0.1)
}