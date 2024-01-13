import { styled } from 'styled-components'

const Background = styled.div`
  z-index: 999;
  height: 100vh;
  width: 100vw;
  display: flex;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.7);

  align-items: center;
  justify-content: center;
  position: fixed;
`
const Container = styled.div`
  background: #000000;
  padding: 20px;
  width: 70%;
  position: absolute;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  iframe {
    border: none;
  }

  h2 {
    text-align: center;
    color: #909090;
    z-index: 10000;
  }

  button {
    border: none;
    background: transparent;
    transition: 0.5s;

    color: #ffffff;
    float: right;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 3px;
    border-radius: 8px;

    &:hover {
      box-shadow: 0 0 19px #00d26a;
      background: #00d26a;
      transition: 0.5s;
      color: #ff0000;
    }
  }
`

export { Container, Background }
