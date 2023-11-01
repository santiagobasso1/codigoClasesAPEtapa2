


//PROMESAS |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//CON .THEN Y .CATH |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const esperarPorDosSegundos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            console.log(randomNumber)
            if (randomNumber > 0.5) {
                resolve("Pasaron 2 segundos, la promesa dio un resultado por el resolve");
            } else {
                reject("Pasaron 2 segundos, la promesa dio un resultado por el reject");
            }
        }, 2000);
    });
};

console.log("Inicio del programa");

esperarPorDosSegundos()
    .then(mensaje => {
        console.log(mensaje); // Este mensaje aparecerá después de esperar 2 segundos
        console.log("Fin del programa");
    })
    .catch(error => {
        console.error(error); // En caso de rechazo, se imprimirá el mensaje de error
        console.log("Fin del programa");
    });




//PROMESA CON ASYNC AWAIT (TRY CATCH)|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* const esperarPorDosSegundosAwait = () => {
    return new Promise((resolve, reject) => {
        //Seteamos un temporizador, solo para que vean que puede ser asincrono
        setTimeout(() => {
            //Obtenemos un valor random entre 0 y 1 con math.random()
            const randomNumber = Math.random();
            //Si este numero random es mayor que 0,5 se resuelve, sino se rechaza (si decimos que el rango es de 0 a 1 entonces al poner >0,5 tenemos 50% de que se rechace o 50% de que se resuelva)
            if (randomNumber > 0.5) {
                resolve("Pasó 1 segundo, la promesa dio un resultado por el resolve");
            } else {
                reject("Pasó 1 segundo, la promesa dio un resultado por el reject");
            }
        }, 1000);
    });
};

const ejecutarPrograma = async () => {
    //Mostramos el inicio del programa con un mensje
    console.log("Inicio del programa");
    //Try y catch se usa para capturar los errores y mostrarlos en caso de haber uno
    try {
        //Obtenemos el mensaje resultado de la promesa
        const mensaje = await esperarPorDosSegundosAwait();
        //Mostramos el mensaje, si el anterior sale mal, nos tirará un error y no llegará al console.log(mensaje)
        console.log(mensaje); // Este mensaje aparecerá después de esperar 2 segundos
    } catch (error) {
        //El catch ATRAPA el error y lo muestra por consola como un error
        console.error(error); // En caso de rechazo, se imprimirá el mensaje de error
    }
    //Mostramos el fin de la función para que vean que se espera por el await a que termine para mostrar el console.log
    console.log("Fin del programa");
};

ejecutarPrograma(); */
