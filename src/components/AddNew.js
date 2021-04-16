import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class AddNew extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default AddNew;
