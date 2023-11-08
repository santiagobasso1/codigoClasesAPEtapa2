import React, { useEffect, useState } from 'react';

const UseEffectComponent = () => {
  const [valorEstado, setValor] = useState(0);
  //useEffect(ejecutar,dependencias)
  //Minimo se ejecuta 1 vez el useEffect
  //SI no le pasamos parametros, cada vez que se renderice el componente se ejecutará el useEffect
  useEffect(()=>{
    console.log(valorEstado)
  })
  
  // useEffect(()=>{
  //   console.log("Array parametro vacio")
  // },[])
  const sumarVariable = ()=>{
    setValor(valorEstado+1)
  }
  

  return (
    <div>
      <button onClick={sumarVariable}>+</button>
    </div>
  );
};

export default UseEffectComponent;
