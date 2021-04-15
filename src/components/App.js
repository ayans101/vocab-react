import React from 'react';
import { connect } from 'react-redux';

function App() {
  return <div className="App">Hello World</div>;
}

function mapStateToProps(state) {
  return {
    words: state.words,
  };
}

export default connect(mapStateToProps)(App);
