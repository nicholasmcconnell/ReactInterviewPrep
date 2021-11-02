import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

//Arrange
afterEach(cleanup);
it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button label='testlabel' />, div)
});

it('renders button correctly', () => {
    const { getByTestId } = render(<Button label='testlabel' />);
    expect(getByTestId('button')).toHaveTextContent('testlabel');
});

it('renders save button correctly', () => {
    const { getByTestId } = render(<Button label='save' />);
    expect(getByTestId('button')).toHaveTextContent('save');
});

it('matches snapshot', () => {
    const tree = renderer.create(<Button label='save' />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('matches snapshot 2', () => {
    const tree = renderer.create(<Button label='click me please' />).toJSON();
    expect(tree).toMatchSnapshot();
});


//Act

//Assert