import "./App.css";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Ending from "./components/Ending";
import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      subject: {title:"Hello, React", sub:"2024-04-03"},
      welcome: {title: "welcome", desc: "Hello, React!!"},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    console.log('App render')
    let _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        Hello, React!!
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}>
        </Subject>
        <TOC onChangePage={function() {
          this.setState({mode:'read'});
        }.bind(this)} data={this.state.contents}></TOC>
       <Ending title={_title} sub={_desc}></Ending>
      </div>
    );
  }
}

export default App;
