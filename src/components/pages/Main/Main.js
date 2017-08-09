import styled from 'styled-components'
import Paper from 'Paper'

export default styled.main`
  overflow: scroll;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;

  @media screen and (min-width: 64em) {
    padding: 40px 60px;
  }

  & ${Paper} {
    margin: 0 auto;
  }
`
