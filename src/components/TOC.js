import React, { Component } from "react";

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">{this.props.fir_sec}</a></li>
          <li><a href="2.html">{this.props.second_sec}</a></li>
          <li><a href="3.html">{this.props.thr_sec}</a></li>
        </ul>
      </nav>
    );
  }
}

export default TOC;
