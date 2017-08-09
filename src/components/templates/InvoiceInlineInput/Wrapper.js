import styled from 'styled-components'

export default styled.div`
  display: flex;
  padding: 2px 0;
  position: relative;

  [data-input] {
    ${props => props.bold && 'font-weight: bold;'}
  }
`
