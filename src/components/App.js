import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import { Navbar, Home, Page404, AddNew } from './';

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
    const { words } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Navbar />

            <Switch>
              <Route
                exact
                path="/"
                render={(props) => {
                  return <Home {...props} words={words} />;
                }}
              />
              <Route component={Page404} />
            </Switch>

            <AddNew />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  words: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    words: state.words,
  };
}

export default connect(mapStateToProps)(App);
