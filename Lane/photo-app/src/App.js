import React, { Component } from 'react';
import './App.css';





class ImageContainer extends Component{
  render(){
    return(
    <div className="ImageContainer">
      {this.props.text}
    </div>
  );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <ImageContainer text={"this is some text"}/>
          </div>
      </div>
    );
  }
}

export default App;
