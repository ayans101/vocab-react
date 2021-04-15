import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search-icon"
          />
          <input type="text" placeholder="Search" />

          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <span>resource</span>
              </li>
              <li className="search-results-row">
                <span>revert</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <Button variant="contained" color="primary">
            Add New
          </Button>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(Navbar);
