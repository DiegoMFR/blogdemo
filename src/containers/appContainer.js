import App from '../App';
import {Container} from 'flux/utils';
import Store from '../data/store';
import Actions from '../data/actions';

function getStores() {
  return [
    Store,
  ];
}

function getState() {
  return {
    postList: Store.getState(),
    onRemovePost: Actions.removePost,
  };
}

export default Container.createFunctional(App, getStores, getState);