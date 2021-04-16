import { UPDATE_WORDS, ADD_WORD } from './actionTypes';

export function fetchWords() {
  return (dispatch) => {
    const url = 'http://localhost:1000/api/v1/words/';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.data.words);
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

export function createWord(searchText) {
  return (dispatch) => {
    const url = `http://localhost:1000/api/v1/words/add-word?text=${searchText}`;

    fetch(url, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('DATA', data);

        if (data.success) {
          dispatch(addWord(data.data.word));
        }
      });
  };
}

export function addWord(word) {
  return {
    type: ADD_WORD,
    word,
  };
}
