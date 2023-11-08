import React, { Component } from 'react'

export default class ClassState extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let options = this.props.options;
    return (
      <>
        <h1>Realizado con clases y estado</h1>
        <ul>
          {options.map(option => <li key={option}>{option}</li>)}
        </ul>
      </>
    )
  }
}
