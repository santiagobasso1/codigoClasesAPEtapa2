console.log("----------------------- EJEMPLO MANEJO DEL DOM ------------------------------------")


const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    //Consultamos el DOM
    let nombre = document.getElementById('nombre').value;
    document.getElementById('nombre').value = ""
    let email = document.getElementById('email').value;
    document.getElementById('email').value = ""
    let lenguajes = document.getElementById('lenguajes').value;
    document.getElementById('lenguajes').value = ""
    let consulta = document.getElementById('textAreaConsulta').value;
    document.getElementById('textAreaConsulta').value = ""
    //Modificamos el dom
    document.getElementById("textoResultado").innerText = "Nombre: "+nombre+" Email: "+email+" Lenguajes: "+lenguajes+" Consulta: "+consulta
})


