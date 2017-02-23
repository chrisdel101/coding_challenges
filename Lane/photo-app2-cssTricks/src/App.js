import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './App.css';

const CLOUDINARY_UPLOAD_PRESET = 'lfbcitxy';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/chrisdelwebdev-herokuapp-com/upload';

class ContactForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ""
    };
    onImageDrop(files){
      this.SetState({
        uploadedFile: files[0]
      });

      this.handlmageUploader(files[0])

    }
  }
  render() {
    <Dropzone
      multiple={false}
      accept="image/*"
      onDrop={this.onImageDrop.bind(this)}>
      <p>Drop an image or click to select a file to upload.</p>
    </Dropzone>
  }






class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
