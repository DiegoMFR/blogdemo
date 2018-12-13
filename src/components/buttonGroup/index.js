import React, { Component } from 'react';
class ButtonGroup extends Component {
  
  render() {
    const { model: { items=[] }, classModifier } = this.props;
    const buttons = items.map((item, key) => (
      <button type="button" key onClick={item.onClick || null}> {item.label} </button>
    ), this)
    return (
      <div className={`buttongroup${classModifier || ''}`}>
        {buttons}
      </div>)
  }
}
export default ButtonGroup;
