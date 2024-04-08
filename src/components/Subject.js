import React, { Component } from "react";

class Subject extends Component {
  render() {
    console.log('Subject render')
    return (
      <header>
        <div>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          <p>{this.props.sub}</p>
        </div>
      </header>
    );
  }
}

export default Subject;

