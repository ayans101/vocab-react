import { UPDATE_WORDS, ADD_WORD } from '../actions/actionTypes';

export default function words(state = [], action) {
  switch (action.type) {
    case UPDATE_WORDS:
      return action.words;
    case ADD_WORD:
        return [action.word, ...state]
    default:
      return state;
  }
}
