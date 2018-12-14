import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Header extends Component {
  handleHome = () => {
    const { history } = this.props;
    history.push('/')
  }
  handleSearch = (evt) => {
    const { onSearch } = this.props;
    onSearch(evt.target.value);
  }
  render() {
    const { readMode } = this.props;
    return (
      <header className="blog__header">
        <div className="blog__header__container">
          <span className="flex-row">
              <h1 onClick={this.handleHome}> BLOGZILLA </h1>
              {!readMode && 
              <input className="blog__header__search" type="search" placeholder="Search..." onChange={evt => this.handleSearch(evt)}/>}
          </span>
        </div>
      </header>
    )
  }
}
export default withRouter(Header)