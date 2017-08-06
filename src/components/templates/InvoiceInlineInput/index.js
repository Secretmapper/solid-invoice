import React from 'react'
import Wrapper from './Wrapper'
import InputWrapper from './InputWrapper'

export default ({ bold, className, label, input }) => (
  <Wrapper bold={bold} className={className}>
    {label}
    <InputWrapper>
      {input}
    </InputWrapper>
  </Wrapper>
)
