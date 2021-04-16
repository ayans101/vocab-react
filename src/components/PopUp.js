import React, { Component } from 'react';

class PopUp extends Component {
  render() {
    return this.props.trigger ? (
      <div className="popup">
        {/* <div className="popup-inner">{this.props.children}</div> */}
        {this.props.children}
      </div>
    ) : (
      ''
    );
  }
}

export default PopUp;
