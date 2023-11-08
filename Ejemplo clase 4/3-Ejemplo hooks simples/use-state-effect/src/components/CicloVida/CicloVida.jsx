import React, { useState, useEffect } from 'react';
import Mensaje from './Mensaje';

const CicloVida = () => {
  const [count, setCount] = useState(0);
  const [spawnElement,setSpawnElement] = useState(false)
  const handleSpawnElement = ()=>{
    if (spawnElement===true){
      setSpawnElement(false)
    }else{
      setSpawnElement(true)
    }
  }


  useEffect(() => {
    console.log('Count se actualizó:', count);
    // Lógica adicional que queremos ejecutar cuando el estado 'count' se actualice (recordemos que si count se actualiza ya que es un estado, el comp tambien)
  }, [count]); // El efecto se ejecutará cuando 'count' cambie

  return (
    <div>
      <h2>Componente con Ciclos de Vida</h2>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={handleSpawnElement}>Aparecer H1</button>
      {spawnElement ? <Mensaje/> : ""}
    </div>
  );
};

export default CicloVida;
