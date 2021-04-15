import React from 'react';
import { connect } from 'react-redux';

import { fetchWords } from '../actions/words';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWords());
  }

  render() {
    return <div className="App">Hello World</div>;
  }
}

function mapStateToProps(state) {
  return {
    words: state.words,
  };
}

export default connect(mapStateToProps)(App);
