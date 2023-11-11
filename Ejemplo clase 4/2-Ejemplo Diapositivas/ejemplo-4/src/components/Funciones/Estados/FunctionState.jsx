import React from 'react'

export default function FunctionState({ opciones }) {
    return (
        <>
            <h1>Realizado con funciones y estado</h1>
            <ul>
                {opciones.map(option => <li key={option}>{option}</li>)}
            </ul>
        </>
    )
}
