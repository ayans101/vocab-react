import React, { Component } from 'react';

class PopUp extends Component {
  render() {
    return this.props.trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button
            className="close-btn"
            onClick={() => this.props.setTrigger(false)}
          >
            close
          </button>
          {this.props.children}
        </div>
      </div>
    ) : (
      ''
    );
  }
}

export default PopUp;
