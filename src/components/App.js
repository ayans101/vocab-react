import React from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import { fetchWords } from '../actions/words';

//  update material ui themes with ThemeProvider
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#38b6ff',
      contrastText: '#fff',
    },
  },
});

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWords());
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="main">
            <div className="list"></div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    words: state.words,
  };
}

export default connect(mapStateToProps)(App);
