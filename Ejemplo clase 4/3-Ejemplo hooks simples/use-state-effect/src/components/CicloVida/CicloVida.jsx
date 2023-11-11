import React, { useState, useEffect } from 'react';
import Mensaje from './Mensaje';
import Contador from '../Contador/Contador';

const CicloVida = () => {
  const [count, setCount] = useState(0);


  const [spawnElement, setSpawnElement] = useState(false)

  const handleSpawnElement = () => {
    if (spawnElement) {
      setSpawnElement(false)
    } else {
      setSpawnElement(true)
    }
  }


  useEffect(() => {
    console.log('Count se actualizó:', count);
  }, [count]);


  return (
    <div>
      <h1>Componente con Ciclos de Vida</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={handleSpawnElement}>Aparecer H1</button>
      {spawnElement ? <Contador /> : ""}
      
    </div>
  );
};

export default CicloVida;
