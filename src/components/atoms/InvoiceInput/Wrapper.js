import styled from 'styled-components'
import { Input, Textarea } from './Input'

export default styled.div`
  background: ${props => props.active ? '#fafdff' : '#f1faff'};
  border-radius: 2px;
  border: 1px solid #d1e5f0;
  box-sizing: border-box;
  color: #465964;
  display: inline-block;
  padding: 0.325rem 0.5rem;
  padding-left: 0;
  padding-right: 1rem;
  position: relative;

  ${props => !props.disabled && 'cursor: pointer;'}
  ${props => props.auto ? 'width: auto' : 'width: 100%'};
  ${props => props.filled && `
    background: none;
    border: 1px solid rgba(0, 0, 0, 0);
  `}

  &:hover {
    ${props => !props.disabled && `
      background: #e4f3fa;
      border-color: #d1e5f0;
      color: #9cb6c4 !important;
    `}

    ${props => props.active && `
      background: #fafdff;
      border-color: #9cb6c4;
    `};
  }

  &:hover ${Input}, &:hover ${Textarea} {
    ${props => !props.disabled && `
      transform: translate3d(0.5rem, 0, 0);
    `}
  }
`
