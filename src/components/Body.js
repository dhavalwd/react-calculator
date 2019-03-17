import React from 'react'
import math from 'mathjs'

import Screen from './Screen'
import Buttons from './Buttons'
import Button from './Button'

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mathOperations: []
    }

    this.handleClickOnButton = this.handleClickOnButton.bind(this);
    this.doCalculations = this.doCalculations.bind(this);

  }

  doCalculations() {
    let result = this.state.mathOperations.join('');
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        mathOperations: [result],
      })

      console.log(result);
    }
  }

  handleClickOnButton(e) {
    e.preventDefault();
    let value = e.target.value;

    if(value == "C") {
      this.setState((prevState) => {
        return {
          mathOperations: []
        }
      });
      return;
    }

    if(value == "=") {
      this.doCalculations();
      return;
    }

    this.setState(
      (prevState) => {
        return {
            mathOperations: prevState.mathOperations.concat(value)
        } 
      }
    )
  }

  render() {
    return (
      <div className="Body">
        <Screen display={this.state.mathOperations} />
        <Buttons>
          <div className="row">
            <div className="col">
              <Button text="C" value="C" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="%" value="%" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="√" value="√" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="÷" value="/" onClick={this.handleClickOnButton} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button text="7" value="7" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="8" value="8" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="9" value="9" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="×" value="*" onClick={this.handleClickOnButton} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button text="4" value="4" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="5" value="5" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="6" value="6" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="-" value="-" onClick={this.handleClickOnButton} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button text="1" value="" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="2" value="2" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="3" value="3" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="+" value="+" onClick={this.handleClickOnButton} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button text="0" value="0" onClick={this.handleClickOnButton} />
            </div>
            <div className="col">
              <Button text="." value="." onClick={this.handleClickOnButton} />
            </div>
            <div className="col-6">
              <Button text="=" value="=" onClick={this.handleClickOnButton} />
            </div>
          </div>
        </Buttons>
      </div>
    )
  }
}

export default Body;
