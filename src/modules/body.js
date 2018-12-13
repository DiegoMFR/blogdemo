import React, { Component } from 'react';
import BlogPost from '../components/blogpost';

class Body extends Component {

  render() {
    const { data } = this.props;
    const posts = data.map((value, index) => (
      <BlogPost content={value} />
    ), this)
    return (
      <div className="blog__body">
        <div className="blog__body__container">
          {posts}
        </div>
      </div>
    )
  }
}
export default Body