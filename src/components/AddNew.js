import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import { PopUp } from './';

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  setPopup = (val) => {
    this.setState({
      showPopup: val,
    });
  };

  render() {
    const { showPopup } = this.state;
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
            <h3>My popup</h3>
          </PopUp>
        </div>
      </div>
    );
  }
}

export default AddNew;
