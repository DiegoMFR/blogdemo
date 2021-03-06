import React, { Component } from 'react';
import ButtonGroup from '../buttonGroup';
import { withRouter } from 'react-router-dom'

class AddNewPost extends Component {
  constructor(props) {
    super(props);
    const buttonGroupModel = {
      items: [
        { label: 'Add New Post', onClick: this.handleAdd },
      ]
    }
    this.state = { buttonGroupModel };
  }

  handleAdd = () => {
    const { history } = this.props;
    history.push(`/add`);
  }

  render() {
    const { buttonGroupModel } = this.state;
    return (
      <article>
        <section className="blog__addnew">
          <div className="blog__body__container">
            <span className="flex-row">
              <h1>
                New Post
          </h1>
              <ButtonGroup model={buttonGroupModel} classModifier={'--big'} />
            </span>
          </div>
        </section>
      </article>)
  }
}
export default withRouter(AddNewPost);
