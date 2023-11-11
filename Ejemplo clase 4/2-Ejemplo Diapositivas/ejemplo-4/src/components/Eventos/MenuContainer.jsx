import React, { useState } from 'react';
import Menu from './Menu';

const MenuContainer = () => {

    const [option, setOption] = useState([]);


    const handleChangeState = (opcionNueva) => {
        setOption([...option,opcionNueva]);
    };

    return (
        <div>
            <h1>Opciones:</h1>
            <ul>
                {option.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
            <Menu manejarCambioEstado={handleChangeState} />
        </div>
    );
};

export default MenuContainer;
