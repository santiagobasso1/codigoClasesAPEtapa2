console.log("----------------------- EJEMPLOS VARIABLES LET Y VAR ------------------------------------")
function ejemploLet() {
    if (true) {
        let x = 10; // variable 'x' tiene alcance dentro de este bloque
        console.log(x); // imprime 10
    }

    // Error: 'x' no está definida fuera del bloque
    console.log(x);
}




function ejemploVar() {
    if (true) {
        var y = 20; // variable 'y' tiene alcance dentro de la función
        console.log(y); // imprime 20
    }

    // 'y' sigue siendo accesible fuera del bloque
    console.log(y); // imprime 20
}


//ejemploLet();
ejemploVar();