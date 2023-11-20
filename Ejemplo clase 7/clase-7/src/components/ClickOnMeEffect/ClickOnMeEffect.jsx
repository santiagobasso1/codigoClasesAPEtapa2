import React from 'react'
import { useState, useEffect } from 'react'
export default function ClickOnMeEffect() {
    const [contador, setContador] = useState(0);

    //Al no ponerle nada, cada que se recargue la pagina se vuelve a ejecutar el useEffect
    useEffect(() => {
        document.title=`Clickeaste ${contador} veces`
    },[contador]);


    return (
        <div>
            <p>Tocaste click {contador} veces</p>
            <button onClick={() => setContador(contador + 1)}>Click</button>
        </div>
    )
}
