import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('renders the an input from props', () => {
  const input = '1 + 2'
  const { getByText } = render(<Display input={input}/>);
  const inputText = getByText(input);
  expect(inputText).toBeInTheDocument();
});
