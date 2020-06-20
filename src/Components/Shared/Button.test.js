import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render a button', () => {
    const {getByText} = render(<Button handleClick={() => {
    }}>Hello</Button>);
    const buttonText = getByText(/Hello/i);
    expect(buttonText).toBeInTheDocument();
  });
});