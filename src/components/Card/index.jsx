import React from 'react'

import { getImages } from '../../utils/getImages'
import { Container } from './styles'
export function Card({ item, ...rest }) {
  return (
    <Container {...rest}>
      <img src={getImages(item?.poster_path || item?.profile_path)}></img>
      <h3>{item?.title || item?.name}</h3>
    </Container>
  )
}
