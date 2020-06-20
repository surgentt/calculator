import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './index';

test('renders the calculator', () => {
  const { container } = render(<Calculator/>);
  expect(container.firstChild).toHaveClass('calculator')
});
