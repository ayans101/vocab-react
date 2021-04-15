import { UPDATE_WORDS } from '../actions/actionTypes';

export default function words(state = [], action) {
  switch (action.type) {
    case UPDATE_WORDS:
      return action.words;
    default:
      return state;
  }
}
