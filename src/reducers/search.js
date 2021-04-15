import {
  FETCH_SEARCH_RESULTS_SUCCESS,
  REFRESH_SEARCH_RESULTS,
} from '../actions/actionTypes';

const initialSearchState = {
  results: [],
};

export default function search(state = initialSearchState, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.words,
      };
    case REFRESH_SEARCH_RESULTS:
      return {
        results: [],
      };
    default:
      return state;
  }
}
