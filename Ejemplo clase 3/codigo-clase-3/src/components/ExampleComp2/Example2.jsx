import React from 'react';

export default function Example2(props) {
  const saludar = () => {
    alert(`¡Hola, ${props.nombre}!`);
  };

  return (
    <div>
      <h1>DNI: {props.dni}</h1>
      <h1>Buenas noches soy {props.nombre}</h1>
      <h2>Mi apellido es {props.apellido}</h2>
      {/* Le digo que al tocar click envie el mensaje! */}
      <button onClick={saludar}>Saludar</button>
    </div>
  );
}
