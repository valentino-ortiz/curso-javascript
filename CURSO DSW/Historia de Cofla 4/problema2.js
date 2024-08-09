const obtenerInformacion = (materia) =>{
    materias ={
        fisica: ["Perez","Pedro", "Micaela", "Valentino", "Juan"],
        quimica: ["Rodriguez","Micaela", "Valentino", "Juan"],
        matematica:["Ortiz","Pedro", "Micaela", "Valentino", "Juan"],
        historia: ["Trevisan","Pedro", "Juan"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else{
        return materias;
    }
}

const mostrarInformacion = (materia) =>{
    let informacion = obtenerInformacion(materia);
    if (informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();            //Borra el primer elemento del array
        document.write(`Materia: ${informacion[1]}</br>Profesor de esta materia: <b style="color: red;">${profesor}</b></br>Alumnos inscriptos en esta materia: <b style="color: blue;">${informacion[0]}</b></br></br>`);
    }else{
        document.write("La materia ingresada no existe en el sistema.");
    }
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("historia");
mostrarInformacion("matematica");

const cantMatAlum = (alumno) =>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cant = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cant ++;
            clasesPresentes.push(" " + info);     //agrega un elemento al array
        }
    }
    return `<b style='color:blue'>${alumno}</b> está en <b>${cant} clases</b></br>
    Materias que cursa: <b style="color:green">${clasesPresentes}</b></br></br>`;
}

document.write(cantMatAlum("Micaela"));
document.write(cantMatAlum("Valentino"));