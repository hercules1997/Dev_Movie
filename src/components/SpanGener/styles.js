import styled from 'styled-components'

import { scale } from '../../styles/keyFrames'
const Container = styled.div`
  display: flex;
  gap: 20px;

  span {
    margin-top: 20px;
    border: green solid 3px;
    border-radius: 30px;
    padding: 0px 15px;
    background: #353;
    animation: ${scale} 0.6s ease-out;
  }
`

export { Container }
