import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.sub}</p>
        </div>
      </header>
    );
  }
}

export default Subject;

