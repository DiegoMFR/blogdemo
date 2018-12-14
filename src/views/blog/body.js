import React, { Component } from 'react';
import BlogPost from '../components/blogpost';

class Body extends Component {

  getPostList = () => {
    const { postList } = this.props;
    return postList.map((value) => (
      <BlogPost content={value} />
    ), this)
  }

  render() {
    return (
      <div className="blog__body">
        <div className="blog__body__container">
          {this.getPostList()}
        </div>
      </div>
    )
  }
}
export default Body