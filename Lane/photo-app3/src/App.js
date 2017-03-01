import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  onDrop(acceptedFiles){
    this.setState({
      files: acceptedFiles
    })
    console.log(acceptedFiles)
  }
  render() {
    return (
      <div className="App">
        <Dropzone onDrop={this.onDrop.bind(this)} >Drop some files here</Dropzone>
        { this.state.files.length > 0 ? <div>
          <div>{this.state.files.map( function(file){ return <img src={file.preview} />; } ) }</div>


        </div> : null
        }
      </div>
    );
  }
}

export default App;
