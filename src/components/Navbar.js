import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchWords, refreshSearchResults } from '../actions/search';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSearch = (e) => {
    const { searchText } = this.state;

    if (e.target.value) {
      this.props.dispatch(searchWords(searchText));
    } else {
      this.props.dispatch(refreshSearchResults());
    }

    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { searchText } = this.state;
    const { results } = this.props;

    return (
      <nav className="nav">
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search-icon"
          />
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleSearch}
          />
          {searchText && results.length > 0 && (
            <div className="search-results">
              <ul>
                {results.map((word) => (
                  <li className="search-results-row">
                      <span>{word.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.search.results,
  };
}

export default connect(mapStateToProps)(Navbar);
