import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <img src={loading} alt="" />
    )
  }
}

export default Spinner