import {ReduceStore} from 'flux/utils';
import ActionTypes from './actionTypes';
import Dispatcher from './dispatcher';

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return  [
      {
        id: 111,
        title: 'Cool Post',
        dateCreated: ' 14 Dec 2018',
        readTime: '5 min',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageName: 'post.png',
      },
      {
        id: 112,
        title: 'Another Post Here!',
        dateCreated: ' 13 Dec 2018',
        readTime: '7 min',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageName: 'post.png',
      }
    ];
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.REMOVE_POST:
        return state.filter(({ id }) => id !== action.id);
      case ActionTypes.ADD_POST:
        const rest = state.filter(({ id }) => id !== action.postData.id);
        const edited = state.find(({ id }) => id === action.postData.id);
        return [...rest, { ...edited, ...action.postData }];
      default:
        return state;
    }
  }
}

export default new Store();