import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.gif'
import { paths } from '../../constants/paths'
import { Container, ContainerLinks, Logo, Menu, Li } from './styles'
export function Header() {
  const { pathname } = useLocation()

  const [changeBackgroud, setChangeBackground] = useState(false)

  window.onscroll = () => {
    if (!changeBackgroud && window.scrollY > 150) {
      setChangeBackground(true)
    }
    if (changeBackgroud && window.scrollY <= 150) {
      setChangeBackground(false)
    }
  }

  return (
    <Container changeBackgroud={changeBackgroud}>
      <Logo>
        <img src={logo} alt="Logo" />
        <h1>WestCine</h1>
      </Logo>
      <ContainerLinks>
        <Menu>
          <Li isActive={pathname === paths.Home}>
            <Link to={paths.Home}>Home</Link>
          </Li>
          <Li isActive={pathname === paths.Movies}>
            <Link to={paths.Movies}>Filmes</Link>
          </Li>
          <Li isActive={pathname === paths.Series}>
            <Link to={paths.Series}>Series</Link>
          </Li>
        </Menu>
      </ContainerLinks>
    </Container>
  )
}
