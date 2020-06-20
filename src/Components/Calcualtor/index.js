import React from 'react';
import Button from '../Shared/Button';

export default class Calculator extends React.Component  {

  render() {
    return (
      <div className="calculator">
        <h1>Hello World</h1>
        <Button
          handleClick={() => console.log('hello')}
        >
          Hello
        </Button>
      </div>
    )
  }
}
