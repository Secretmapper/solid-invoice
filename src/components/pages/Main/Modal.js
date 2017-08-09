import React from 'react'
import styled, { keyframes } from 'styled-components'
import Modal from 'react-modal'

const fadeDown = keyframes`
  0% {
    transform: translate3d(0, -25%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`

const StyledModal = styled(Modal)`
  background-color: white;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  box-shadow: 0 5px 15px rgba(0,0,0,.5);
  margin: 30px auto;
  outline: none;
  overflow: hidden;
  width: 300px;

  animation: ${fadeDown} ease-in-out 0.3s;
`

export default styled(({ className, children, ...props }) => <StyledModal overlayClassName={className} {...props}>{children}</StyledModal>)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`
