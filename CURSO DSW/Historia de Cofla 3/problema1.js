class Celular{
    constructor(color,peso,tamaño,resCam,memRam){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = resCam;
        this.memoriaRam = memRam;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido === false){
            alert("El celular se está prendiendo.");
            this.encendido = true;
        } else {
            alert("El celular se está apagando.");
        }
    }
    reinciarCelular(){
        if(this.encendido == true){
            alert("El celular se está reiniciando.");
        } else {
            alert("El celular se encuentra apagado.");
        }        
    }
    tomarFoto(){
        alert(`Foto tomada en una resuloción de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`Video grabado en una resuloción de: ${this.resolucionDeCamara}`);
    }
    mostrarInformacion(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de Video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,resCam,memRam,resCamExtra){
        super(color,peso,tamaño,resCam,memRam);
        this.resolucionDeCamaraExtra = resCamExtra;
    }
    grabarVideoLento(){
        alert("Estas grabando un video en cámara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    mostrarInformacionAltaGama(){
        return `${this.mostrarInformacion()}Resolucion Camara Extra: <b>${this.resolucionDeCamaraExtra}</b></br>`;
    }
}

// const celular1 = new Celular("Rojo", "150gr", "5'", "HD", "1GB");
// const celular2 = new Celular("Negro", "155gr", "5.4'", "Full HD", "2GB");
// const celular3 = new Celular("Blanco", "146gr", "5.9'", "Full HD", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reinciarCelular();
// celular1.presionarBotonEncendido();

// document.write(`<h3>Celular 1</h3>${celular1.mostrarInformacion()} 
// <h3>Celular 2</h3>${celular2.mostrarInformacion()}
// <h3>Celular 3</h3>${celular3.mostrarInformacion()}
// `);

const celular1 = new CelularAltaGama("Rojo", "130gr", "5.2'", "4K", "3GB", "Full HD");
const celular2 = new CelularAltaGama("Negro", "142gr", "6'", "4K", "4GB", "HD");

document.write(`<h3>Celular 1 - Alta Gama</h3>${celular1.mostrarInformacionAltaGama()}
<h3>Celular 2 - Alta Gama</h3>${celular2.mostrarInformacionAltaGama()}`);