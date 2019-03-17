import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Body from './Body'


class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body onAddition={this.onAddition} />
      </div>
    )
  }
}

export default Calculator;
