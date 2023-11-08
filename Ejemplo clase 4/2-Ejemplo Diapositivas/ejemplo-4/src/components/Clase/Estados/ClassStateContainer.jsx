import React, { Component } from 'react'
import ClassState from './ClassState'
export default class ClassStateContainer extends Component {
  constructor (){
    super()
    this.state = {
      menuOptions:['Opt1','Opt2','Opt3']
    }
  }
  render() {

    return (
      <div>
        <ClassState options={this.state.menuOptions} />
      </div>
    )
  }
}
