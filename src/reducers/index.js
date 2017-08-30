import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //wire reducer to the project
  books: BooksReducer
});

export default rootReducer;
