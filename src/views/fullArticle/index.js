import React, { Component } from 'react'
import PostInfo from '../components/blogpost/postinfo'
import ButtonGroup from '../components/buttonGroup'
import Actions from '../../data/actions'
import { withRouter } from 'react-router-dom'

class FullArticle extends Component {
  constructor(props) {
    super(props);
    const { post: { imageName, title, body, readTime, dateCreated }, editMode = false } = this.props;
    this.state = { imageName, title, body, readTime, dateCreated, editMode };
  }

  buildButtonGroupModel() {
    const { editMode } = this.state;
    let items = [
      { label: 'Delete', onClick: this.handleDelete },
    ]
    editMode ?
      items = [...items, { label: 'Save and Close', onClick: this.handleSave }] :
      items = [...items, { label: 'Edit', onClick: this.handleEdit }];
    return { items };
  }

  handleDelete = () => {
    const { post: { id } } = this.props;
    Actions.removePost(id);
  }

  handleEdit = () => {
    this.setState({ editMode: true });
  }
  
  handleSave = () => {
    const { history, post: { id } } = this.props;
    const { imageName, title, body, readTime, dateCreated } = this.state;
    Actions.addPost({
      imageName,
      title,
      body,
      readTime,
      dateCreated,
      id,
    });
    history.push('/');
  }

  updateValue(evt) {
    const value = evt.target.value;
    let newState = {};
    switch (evt.target.id) {
      case "bodyInput":
        newState = { body: value }
        break;
      case "titleInput":
        newState = { title: value }
        break;
      default:
        return;
    }
    this.setState(newState);
  }

  render() {
    const { imageName, title, body, readTime, dateCreated, editMode } = this.state;
    const postInfoModel = { readTime, dateCreated }
    return (
      <article>
        <section className="blog__body__post">
          <span className="flex-row">
            <h1>
              {editMode ?
                <input id="titleInput" value={title} onChange={evt => this.updateValue(evt)} /> :
                <div> {title} </div>}
            </h1>
            <PostInfo model={postInfoModel} />
          </span>
          <img className="blog__body__post__img" alt="img1" src={require(`../../images/${imageName}`)} />
        </section>
        <section>
          {editMode ?
            <textarea id="bodyInput" value={body} onChange={evt => this.updateValue(evt)} /> :
            <div> {body} </div>}

        </section>
        <ButtonGroup model={this.buildButtonGroupModel()} />
      </article>
    )
  }
}
export default withRouter(FullArticle)