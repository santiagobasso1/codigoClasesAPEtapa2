import React, {useEffect}from 'react'

export default function Mensaje() {
    useEffect(() => {
        console.log('Componente montado en el DOM.');
    
        return () => {
          console.log('Componente desmontado del DOM.');
        };
      }, []); 
  return (
    <div>
      <h1>Aparezco!</h1>
    </div>
  )
}
