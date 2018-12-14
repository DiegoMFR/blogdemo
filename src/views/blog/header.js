import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <header className="blog__header">
        <div className="blog__header__container">
          <span className="flex-row">
              <h1> BLOGZILLA </h1>
              <input className="blog__header__search" type="search" placeholder="Search..." />
          </span>
        </div>
      </header>
    )
  }
}
export default Header