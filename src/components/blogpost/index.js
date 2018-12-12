import React, { Component } from 'react';
import PostInfo from './postinfo';
class BlogPost extends Component {
  constructor() {
    super();
    this.imageName = 'post.png';
  }
  render() {
    return (
      <article>
        <section className="blog__body__post">
        <span className="flex-row">
          <h1>
            Cool Blog Post
          </h1>
          <PostInfo />
        </span>
        <img className="blog__body__post__img" alt="img1" src={require(`../../images/${this.imageName}`)}/>
        </section>
        <section>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </article>
    )
  }
}
export default BlogPost