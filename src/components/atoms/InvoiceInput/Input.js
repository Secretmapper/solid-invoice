import { compose, defaultProps, mapProps } from 'recompose'
import TextareaAutosize from 'react-textarea-autosize'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'

const mixin = css`
  ${props => !props.disabled && 'cursor: pointer;'}
  background: none;
  border: 0;
  color: black;
  outline: none;
  overflow: visible;
  resize: none;
  will-change: transform;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: ${palette(2)};
  }

  transform: translate3d(${props => props.filled ? '0' : '0.5rem'}, 0, 0);
  transition: transform 0.2s;
`

export const Input = styled.input`${props => mixin}`

const propedTextarea = compose(
  mapProps(({ filled, palette, ...props }) => (props)),
  defaultProps({ minRows: 3 })
)(TextareaAutosize)

export const Textarea = styled(propedTextarea)`${props => mixin}`
