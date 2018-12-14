import ActionTypes from './actionTypes';
import Dispatcher from './dispatcher';

const Actions = {
  removePost(id) {
    Dispatcher.dispatch({
      type: ActionTypes.REMOVE_POST,
      id,
    })
  },
  addPost(postData) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_POST,
      postData,
    })
  }
};

export default Actions;