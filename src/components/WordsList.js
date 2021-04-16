import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Word } from './';

class WordsList extends Component {
  render() {
    const { words } = this.props;
    return (
      <div className="words-list">
        <div className="words-list-header">
          <span>Words List</span>
        </div>
        {words.map((word) => (
          <Word word={word} key={word._id} />
        ))}
      </div>
    );
  }
}

WordsList.propTypes = {
  words: PropTypes.array.isRequired,
};

export default WordsList;
