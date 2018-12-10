import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

//store.dispatch(showMoreBooks([basicBook, basicBook]))
//store.dispatch(showMoreBooks([basicBook]))

//console.log(store.getState())

export default store;