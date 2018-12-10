// action types
export const SHOW_MORE_BOOKS = 'SHOW_MORE_BOOKS';
export const SET_QUERY = 'SET_QUERY';
export const SUCCESS_RESPONSE = 'SUCCESS_RESPONSE';
export const FAILURE_RESPONSE = 'FAILURE_RESPONSE';

export const UPDATE_QUERY = 'UPDATE_QUERY';
export const REQUEST_BOOKS = 'REQUEST_BOOKS';

// action creators
export const showMoreBooks = books => ({
  type: SHOW_MORE_BOOKS,
  payload: books,
});

export const setQuery = query => ({
  type: SET_QUERY,
  payload: query,
});

export const onSuccess = () => ({
  type: SUCCESS_RESPONSE,
});

export const onFailure = () => ({
  type: FAILURE_RESPONSE,
});

// action for saga
export const requestBooks = () => ({
  type: REQUEST_BOOKS,
});

export const updateQuery = query => ({
  type: UPDATE_QUERY,
  payload: query,
});

