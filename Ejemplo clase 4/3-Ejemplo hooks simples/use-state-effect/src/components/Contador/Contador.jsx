import React, { useState, useEffect } from 'react';

const Contador = () => {
    
    const [count, setCount] = useState(0);
   
    useEffect(() => {
        //Interval va dentro del useEffect, para que no se ejecute CADA VEZ que se actualiza el componente (osea que cambia el estado por ejemplo)
        const interval = setInterval(() => {
            //Cada "tick" actualiza count y le suma 1
            setCount(prevCount => prevCount + 1);
            // Incrementa el contador automáticamente cada x tiempo
    
        }, 1000);

        return () => {
            clearInterval(interval);
        };
        // Esta función se ejecutará después del primer renderizado del componente
    }, []); 

    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Contador: {count}</h1>
        </>
    )
};

export default Contador;
