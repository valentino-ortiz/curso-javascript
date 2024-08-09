class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.desc = `Soy ${this.especie}, tengo ${this.edad} años de edad, y soy de color ${this.color}`;
    }
    verDesc(){
        document.write(this.desc);
    }
    /*ladrar(){
        if(this.especie === "Perro"){
            document.write("WOW <br>");
        } else{
            document.write(`Este animal no puede ladrar ya que es un ${this.especie} <br>`);
        }
    } */
}

class perro extends animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    static ladrar(){                // static sirve para un metodo que puede ser usado antes de que se defina el objeto
        document.write("WAW");
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro1 = new perro("Perro",5,"Negro","Doberman");
const gato = new animal("Gato",2,"Blanco");
const pajaro = new animal("Pajaro",3,"Verde");

// perro1.verDesc();
// perro1.ladrar();

// perro.ladrar();

perro1.setRaza = prompt("Ingrese la nueva raza: ");
document.write(perro1.getRaza);
