import { UPDATE_WORDS } from './actionTypes';

export function fetchWords() {
  return (dispatch) => {
    const url = 'http://localhost:1000/api/v1/words/';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.words);
        dispatch(updateWords(data.data.words));
      });
  };
}

export function updateWords(words) {
  return {
    type: UPDATE_WORDS,
    words,
  };
}
