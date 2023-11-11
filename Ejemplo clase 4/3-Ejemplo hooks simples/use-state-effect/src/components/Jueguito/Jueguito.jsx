import React, { useEffect, useState } from 'react';

const JuegoAdivinaNumero = () => {
  const [numeroAleatorio] = useState(Math.floor(Math.random() * 5) + 1);
  const [numeroIngresado, setNumeroIngresado] = useState('');
  const [ganador, setGanador] = useState(false);

  const manejarCambioNumero = (e) => {
    setNumeroIngresado(e.target.value);
  };

  const verificarNumero = () => {
    if (parseInt(numeroIngresado) === numeroAleatorio) {
      setGanador(true);
    } else {
      setGanador(false)
    }
  };
  useEffect(() => {
    if (ganador) {
      console.log("GANASTE!")
    }
  }, [ganador])
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Juego de Adivina el Número</h1>
      <p>Ingresa un número entre 1 y 5:</p>
      <input
        type="number"
        value={numeroIngresado}
        onChange={manejarCambioNumero}
      />
      <button onClick={verificarNumero}>Verificar</button>
      <p>{ganador ? "ganaste!!" : "sigue intentando!"}</p>
    </div>
  );
};

export default JuegoAdivinaNumero;