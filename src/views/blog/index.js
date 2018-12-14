import React, { Component } from 'react';
import Header from './header'
import Body from './body'
import Footer from './footer'
import AddNewPost from '../components/blogpost/newPost'

class Blog extends Component {
 
  render() {
    const { postList } = this.props;
    return  (
      <div className="blog">
        <Header />
        <AddNewPost />
        <Body postList={postList} />
        <Footer />
      </div>)
  }
}
export default Blog;