import React, { Component } from 'react'
import Props from './Props'

export default class PropsContainer extends Component {
  constructor() {
    super()
  }
  render() {
    let menuOptions = ['Opt1', 'Opt2', 'Opt3']
    return (
      <div>
        <Props options={menuOptions} />
      </div>
    )
  }
}
