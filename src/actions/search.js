import {
  FETCH_SEARCH_RESULTS_SUCCESS,
  REFRESH_SEARCH_RESULTS,
} from './actionTypes';

export function searchWords(searchText) {
  return (dispatch) => {
    const url = `http://localhost:1000/api/v1/words/search?text=${searchText}`;

    fetch(url, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('SEARCH DATA', data);
        if (data.success) {
          dispatch(searchResultsSuccess(data.data.words));
        } else {
          dispatch(searchResultsSuccess([]));
        }
      });
  };
}

export function searchResultsSuccess(words) {
  return {
    type: FETCH_SEARCH_RESULTS_SUCCESS,
    words,
  };
}

export function refreshSearchResults() {
  return {
    type: REFRESH_SEARCH_RESULTS,
  };
}
