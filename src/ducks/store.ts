import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth';
import filter from './filter';
import playlist from './playlist';

import { IAuthState } from './auth/reducers';
import { IFilterState } from './filter/reducers';
import { IPlaylistState } from './playlist/reducers';

const reducers = {
  auth,
  filter,
  playlist,
};

export interface IStoreState {
  auth: IAuthState;
  filter: IFilterState;
  playlist: IPlaylistState;
}

// a little hack to make the redux devtools work with typescript
// we make window as any so ts can accept non-default property __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// source: https://stackoverflow.com/posts/50721364
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
