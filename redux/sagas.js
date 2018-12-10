import { takeLatest, put, call, select } from 'redux-saga/effects';

import {onFailure, onSuccess, showMoreBooks, setQuery, UPDATE_QUERY, REQUEST_BOOKS, requestBooks} from './actions';
import {fetchBooks} from '../api/googleBooks';

function* getBooks() {
  try {
    const {query, page} = yield select();

    const books = yield call(fetchBooks, query, page)
    
    yield put(showMoreBooks(books))
    yield put(onSuccess())
  } catch (err) {
    yield put(onFailure())
  }
}

function* preRequest(action) {
  //yield console.log(action.payload)
  yield put(setQuery(action.payload))
  yield put(requestBooks())
}

export default function* root() {
  yield takeLatest(UPDATE_QUERY, preRequest);
  yield takeLatest(REQUEST_BOOKS, getBooks);
}