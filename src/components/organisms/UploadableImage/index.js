import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
import Dropzone from './Dropzone'
import Label from './Label'
import Image from './Image'

export default compose(
  withState('accepted', 'setAccepted', []),
  withHandlers({
    onDrop: ({ setAccepted }) => (accepted, rejected) => {
      setAccepted(accepted)
      console.log(accepted)
    }
  })
)(({ accepted, onDrop }) => (
  <Dropzone
    accept='image/jpeg, image/png'
    onDrop={onDrop}
  >
    {accepted[0] && <Image src={accepted[0] && accepted[0].preview} />}
    <Label>YOUR LOGO</Label>
  </Dropzone>
))
