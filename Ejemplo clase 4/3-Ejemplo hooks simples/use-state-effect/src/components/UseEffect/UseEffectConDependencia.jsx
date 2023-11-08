import React, { useEffect, useState } from 'react';

const EffectWithDependencies = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Este efecto se ejecutará solo después del primer renderizado y cuando "count" cambie.');
    return () => {
      console.log('Este efecto de limpieza se ejecutará antes de que el próximo efecto se ejecute o cuando el componente se desmonte.');
    };
  }, [count]);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default EffectWithDependencies;
