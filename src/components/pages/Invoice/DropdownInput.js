import React from 'react'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import styled from 'styled-components'
import UInput from 'Input'
import Dropdown from './Dropdown'

import DropdownIcon from 'react-icons/lib/fa/chevron-down'

const Input = styled(UInput)`
  padding-right: 45px;
`

const Wrapped = styled.div`
  height: 100%;
  width: 100%;
`

export default compose(
  withState('element', 'setRef', null),
  withState('showsDropdown', 'setShowsDropdown', false),
  withHandlers({
    toggleDropdown: ({ setShowsDropdown }) => _ => {
      setShowsDropdown(showsDropdown => !showsDropdown)
    },
    onBlur: ({ setShowsDropdown }) => _ => {
      setShowsDropdown(false)
    },
    onDocumentClick: ({ element, setShowsDropdown }) => e => {
      if (element.contains(e.target)) return
      setShowsDropdown(false)
    }
  }),
  lifecycle({
    componentWillMount () {
      document.addEventListener('click', this.props.onDocumentClick, false)
    },

    componentWillUnmount () {
      document.removeEventListener('click', this.props.onDocumentClick, false)
    }
  })
)(({ children, setRef, prefix, suffix, showsDropdown, toggleDropdown, onBlur, ...props }) => (
  <div style={{ position: 'relative' }} onBlur={onBlur} ref={setRef}>
    <Input
      {...props}
      prefix={prefix}
      suffix={
        <Wrapped onClick={toggleDropdown} key='dropdown'>
          <DropdownIcon />
        </Wrapped>
      }
    />
    {showsDropdown && <Dropdown>{children}</Dropdown>}
  </div>
))
