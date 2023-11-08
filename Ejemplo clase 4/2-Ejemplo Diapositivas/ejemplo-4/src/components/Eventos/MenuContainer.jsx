import React, { useState } from 'react';
import Menu from './Menu';

const MenuContainer = () => {
    const [options, setOptions] = useState([]);
    //Creamos nuestro manejarAgregarOpcion que lo que hace es manejar el estado, si le pasamos una opcion nueva, la agrega a las ya existentes 
    //IMPORTANTE: handleAddOption DE MENU CONTAINER NO ES EL MISMO DE MENU AUNQUE TENGAN EL MISMO NOMBRE
    const handleAddOption = (option) => {
        setOptions([...options, option]);
    };

    return (
        <div>
            <h1>Opciones:</h1>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
            <Menu onAddOption={handleAddOption} />
        </div>
    );
};

export default MenuContainer;
