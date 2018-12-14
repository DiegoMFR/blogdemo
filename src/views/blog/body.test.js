import React from 'react';
import ReactDOM from 'react-dom';
import Body from './body';

it('renders with empty data', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Body data={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});