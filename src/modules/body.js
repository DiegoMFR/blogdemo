import React, { Component } from 'react';
import BlogPost from '../components/blogpost'
class Body extends Component {
  render() {
    return (
      <div className="blog__body">
        <div className="blog__body__container">
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </div>
    )
  }
}
export default Body