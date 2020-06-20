import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Calculator from './index';

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('Calculator', () => {
  it('should have class calculator', () => {
    const { container } = render(<Calculator/>);
    expect(container.firstChild).toHaveClass('calculator')
  })

  it('should render calculator inside a div tag', () => {
    const wrapper = shallow(<Calculator/>)
    const calculator = wrapper.find('div')
    expect(calculator).toHaveLength(6)
  })

  describe('Component (Unit)', () => {
    describe('#addNumToInput', () => {
      const wrapper = shallow(<Calculator/>);
      it('should append a text input to the input state', () => {
        expect(wrapper.state('input')).toBe('');
        wrapper.setState({ input: '1+' });
        wrapper.instance().addNumToInput('2');
        expect(wrapper.state('input')).toBe('1+2');
      });
    })

    describe('#handleMath', () => {
      it('should include a running total of the operations thus far with total', () => {
        const wrapper = shallow(<Calculator/>);
        expect(wrapper.state('input')).toBe('');
        wrapper.setState({ input: '1+' });
        wrapper.instance().handleMath('2');
        expect(wrapper.state('input')).toBe('1+2');
      });

      it('should change x to *', () => {
        const wrapper = shallow(<Calculator/>);
        expect(wrapper.state('input')).toBe('');
        wrapper.setState({ input: '2' });
        wrapper.instance().handleMath('x');
        expect(wrapper.state('input')).toBe('2*');
      })
    })

    describe('#handleEquals', () => {
      const wrapper = shallow(<Calculator/>);
      it('should clear the running total but still display it.', () => {
        expect(wrapper.state('input')).toBe('');
        wrapper.setState({ input: '8+8' });
        wrapper.instance().handleEquals();
        expect(wrapper.state('input')).toBe('');
        expect(wrapper.state('total')).toBe(16);
      });
    })

    describe('#clear', () => {
      const wrapper = shallow(<Calculator/>);
      it('should clear the input state', () => {
        expect(wrapper.state('input')).toBe('');
        wrapper.setState({ input: '1 + 2' });
        wrapper.instance().clear();
        expect(wrapper.state('input')).toBe('');
        expect(wrapper.state('total')).toBe(0);
      });
    });
  });
})
