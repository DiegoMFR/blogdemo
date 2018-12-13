import React, { Component } from 'react';
import ButtonGroup from '../buttonGroup';

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
export default AddNewPost;
