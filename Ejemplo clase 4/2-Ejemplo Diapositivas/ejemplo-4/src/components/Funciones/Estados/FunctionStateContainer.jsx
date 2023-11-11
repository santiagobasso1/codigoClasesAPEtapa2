import React, { useEffect, useState } from 'react'
import FunctionState from './FunctionState';

export default function FunctionStateContainer() {
  const [opciones, setOpciones] = useState([]);



  useEffect(() => {
    setOpciones(['Opt1', 'Opt2', 'Opt3', 'Opt4', 'Opt5'])
  }, [])


  return (
    <FunctionState opciones={opciones} />
  )
}
