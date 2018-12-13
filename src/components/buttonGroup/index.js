import React, { Component } from 'react';
class ButtonGroup extends Component {
  
  render() {
    const { model: { items=[] } } = this.props;
    const buttons = items.map(item => (
      <button type="button" onClick={item.onClick || null}> {item.label} </button>
    ), this)
    return (
      <div>
        {buttons}
      </div>)
  }
}
export default ButtonGroup;
