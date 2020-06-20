import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

describe('Display', () => {
  it('should render the an input from props', () => {
    const input = '1 + 2'
    const { getByText } = render(<Display input={input} total={3}/>);
    const inputText = getByText(input);
    expect(inputText).toBeInTheDocument();
  });

  it('should show the running total of the operation so far.', () => {
    const total = 3;
    const {getByText} = render(<Display input={'1 + 2'} total={total}/>);
    const totalText = getByText('3');
    expect(totalText).toBeInTheDocument();
  });
});