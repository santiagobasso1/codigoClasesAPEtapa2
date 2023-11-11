import React, { useState, useEffect } from 'react';

const Contador = () => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
            console.log("Interval limpiado")
        };
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
