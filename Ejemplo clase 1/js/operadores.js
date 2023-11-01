console.log("----------------------- EJEMPLOS OPERADORES ------------------------------------")

let concatenacion = "hola " + "bienvenidos!"; //Concatena "hola" con "bienvenidos"
let suma = 5 + 2; //Al no ser textos, los suma
let pesadilla = "hola" + 65
let pesadilla2 = "2" + 2
console.log(concatenacion)


//AND SE TIENEN QUE CUMPLIR LOS 2 O LOS QUE HAYA
//&& AND
if (10<25 && 0==0){
    console.log("Operador AND DIO VERDADERO");
}

//|| OR
//AL MENOS 1 DEBE CUMPLIRSE
if (1<0 || 0<1){
    console.log("Operador OR DIO VERDADERO")
}

console.log(typeof(concatenacion))
console.log(typeof(suma))
console.log(typeof({suma:5}))
console.log(typeof([2,2,3,4]))
console.log(typeof(true))

//= ASIGNACION let santiago = 24
//== IGUAL 0 == "0"
//=== ESTRICTAMENTE IGUAL 0 === 0

//Comparación:
console.log("3" === 3)
console.log(3 === 3)
console.log(3>4)
console.log(3>=3)
console.log(3<4)
console.log(3<=4)