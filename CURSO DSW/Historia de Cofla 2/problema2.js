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

for(dia = 0; dia < 5; dia++){
    for(i = 0; i < alumTot.length; i++){
        tomarAsistencia(alumTot[i][0],i);
    }   
}

for(i = 0; i < alumTot.length; i++){
    document.write(alumTot[i][0] + ": ");
    if(2 < alumTot[i][1]){
        document.write("El alumno cumplio con la asistencia. <br><br>");
    } else {
        document.write("El alumno no cumplio con la asistencia, por este mismo motivo <b style = 'color:red'>reprobo</b>.<br><br>");
    }
}   

