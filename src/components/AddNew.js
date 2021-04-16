import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import { PopUp } from './';

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      searchText: '',
    };
  }

  handleSearch = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  setPopup = (val) => {
    this.setState({
      showPopup: val,
    });
  };

  render() {
    const { showPopup, searchText } = this.state;
    return (
      <div>
        <div className="right-nav">
          <Button
            className="add-new-button"
            variant="contained"
            color="primary"
            onClick={() => this.setPopup(true)}
          >
            <img
              src="https://image.flaticon.com/icons/svg/1828/1828925.svg"
              alt="add new"
            />
          </Button>
          <PopUp trigger={showPopup} setTrigger={this.setPopup}>
            <big>Add to Dictionary</big>
            <br />
            <br />
            <small>New Word</small>
            <br />
            <input
              className="inp"
              placeholder="Type"
              onChange={this.handleSearch}
            />
            <Button className="close-btn" onClick={() => this.setPopup(false)}>
              cancel
            </Button>
            <Button className="add-btn" onClick={() => console.log(searchText)}>add</Button>
          </PopUp>
        </div>
      </div>
    );
  }
}

export default AddNew;
