/* global it, expect */
import React from 'react';
import ReactDOM from 'react-dom';
import AWish4Me from '../components/AWish4Me';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AWish4Me />, div);
  ReactDOM.unmountComponentAtNode(div);
});
