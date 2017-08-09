import React from 'react'
import { compose, withHandlers } from 'recompose'
import Dropzone from './Dropzone'
import Label from './Label'
import Image from './Image'

export default compose(
  withHandlers({
    onDrop: ({ onUpload }) => (accepted) => {
      onUpload(accepted[0])
    }
  })
)(({ image, onDrop }) => (
  <Dropzone
    accept='image/jpeg, image/png'
    onDrop={onDrop}
  >
    {image && <Image src={image} />}
    <Label>YOUR LOGO</Label>
  </Dropzone>
))
