import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render a link to captec', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/Captec/i);
    expect(linkElement).toBeInTheDocument();
  });
});
