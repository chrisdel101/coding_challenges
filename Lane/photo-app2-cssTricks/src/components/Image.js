import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
// import './App.css';
import AvatarEditor from 'react-avatar-editor'


const CLOUDINARY_UPLOAD_PRESET = 'lfbcitxy';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/chrisdelwebdev-herokuapp-com/upload';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
// call image upload on file
    this.handleImageUpload(files[0]);
  }

// upload function
  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      console.log(response.body.secure_url)
      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
          //response.body is superagent commands
          //secure_url comes form api cloudinary
        });
      }
    });
  }

  render() {
    return (
      <form className='image'>
        <div className="FileUpload">

          <ImageEditor url={this.state.uploadedFileCloudinaryUrl} />

          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*">
            <div>Drop an image or click to select a file to upload.</div>
          </Dropzone>
        </div>

          {/* -state is set to uploadedFile: null, and uploadedFileCloudinaryUrl: nothing
          -if photo is not null, or nothing, then display */}

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>
      </form>
    )
  }
}

class ImageEditor extends React.Component {
  render () {
    return (
      !!this.props.url && <AvatarEditor
        image={this.props.url}
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
    )
  }
}

export default Image
// import React, { Component } from 'react';
// import Dropzone from 'react-dropzone';
// import request from 'superagent';
// import './App.css';

// const CLOUDINARY_UPLOAD_PRESET = 'lfbcitxy';
// const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/chrisdelwebdev-herokuapp-com/upload';
//
// class ContactForm extends Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//       uploadedFileCloudinaryUrl: ""
//     };
//   }
//     onImageDrop(files){
//       this.SetState({
//         uploadedFile: files[0]
//       });
//     this.handleImageUpload(files[0])
//     }
//     handleImageUpload(file){
//       let upload = request.post(CLOUDINARY_UPLOAD_URL)
//               .field('upload_preset, CLOUDINARY_UPLOAD_PRESET')
//               .field('file', file);
//       upload.end((err, response) => {
//       if (err) {
//         console.error(err);
//       }
//         if (repsonse.body.secure_url !== '') {
//           this.SetState({
//             uploadedFileCloudinaryUrl: response.body.secure_url
//           });
//         }
//       });
//     }
//   render() {
//     return(
//     <div>
//       <div className="FileUpload">
//       <Dropzone
//         multiple={false}
//         accept="image/*"
//         onDrop={this.onImageDrop.bind(this)}>
//         <p>Drop an image or click to select a file to upload.</p>
//       </Dropzone>
//     </div>
//     <div>
//         {this.state.uploadedFileCloudinaryUrl === '' ? null :
//         <div>
//           <p>{this.state.uploadedFile.name}</p>
//           <img src={this.state.uploadedFileCloudinaryUrl} alt="name" />
//         </div>}
//       </div>
//   </div>
// )
//   }
// }
//
//
//
//
//
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//
//       </div>
//     );
//   }
// }






// export default App;
