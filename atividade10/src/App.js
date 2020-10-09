import React, { Component } from 'react'
import './App.css'
import Navigate from './components/Navigate'

import Soma from './components/Soma'
import Maior from './components/Maior'
import Multiplicacao from './components/Multiplicacao'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <div className='line'>
          <Navigate/>
        </div>
        <div className='line'>
          <Maior/>
          <Multiplicacao/>
          <Soma/>
        </div>
      </div>
    )
  }
}
