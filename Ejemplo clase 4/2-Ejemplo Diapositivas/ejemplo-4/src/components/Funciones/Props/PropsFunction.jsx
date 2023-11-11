import React from 'react'

export default function PropsFunction({ menu }) {
    return (
        <>
            <h1>Realizado con funciones</h1>
            <ul>
                {menu.map(option => <li key={option}>{option}</li>)}
            </ul>
        </>
    )
}
