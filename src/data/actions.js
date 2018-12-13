import ActionTypes from './actionTypes';
import Dispatcher from './dispatcher';

const Actions = {
  removePost(id) {
    Dispatcher.dispatch({
      type: ActionTypes.REMOVE_POST,
      id,
    })
  }
};

export default Actions;