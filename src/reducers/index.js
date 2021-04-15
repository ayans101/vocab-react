import { combineReducers } from 'redux';
import words from './words';
import search from './search';

export default combineReducers({
  words,
  search,
});
