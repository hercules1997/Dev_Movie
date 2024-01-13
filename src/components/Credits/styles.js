import styled from 'styled-components'

import { scale } from '../../styles/keyFrames'

const Container = styled.div`
  display: flex;
  gap: 20px;

  span {
    margin-top: 20px;
    border-radius: 10px;
    animation: ${scale} 0.3s ease-in;
    box-shadow: 0 0 12px green;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100px;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      margin-top: 5px;
      margin-bottom: 0 !important;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
`
const Title = styled.h3``

export { Container, Title }
