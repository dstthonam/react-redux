import "./App.css";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Ending from "./components/Ending";
import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Subject: {title:"Hello, React", sub:"2024-04-03"}
    }
  }
  render() {
    return (
      <div className="App">
        Hello, React!!
        <Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}>
        </Subject>
        <TOC></TOC>
       <Ending title="Finish" sub="To React Goooood day"></Ending>
      </div>
    );
  }
}

export default App;
