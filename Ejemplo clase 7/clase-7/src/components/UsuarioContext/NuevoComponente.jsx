import React, { useContext } from 'react';
import { UsuarioContext } from './UsuarioContext';
export default function NuevoComponente() {
  const usuario = useContext(UsuarioContext)

  return (
    <div>
      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad}</p>
      <p>Email: {usuario.email}</p>
    </div>
  );
};
