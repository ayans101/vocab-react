import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WordsList extends Component {
  render() {
    // const { words } = this.props;
    return <div className="words-list"></div>;
  }
}

WordsList.propTypes = {
  words: PropTypes.array.isRequired,
};

export default WordsList;
