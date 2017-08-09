import React from 'react'
import Wrapper from './Wrapper'

export default ({ name, right, tabIndex, onClick }) => (
  <Wrapper tabIndex={tabIndex} onClick={onClick}>
    <div>{name}</div>
    <div>{right}</div>
  </Wrapper>
)
