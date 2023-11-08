import React, { useEffect } from 'react';

const EffectWithoutDependencies = () => {
  useEffect(() => {
    console.log('Este efecto se ejecutará después de cada renderizado.');
    return () => {
      console.log('Este efecto de limpieza se ejecutará antes de que el próximo efecto se ejecute o cuando el componente se desmonte.');
    };
  });

  return <div>Contenido del componente</div>;
};

export default EffectWithoutDependencies;
