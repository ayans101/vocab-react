import React from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Button } from '@material-ui/core';

import Navbar from './Navbar';

import { fetchWords } from '../actions/words';

//  update material ui themes with ThemeProvider
const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Kumbh Sans"', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#38b6ff',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 50,
      },
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
          <Navbar />
          <div className="main">
            <div className="list"></div>
          </div>
          <div className="right-nav">
            <Button
              className="add-new-button"
              variant="contained"
              color="primary"
            >
                <img
                  src="https://image.flaticon.com/icons/svg/1828/1828925.svg"
                  alt="add new"
                />
            </Button>
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
