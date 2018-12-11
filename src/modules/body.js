import React, { Component } from 'react';
import BlogPost from '../components/blogpost'
class Body extends Component {
  render() {
    return (
      <div>
          <BlogPost/>
          <BlogPost/>
          <BlogPost/>
      </div>
    )
  }
}
export default Body