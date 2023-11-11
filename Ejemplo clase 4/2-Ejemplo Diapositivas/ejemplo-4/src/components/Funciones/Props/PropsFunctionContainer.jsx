import React from 'react'
import PropsFunction from './PropsFunction'
export default function PropsFunctionContainer() {
    let menuOptions = ['Opt1','Opt2','Opt3']

  return (
    <div>
      <PropsFunction menu={menuOptions}/>
    </div>
  )
}
