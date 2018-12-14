import React, { Component } from 'react';
import Header from './header'
import Body from './body'
import Footer from './footer'
import AddNewPost from '../components/blogpost/newPost'

class Blog extends Component {
  constructor(props) {
    super(props);
    const { postList } = this.props;
    this.state = {
      postList
    }
  }

  onSearch = (value) => {
    const { postList } = this.props;
    let filtered = [...postList]
    if(value) {
      filtered = postList.filter(({ title }) => title.toUpperCase().indexOf(value.toUpperCase()) > -1);
    }
    this.setState({postList: filtered});
  }

  render() {
    const { postList } = this.state;
    return (
      <div className="blog">
        <Header onSearch={this.onSearch} />
        <AddNewPost />
        <Body postList={postList} />
        <Footer />
      </div>)
  }
}
export default Blog;