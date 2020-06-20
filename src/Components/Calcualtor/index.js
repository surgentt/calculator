import React from 'react';
import './Calculator.css';
import Display from './Display';
import Button from '../Shared/Button';

export default class Calculator extends React.Component  {
  state = {
    input: '1',
  };

  addToInput = (textInput) => {
    const newInput = this.state.input.concat(textInput);
    this.setState({ input: newInput });
  }

  render() {
    return (
      <div className="calculator">
        <Display
          input={ this.state.input }
        />
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>x</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>=</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
      </div>
    )
  }
}
