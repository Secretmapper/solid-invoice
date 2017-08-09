import styled from 'styled-components'

export default styled.div`
  background: #f0f3f7;
  background: linear-gradient(to bottom, #f0f3f7 0%, #e6ecf1 100%);
  height: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 40em) {
    flex-direction: row;
  }
`
