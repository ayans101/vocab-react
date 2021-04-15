import React, { Component } from 'react';

class Home extends Component {
  render() {
    console.log('PROPS', this.props);
    return (
      <div>
        <div className="list"></div>
      </div>
    );
  }
}

export default Home;
