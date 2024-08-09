const materias = {
    fisica: [90,6,3, "Física"],       //Estructura --> 0: porcentaje de asistencia; 1: promedio de notas; 2: cantidad de tps
    matematica: [84,8,2,"Matemática"],
    logica: [92,8,4,"Lógica"],
    quimica: [96,8,4,"Química"],
    calculo: [91,6,3,"Cálculo"],
    programacion: [79,7,4,"Programación"],
    biologia: [75,9,2,"Biología"],
    bbdd: [98,9,1,"Base de Datos"],
    algebra: [100,10,4,"Álgebra"]
}

const aprobacion = () =>{
    for(materia in materias){
        let desTps = false; desAsis = false; desProm = false;
        let asistencia = materias[materia][0];
        console.log(materias[materia][3]);
        if (asistencia >= 90){
            let promedio = materias[materia][1];
            if(promedio >= 7){
                let tps = materias[materia][2];
                if(tps >= 3){
                    console.log(`%c   Materia APROBADA`, "color:green");
                }else{
                    desTps = true;
                }
            }else{
                desProm = true;
            }
        } else{
            desAsis = true;
        }
        let desaprobado = "Materia DESAPROBADA por:";
        if (desAsis == true && desTps == false && desProm == false){
            desaprobado = desaprobado + "INASISTENCIA";
        }   //Se puede hacer mas complejo, esta incompleto...
        }
    }
 
aprobacion();

