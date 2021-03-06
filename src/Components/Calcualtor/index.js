import React from 'react';
import './Calculator.css';
import Display from './Display';
import Button from '../Shared/Button';

function safeEval(str) {
  let safeInput = str;
  if (stringEndsInMath(safeInput)) {
    safeInput = safeInput.slice(0, -1);
  }
  let total;
  try {
    // eslint-disable-next-line no-eval
    total = eval(safeInput);
  } catch (error) {
    if (error.message === 'Unexpected end of input') {
      total = 'NaN';
    } else {
      throw (error);
    }
  }
  return total
}

function stringEndsInMath(str) {
  return ['+', '-', '/', '*'].includes(str.slice(str.length - 1))
}

export default class Calculator extends React.Component  {
  state = {
    input: '',
    total: 0,
  };

  addNumToInput = (textInput) => {
    const newInput = this.state.input.concat(textInput);
    this.setState({ input: newInput });
  }

  handleMath = (input) => {
    if (input === 'x') {
      input = '*';
    }

    const newInput = this.state.input.concat(input);
    const total = safeEval(newInput);

    this.setState({ input: newInput, total })
  }

  handleEquals = () => {
    const total = safeEval(this.state.input);
    this.setState({ input: '', total });
  }

  clear = () => {
    this.setState({ input: '', total: 0 });
  }

  render() {
    return (
      <div className="calculator">
        <Display
          input={ this.state.input }
          total={ this.state.total }
        />
        <div className="row">
          <Button handleClick={this.addNumToInput}>7</Button>
          <Button handleClick={this.addNumToInput}>8</Button>
          <Button handleClick={this.addNumToInput}>9</Button>
          <Button handleClick={this.handleMath}>x</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addNumToInput}>4</Button>
          <Button handleClick={this.addNumToInput}>5</Button>
          <Button handleClick={this.addNumToInput}>6</Button>
          <Button handleClick={this.handleMath}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addNumToInput}>1</Button>
          <Button handleClick={this.addNumToInput}>2</Button>
          <Button handleClick={this.addNumToInput}>3</Button>
          <Button handleClick={this.handleMath}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addNumToInput}>0</Button>
          <Button handleClick={this.addNumToInput}>.</Button>
          <Button handleClick={this.handleEquals}>=</Button>
          <Button handleClick={this.handleMath}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.clear}>Clear</Button>
        </div>
      </div>
    )
  }
}
