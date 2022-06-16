import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { postReducer } from './reducer';
import myPostDetailSaga from '../components/Post/model';
// create saga middleware
//saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(postReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(myPostDetailSaga);
export default store;

export const postAction = (type: string, postID: number) =>
  store.dispatch({ type, payload: { id: postID } });

//saga middleware
//saga /watcher saga
//saga worker/ another saga / saga
