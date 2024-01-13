import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import { paths } from '../../constants/paths'
import { Card } from '../Card'
import { Container } from './styles'
export function Slider({ infor, title, ...rest }) {
  const navigate = useNavigate()
  const heandleClickMovies = (item) => {
    if (!item.known_for) {
      const itemid = item.id
      return navigate(`${paths.Detail}/${itemid}`)
    } else {
      const itemArtist = item.known_for[0 || 1 || 2 || 3].id
      return navigate(`${paths.Detail}/${itemArtist}`)
    }
  }
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={0}
        slidesPerView={'auto'}
        className="swiper"
      >
        {infor.map((item, index) => (
          <SwiperSlide key={index}>
            <Card onClick={() => heandleClickMovies(item)} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
