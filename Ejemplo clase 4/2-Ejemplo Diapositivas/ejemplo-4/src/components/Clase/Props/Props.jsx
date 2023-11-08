import React, { Component } from 'react'

export default class Props extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let options = this.props.options
    return (
      <>
        <h1>Realizado con Componentes de clases</h1>
        <ul>
          {options.map(option => <li key={option}>{option}</li>)}
        </ul>
      </>

    )
  }
}
