import React from 'react';

export default function Example2(props) {
  /* Componente presentación, muestra visualmente los props que le llegan */
  //Cree una función "saludar" que lo unico que hace es de los props saca el nombre y lo usa para mandar un saludo!
  const saludar = () => {
    alert(`¡Hola, ${props.nombre}!`);
  };

  return (
    <div>
      <h1>Buenas noches soy {props.nombre}</h1>
      {/* Le digo que al tocar click envie el mensaje! */}
      <button onClick={saludar}>Saludar</button>
    </div>
  );
}
