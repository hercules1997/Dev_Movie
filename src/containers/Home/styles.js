import styled from 'styled-components'

import { scale } from '../../styles/keyFrames'

const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: calc(100vh - 20px);
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 80px;
  z-index: 2;
  height: 100%;
  max-width: 1500px;
`
const Poster = styled.div`
  img {
    width: 290px;
    border-radius: 40px;
    box-shadow: 0 0 40px #335533;
    animation: ${scale} 0.6s linear;
  }
`
const PosterInfo = styled.div`
  padding: 1.5rem;
  width: 50%;

  h1 {
    color: #ffffff;
    font-size: 5rem;
    font-weight: 700;
  }
  p {
    color: wheat;
    font-size: 1.3rem;
    font-weight: 400;
  }
`

const GroupButton = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 14px;
`

export { Background, Container, Poster, PosterInfo, GroupButton }
