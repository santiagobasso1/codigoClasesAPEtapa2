
import React, { useState } from 'react';
import Example2 from '../ExampleComp2/Example2';

export default function Example() {
  /* Componente contenedor, se encarga del uso de estados, datos y no tan enfocado a lo visual */
  const [nombreUsuario, setNombreUsuario] = useState(null);

  const solicitarNombre = () => {
    const nombre = prompt("Ingrese su nombre");
    setNombreUsuario(nombre);
  };

  return (
    <>
      {nombreUsuario ? (
        <Example2 nombre={nombreUsuario} />
      ) : (
        <button onClick={solicitarNombre}>Ingresar Nombre</button>
      )}
    </>
  );
}
