class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false
    }
    abrirApp(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("La app se esta encendiendo.");
        } else if(this.instalada == false){
            alert("La app no se encuentra instalada en este dispositivo.");
        }
    }
    cerrarApp(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("La app se esta cerrando.");
        }else if(this.instalada == false){
            alert("La app no se encuentra instalada en este dispositivo.");
        }
    }
    instalarApp(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente.");
        } else{
            alert("La app ya está instalada.");
        }
    }
    desintalarApp(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desintalada correctamente.");
        } else if(this.instalada == false){
            alert("La app no se encuentra instalada en este dispositivo.");
        }
    }
    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b></br>
        Puntuación: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

const app = new App("16.000", "5 estrellas", "900Mb");

// app.instalarApp();
// app.abrirApp();
// app.cerrarApp();
// app.desintalarApp();

document.write(`<h3>Aplicacion 1</h3>${app.appInfo()}`)