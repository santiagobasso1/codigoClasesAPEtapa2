import React, { createContext, useContext } from 'react';

export const UsuarioContext = createContext();

export default function UsuarioProvider({ children }){
  const usuario = {
    nombre: 'Juan',
    edad: 25,
    email: 'juan@example.com',
  };

  return (
    <UsuarioContext.Provider value={usuario}>
      {children}
    </UsuarioContext.Provider>
  );
};

