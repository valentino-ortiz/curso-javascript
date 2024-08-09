const materias = {
    fisica: ["Perez","Pedro", "Micaela", "Valentino", "Juan"],
    quimica: ["Rodriguez","Micaela", "Valentino", "Juan"],
    matematica:["Ortiz","Pedro", "Micaela", "Valentino", "Juan"],
    historia: ["Trevisan","Pedro", "Juan"]
}

const inscribirAlumno = (alumno, materia) => { 
    alumnos = materias[materia];
    let mat = materia;
    document.write(alumnos);
    if (alumnos.length > 21){
        document.write("</br>No se pudo inscribir al alumno.");
    }else{
        materias[mat].push(alumno);
        document.write("</br>El alumno fue inscripto correctamente");
    }
}

inscribirAlumno("Joaquin","fisica");
document.write("</br>" + materias['fisica']);