import styled from 'styled-components'

import { defaultColors } from '../../styles/globalStyles'

const Container = styled.div`
  background: ${(props) => (props.changeBackgroud ? '#000000' : 'transparent')};
  border-bottom: ${(props) =>
    props.changeBackgroud ? '2px solid #909090' : 'none'};
  display: flex;
  height: 80px;
  width: 100vw;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
`
const Logo = styled.div`
  display: flex;
  img {
    width: 70px;
  }

  h1 {
    color: #ffffff;
  }
`
const ContainerLinks = styled.div`
  display: flex;
  margin-right: 100px;
`
const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`
const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  position: relative;

  a {
    color: ${(props) => (props.isActive ? 'green' : '#ffffff')};
    font-size: 1.5rem;
    text-align: 50%;
    text-transform: translateX(-50%);
    transition: 0.5s ease-in-out;

    &:hover {
      color: green;
    }
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background: ${defaultColors.primaryColor};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`

export { Container, ContainerLinks, Logo, Menu, Li }
