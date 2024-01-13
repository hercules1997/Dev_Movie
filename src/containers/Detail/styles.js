import styled from 'styled-components'

import { scale } from '../../styles/keyFrames'

const Background = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  position: relative;
  height: 50vh;

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
  justify-content: center;
  align-items: flex-start;
  margin-top: -140px;
  height: 100%;
  max-width: 1500px;
  animation: ${scale} 0.2s linear;
`
const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;
  img {
    width: 300px;
    border-radius: 30px;
    box-shadow: 0 7px 22px #335533;
    animation: ${scale} 0.4s linear;
  }
`

const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  color: #fff;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  height: 100%;
  max-width: 1500px;
  h4 {
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 14px;
  }

  div {
    width: 75%;

    iframe {
      border: none;
      margin: 50px 0px;
    }
  }
`

export { Container, Background, Cover, Info, ContainerMovies }
