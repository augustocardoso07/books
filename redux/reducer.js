import { combineReducers } from 'redux';
import { SHOW_MORE_BOOKS, 
         FAILURE_RESPONSE, 
         SUCCESS_RESPONSE, 
         SET_QUERY,
         REQUEST_BOOKS} from './actions';


const booksReducer = (state = [], action) => {
  if (action.type === SET_QUERY) return [];
  if (action.type === SHOW_MORE_BOOKS) return [...state, ...action.payload];
  return state;
}

const pageReducer = (state = 0, action) => {
  if (action.type === SET_QUERY) return 0;
  if (action.type === SHOW_MORE_BOOKS) return state + 1;
  return state;
}

const queryReducer = (state = '', action) => {
  if (action.type === SET_QUERY) return action.payload;
  return state;
}

const loaddingReducer = (state = false, action) => {
  if (action.type === FAILURE_RESPONSE) return false;
  if (action.type === SUCCESS_RESPONSE) return false;
  if (action.type === SET_QUERY) return true;
  if (action.type === REQUEST_BOOKS) return true; 
  return state;
}

const errorReducer = (state = false, action) => {
  if (action.type === FAILURE_RESPONSE) return true;
  if (action.type === SUCCESS_RESPONSE) return false;
  return state;
}

const reducer = combineReducers({
  books: booksReducer,
  page: pageReducer,
  query: queryReducer,
  loadding: loaddingReducer,
  error: errorReducer,
});

export default reducer;