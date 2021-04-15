import React, { Component } from 'react';
import { WordsList } from './';

class Home extends Component {
  render() {
    const { words } = this.props;
    console.log('PROPS', this.props);
    return (
      <div className="home">
        <WordsList words={words} />
      </div>
    );
  }
}

export default Home;
