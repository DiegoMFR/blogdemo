import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <header>
        <div> BLOGZILLA </div>
        <input type="search" placeholder="Search..."/>
      </header>
    )
  }
}
export default Header