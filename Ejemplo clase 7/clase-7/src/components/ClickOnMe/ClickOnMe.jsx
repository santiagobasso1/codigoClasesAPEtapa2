import React from 'react'
import { useState } from 'react'
export default function ClickOnMe() {
    const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Tocaste click {contador} veces</p>
      <button onClick={()=>setContador(contador+1)}>Click</button>
    </div>
  )
}
