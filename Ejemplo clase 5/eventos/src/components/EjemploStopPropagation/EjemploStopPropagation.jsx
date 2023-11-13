import React from 'react';

const EjemploStopPropagation = () => {
  const handleClickButton = (elementoId, e) => {
    e.preventDefault();
    e.stopPropagation(); 
    console.log(`Evento del botón (HIJO) ${elementoId}`);
  };

  return (
    <ul>
      {[1, 2, 3,4,5].map((elementoId) => (
        <li key={elementoId} onClick={() => console.log(`Evento del elemento li (PADRE) ${elementoId}`)}>
          Elemento {elementoId}
          <button onClick={(e) => handleClickButton(elementoId, e)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EjemploStopPropagation;
