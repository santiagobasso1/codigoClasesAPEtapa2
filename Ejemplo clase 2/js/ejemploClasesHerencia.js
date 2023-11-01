


// Definición de la clase padre 
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, soy un animal llamado ${this.nombre}`);
    }
}












// Definición de la clase hija 
class Perro extends Animal {
    constructor(nombre, raza) {
        // Llama al constructor de la clase padre
        super(nombre);
        this.raza = raza;
    }



    ladrar() {
        console.log('¡Guau! ¡Guau!');
    }
}









// Crear una instancia de la clase hija
const miPerro = new Perro('Pol', 'Doberman');




// Llamar a los métodos
miPerro.saludar(); //Saludar lo hereda de la clase padre, por eso aunque no tenga "saludar" la clase "Perro", lo puede hacer igualmente
miPerro.ladrar();   
