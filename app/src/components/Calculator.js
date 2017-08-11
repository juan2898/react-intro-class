import React, { Component } from 'react'
import calculatorImg from './calculator.png'

class Calculator extends Component {

constructor() {
    super();

    this.state = {
        header: 'Bro, this calc do not work',
        display: "0",
        operator: null,
        tempNum: 0 

    }
}

updateHeader(e) {
    var value = e.target.value;
    this.setState({
        header: value
    })
}

onPressNum(num) {
    this.setState({
        display: this.state.display + num
        
    })
}

onPressClear() {
    this.setState({
        display: "0",
        operator: null
    })
}

setDisplay(num) {
    var newNum = (this.state.display === "0") ?  num : this.state.display + num

    this.setState({
        display: (this.state.display.length < 13) ? newNum : this.state.display
        
    })
}

setOperator(operator) {
    (this.state.operator == null) ? this.setState({ tempNum: parseInt(this.state.display), display: '0', operator: operator }) : console.log('operator is already set');
    }

calculate() {
  if ( this.state.operator === '' ) { 
      return;
    }
  var result = 0;


  switch ( this.state.operator ) {
    case '+':
      result = parseInt(this.state.tempNum) + parseInt(this.state.display);
      break;
    case '-':
      result = parseInt(this.state.tempNum) - parseInt(this.state.display);
      break;
    case '*':
      result = parseInt(this.state.tempNum) * parseInt(this.state.display);
      break;
    case '/':
      result = parseInt(this.state.tempNum) / parseInt(this.state.display);
      break;
    default:
      break;
  }

  this.setState({ 
      display: result,
      operator: null
    });

}

    render() {
        return (
            <div id="calculator-container">
                <input id="header-input" onChange={ (e) => this.updateHeader(e) } />
                <h1 id="header"> {this.state.header}</h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                    <div className="output">
                        <span className="total">
                            {this.state.display}
                        </span>
                    </div>

                    <div className="btn clear" onClick={ (e) => this.onPressClear()}></div>

                    <div className="btn zero" onClick={ (e) => this.setDisplay('0')}></div>
                    <div className="btn one" onClick={ (e) => this.setDisplay('1')}></div>
                    <div className="btn two" onClick={ (e) => this.setDisplay('2')}></div>
                    <div className="btn three" onClick={ (e) => this.setDisplay('3')}></div>
                    <div className="btn four" onClick={ (e) => this.setDisplay('4')}></div>
                    <div className="btn five" onClick={ (e) => this.setDisplay('5')}></div>
                    <div className="btn six" onClick={ (e) => this.setDisplay('6')}></div>
                    <div className="btn seven" onClick={ (e) => this.setDisplay('7')}></div>
                    <div className="btn eight" onClick={ (e) => this.setDisplay('8')}></div>
                    <div className="btn nine" onClick={ (e) => this.setDisplay('9')}></div>
                    <div className="btn equal" onClick={ (e) => this.calculate('')}></div>
                    <div className="btn multiply" onClick={ (e) => this.setOperator('*')}></div>
                    <div className="btn divide" onClick={ (e) => this.setOperator('/')}></div>
                    <div className="btn subtract" onClick={ (e) => this.setOperator('-')}></div>
                    <div className="btn add" onClick={ (e) => this.setOperator('+')}></div>
                </div>
            </div>
        )
    }
}

export default Calculator
