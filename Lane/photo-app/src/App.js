import React, { Component } from 'react';
import './App.css';
import  DropZone from 'react-dropzone';


class ImageUploader extends Component{
  constructor(props){
    super(props)
    this.state = {
      images: []
    }
  }
  uploadFile(files){
    const image = files[0];
    console.log(image)
  }
  render(){
    return(
      <Dropzone
      multiple={false}
      accept="image/*"
      onDrop={this.onImageDrop.bind(this)}>
      <p>Drop an image or click to select a file to upload.</p>
      </Dropzone>
  //


  /<div className="ImageUploader">
  //   <button className="upload-button">
  //     {this.props.text}
  //   </button>
  // </div>
  );
  }
}

class ImageContainer extends Component{
  render(){
    return(
    <div className="ImageContainer jumbotron col-sm-6 col-sm-3">
      <ImageUploader />
    </div>
  );
  }
}

class App extends Component {
  render() {
    return (
    <div>
      <ImageContainer />
    </div>
    );
  }
}

export default App;
