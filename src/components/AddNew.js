import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { PopUp } from './';
import { createWord } from '../actions/words';

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

  handleOnClick = () => {
    //  dispatch action
    this.props.dispatch(createWord(this.state.searchText));
    this.setState({
      searchText: '',
      showPopup: false,
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
            <div className="popup-inner">
              <big>Add to Dictionary</big>
              <br />
              <br />
              <small>New Word</small>
              <br />
              <input
                className="inp"
                placeholder="Type"
                value={searchText}
                onChange={this.handleSearch}
              />
              <Button
                className="close-btn"
                onClick={() => this.setPopup(false)}
              >
                cancel
              </Button>
              <Button className="add-btn" onClick={this.handleOnClick}>
                add
              </Button>
            </div>
          </PopUp>
        </div>
      </div>
    );
  }
}

export default connect()(AddNew);
