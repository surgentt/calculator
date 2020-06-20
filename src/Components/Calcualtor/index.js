import React from 'react';
import Display from './Display';
import Button from '../Shared/Button';

export default class Calculator extends React.Component  {
  state = {
    input: '1',
  };

  render() {
    return (
      <div className="calculator">
        <Display
          input={ this.state.input }
        />
        <Button
          handleClick={() => console.log('hello')}
        >
          Hello
        </Button>
      </div>
    )
  }
}
