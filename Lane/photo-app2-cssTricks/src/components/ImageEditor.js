import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor'
import Image from './components/Image.js';

class ImageEditor extends React.Component {
  render () {
    return (
      <AvatarEditor
        image="http://placekitten.com/200/300"
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

export default ImageEditor
