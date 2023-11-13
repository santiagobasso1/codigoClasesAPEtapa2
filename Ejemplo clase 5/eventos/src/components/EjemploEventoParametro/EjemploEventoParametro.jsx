import React, { useState } from 'react';

const EjemploEventoParametro = () => {
  const [elementos, setElementos] = useState(['Elemento 1', 'Elemento 2', 'Elemento 3','Elemento 4', 'Elemento 5']);

  const deleteRow = (posicion) => {
    const nuevosElementos = [...elementos];
    //El splice se utiliza para editar posiciones particulares de un array, lo primero que le pasamos es la posición que arranca a trabajar el splice
    //Luego el segundo parametro es cuantos elementos borraremos desde ese indice
    //Luego podemos poner si queremos que agregamos en ese lugar y los siguientes si fuera requerido
    //En resumen, en este caso splice borra el elemento en la posición que le pasamos
    nuevosElementos.splice(posicion, 1);

    setElementos(nuevosElementos);
  };
  //Una función a la cual se le debe pasar un parámetro para funcionar bien
  const handleClick = (posicion, e) => {
    e.stopPropagation();
    deleteRow(posicion);
  };

  return (
    <ul>
        {/* Si ponemos en un .map (elemento,posicion) como en este caso, la posición nos devolverá que posición es del array, entonces para el key e identificarlos a cada uno nos sirve mucho */}
      {elementos.map((elemento, posicion) => (
        /* Le pasamos como parametro la posición del elemento al handleClick */
        /* Aclaración de que es lo que está debajo, es un elemento "li" el cual tiene dentro un botón al cual al darle click activa el evento "onClick"  el cual ejecutará
        "handleClick pasandole como parametros la posición y "e" que es el evento como tal, para nosotros poder utilizar el "stopPropagation", e recordemos que no se declara
        como tal sino que javascript ya entiende al ponerlo como parametros de la función flecha "(e)=>" que se trata del event*/
        <li key={posicion}>{elemento}   <button onClick={(e) => handleClick(posicion, e)}>Eliminar</button>     </li>
      ))}
    </ul>
  );
};

export default EjemploEventoParametro;
