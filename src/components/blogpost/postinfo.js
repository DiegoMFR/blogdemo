import React, { Component } from 'react';
class PostInfo extends Component {
  render() {
    const { model: { readTime, dateCreated } } = this.props;
    return (
      <aside className="blog__body__postinfo">
        <div>
          {dateCreated}
        </div>
        <div>
          {readTime}
        </div>
      </aside>)
  }
}
export default PostInfo;
