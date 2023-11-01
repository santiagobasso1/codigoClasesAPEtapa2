let numero = 10;
let string = "Argentina Programa 4.0";
let booleano = true;
let arreglo = [0, 1, 2, 3, 4, 5, 6];

let persona = {
    nombre: "Santiago",
    apellido: "Basso"
}


//Cambio el valor de persona, reemplazo su valor por el siguiente:
persona = ["Santiago", "Basso"]

//Nuevamente cambio su valor, esto me lo permite porque es una variable y el tipo de dato no importa porque javascript es debilmente tipado
persona = { nombre: "Santiago", apellido: "Basso" }

//Creando una matriz:
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ['tree', 795, [0, 1, 2]];

//Matriz 3x3:
const arrayMultiDimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//Asi se accede a los elementos de un array de mas de 1 dimensión
console.log(arrayMultiDimensional[0][1])


//DESTRUCTOR | Deconstructor ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//Saco nombre y apellido del objeto persona
const { nombre, apellido } = persona
//Muestro estos valores, nombre y apellido ahora son constantes declaradas, puedo usar nombre y/o apellido para mostrarlas
console.log(nombre, apellido)


//CONDICIONALES|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
if (shopping[0] == "bread") {
    console.log("Bread está en la pos 0 del array shopping")
} else {
    console.log("Bread no está en la pos 0 del array")
}

//BACKTICKS ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
console.log(`Mi nombre es: ${persona.nombre}`)


//FUNCION FLECHA Y VALORES POR DEFECTO ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const cubed = (num) => {
    return num ** 3
}
console.log(cubed(2))

const potencia = (num1, num2 = 3) => {
    return num1 ** num2
}

//Si no pongo nada solo hará 10 al cubo
console.log(potencia(10))
//En cambio si pongo algo para num2 lo elevará al numero que ponga despues de la coma
console.log(potencia(2,5))


console.log("Al no pasarle num2 a 'potencia' entonces como le di un valor por defecto (num2=3) tomará a num2 como 3, resultado: " + potencia(2))


//SWITCH |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//Si quieren probar el switch con el prompt, borre la linea que dice "const opcion = 1;" y descomente la linea que tiene el prompt questá abajo de este comentario
//const opcion = parseInt(prompt("Ingrese un numero"));
const opcion = 1;

switch (opcion) {
    case 1:
        console.log("Ha seleccionado el 1")
        break;
    case 2:
        console.log("Ha seleccionado el 2")
        break;
    default:
        console.log("No ha seleccionado una opción valida")
        break;
}



//EJEMPLO DE ASINCRONISMO TRAYENDO DATOS DE USUARIOS DESDE UNA API ||||||||||||||||||||||||||||||||||||||||||||||||||||||||
async function obtenerDatosDeUsuarios() {
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        let datos = await respuesta.json();
        console.log('Datos de usuarios:', datos);
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }
}
//Probablemente le aparezca esta información al final del console.log ya que es asincrono, por lo cual demorará en ejecutarse
obtenerDatosDeUsuarios();


// Función que toma un número y un callback|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//Esta funcion toma un numero y un callback, este callback es una función en si que se le pasa por parámetro

function usandoCallback(numero, callback) {
    //El numero que le pasamos solo lo multiplica por 2
    var resultado = numero * 2;
    // Llama al callback con el resultado, este callback recordemos es una función, por lo que estamos llamando a esa función 
    callback(resultado);
}

// Esta función lo unico que realiza es mostrar un resultado que le pasamos por parámetro


function mostrarResultado(resultado) {
    console.log('El resultado es: ' + resultado);
}

//Como ven finalmente llamo a la primer función que lo que hace es multiplicar el numero que le pasamos en 5
//y luego hace lo que le pasemos como segunda función, en este caso le paso mostrarResultado, que recordemos lo que hace
//es mostrar simplemente el resultado sin más

usandoCallback(5, mostrarResultado);


//OPERADOR SPREAD |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combina los elementos de array1 y array2 en un nuevo array con spread
const arrayCombinado = [...array1, ...array2];

console.log(arrayCombinado);

function sumarElementos(...elementos) {
    let suma = 0;
    for (let i = 0; i < elementos.length; i++) {
        suma += elementos[i];
    }
    return suma;
}

const resultado = sumarElementos(1, 2, 3, 4, 5);
console.log(resultado); 
