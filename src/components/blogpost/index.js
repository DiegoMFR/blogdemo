import React, { Component } from 'react'
import PostInfo from './postinfo'
import ButtonGroup from '../buttonGroup'
import Actions from '../../data/actions'

class BlogPost extends Component {
  constructor(props) {
    super(props);
    const buttonGroupModel = {
      items: [
        { label: 'Read More...', onClick: this.handleRead },
        { label: 'Delete', onClick: this.handleDelete },
      ]
    }
    this.state = { buttonGroupModel };
  }

  handleDelete = () => {
    const { content: { id } } = this.props;
    Actions.removePost(id);
  }
  render() {
    const { content: { imageName, title, body, readTime, dateCreated } } = this.props;
    const { buttonGroupModel } = this.state;
    const postInfoModel = { readTime, dateCreated }
    return (
      <article>
        <section className="blog__body__post">
        <span className="flex-row">
          <h1>
            {title}
          </h1>
          <PostInfo model={postInfoModel}/>
        </span>
        <img className="blog__body__post__img" alt="img1" src={require(`../../images/${imageName}`)}/>
        </section>
        <section>
          <div>
            <p>
              {body}
            </p>
          </div>
        </section>
        <ButtonGroup model={buttonGroupModel} />
      </article>
    )
  }
}
export default BlogPost