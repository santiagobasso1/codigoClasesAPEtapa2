import React from 'react';
//onAddOption es una función pasada por props (Callback)
const Menu = ({manejarCambioEstado}) => {
  

  const handleAddOption = () => {
    manejarCambioEstado('Nueva Opción');
  };

  return (
    <div>
        {/* Le decimos que al tocar click llame a nuestra función la cual llamrá al callback */}
      <button onClick={handleAddOption}>Agregar Opción</button>
    </div>
  );
};

export default Menu;

