import React from 'react';
import {shallow} from 'enzyme';
import Blog from './';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header'
import Body from './body'
import Footer from './footer'

configure({ adapter: new Adapter() });

it('renders with empty data', () => {
  const div = document.createElement('div');
  let wrapper = shallow(<Blog postList={[]}/>, div);
  expect(wrapper.find(Header));
  expect(wrapper.find(Body));
  expect(wrapper.find(Footer));
});