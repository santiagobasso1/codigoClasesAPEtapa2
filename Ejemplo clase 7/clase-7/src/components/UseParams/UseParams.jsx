import React from 'react';
import { useParams } from 'react-router-dom';

const UseParamsComp = () => {
  // Usamos el hook useParams para acceder a los parámetros de la URL
  const { id } = useParams();
  
  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p>ID del Usuario: {id}</p>
    </div>
  );
};

export default UseParamsComp;
