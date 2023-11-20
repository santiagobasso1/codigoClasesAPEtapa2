import React, { useState } from 'react'

export default function SinUseReducer() {
    const [contador, setContador] = useState(0);
  return (
    <div>
       <p>Contador {contador}</p>
       <button onClick={()=>setContador(contador+1)}>+</button>
       <button onClick={()=>setContador(contador-1)}>-</button>
    </div>
  )
}
