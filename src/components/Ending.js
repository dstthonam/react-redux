import React, { Component } from "react";

class Ending extends Component {
  render() {
    console.log('Ending render')
    return (
      <footer>
        <div>{this.props.title}</div>
        {this.props.sub}
      </footer>
    );
  }
}

export default Ending;
