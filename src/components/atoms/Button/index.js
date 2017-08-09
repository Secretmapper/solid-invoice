import styled from 'styled-components'
import { compose, defaultProps, mapProps } from 'recompose'
import { palette } from 'styled-theme'

export default compose(
  defaultProps({ theme: 'primary' }),
  mapProps(props => ({
    ...props,
    theme: props.danger ? 'danger' : 'primary'
  }))
)(
  styled.button`
    background-color: ${props => palette(props.theme, 2)};
    border: none;
    border-radius: 2px;
    box-shadow: inset 0 2px 0 rgba(255, 255, 255, .1), inset 0 -2px 0 rgba(0, 0, 0, .1);
    color: white;
    cursor: pointer;
    outline: none;
    padding: 8px 12px;
    user-select: none;

    transition: box-shadow 0.2s;

    &:focus {
      box-shadow: inset 0 2px 5rem rgba(0, 0, 0, .1), inset 0 -2px 0 rgba(0, 0, 0, .1);
    }

    &:hover:enabled {
      box-shadow: inset 0 2px 5rem rgba(0, 0, 0, .1), inset 0 -2px 0 rgba(0, 0, 0, .1);
    }

    &[disabled] {
      opacity: .5;
      cursor: not-allowed;
    }
  `
)
