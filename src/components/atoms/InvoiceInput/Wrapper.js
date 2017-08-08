import styled, { keyframes } from 'styled-components'
import { lighten, darken } from 'polished'
import { ifProp } from 'styled-tools'
import { palette } from 'styled-theme'
import { Input, Textarea } from './Input'

const darkenPalette = (n, index) => props => darken(n, palette(index)(props))
const lightenPalette = (n, index) => props => lighten(n, palette(index)(props))

const px = '15px'
const errorAnimation = keyframes`
  0% {
    transform: scale(1) translateX(-${px});
  }
  25% {
    transform: scale(1) translateX(${px});
  }
  50% {
    transform: scale(1) translateX(-${px});
  }
  75% {
    transform: scale(1) translateX(${px});
  }
  100% {
    transform: scale(1) translateX(0);
  }
`

export default styled.div`
  ${props => props.errorAnimating && `animation: ${errorAnimation} ease-in-out 0.3s;`}

  background: ${
    ifProp(
      ['active'],
      lightenPalette(0.02, 0),
      palette(0)
    )
  };
  border-radius: 2px;
  border: 1px solid ${palette(1)};
  box-sizing: border-box;
  color: ${palette(2)};
  display: inline-block;
  padding: 0.325rem 0.5rem;
  padding-left: 0;
  padding-right: 1rem;
  position: relative;

  transition: background 0.2s;

  ${props => !props.disabled && 'cursor: pointer;'}
  ${props => props.auto ? 'width: auto' : 'width: 100%'};
  ${props => props.filled && !props.simple && `
    background: none;
    border: 1px solid rgba(0, 0, 0, 0);
  `}

  &:hover {
    ${props => !props.disabled && `
      background: ${darkenPalette(0.02, 0)(props)};
      border-color: ${darkenPalette(0.02, 1)(props)};
      color: ${palette(2)} !important;
    `}

    ${props => props.active && `
      background: ${lightenPalette(0.1, 0)(props)};
      border-color: ${darkenPalette(0.2, 1)(props)};
    `};
  }

  &:hover ${Input}, &:hover ${Textarea} {
    ${props => !props.disabled && `
      transform: translate3d(0.5rem, 0, 0);
    `}
  }
`
