import React, { Component } from 'react'
import logo from './loader.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center d-flex align-items-center justify-content-center'>
        <img width={100} className='img-fluid' src={logo} alt="loading..." />
      </div>
    )
  }
}
