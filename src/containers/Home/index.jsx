import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonRed, ButtonWhite } from '../../components/Button/styles'
import { Modal } from '../../components/Modal'
import { Slider } from '../../components/Slider'
import { paths } from '../../constants/paths'
import {
  getLastedMovie,
  getPopularMovies,
  getTopArtists,
  getTopMovies,
  getTopSeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Background,
  Container,
  GroupButton,
  Poster,
  PosterInfo
} from './styles'

export function Home() {
  const navigate = useNavigate()
  // Estados dos dados vem da API
  const [showModal, setShowModal] = useState(false)
  const [popularMovie, setPopularMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [lastedMovies, setLastedMovies] = useState()
  const [topArtists, setTopArtisits] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getPopularMovies(),
        getTopMovies(),
        getTopSeries(),
        getLastedMovie(),
        getTopArtists()
      ])
        .then(
          ([popularMovie, topMovie, topSeries, lastedMovies, topArtisits]) => {
            setPopularMovie(popularMovie)
            setTopMovies(topMovie)
            setTopSeries(topSeries)
            setLastedMovies(lastedMovies)
            setTopArtisits(topArtisits)
          }
        )
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [])

  return (
    <>
      {popularMovie && (
        <Background img={getImages(popularMovie.backdrop_path)}>
          {showModal && (
            <Modal movieId={popularMovie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <PosterInfo>
              <h1>{popularMovie.title}</h1>
              <p>{popularMovie.overview}</p>
              <GroupButton>
                <ButtonRed
                  btnRed
                  onClick={() => navigate(`${paths.Detail}/${popularMovie.id}`)}
                >
                  Assistir agora!
                </ButtonRed>
                <ButtonWhite btnWhite onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </ButtonWhite>
              </GroupButton>
            </PosterInfo>
            <Poster>
              <img
                src={getImages(popularMovie.poster_path)}
                alt="Poter do filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
      <div style={{ width: '100vw' }}>
        {topMovies && (
          <Slider infor={topMovies} title={'Filmes mais avaliados'} />
        )}
        {topSeries && (
          <Slider infor={topSeries} title={'Series mais avaliados'} />
        )}
        {lastedMovies && (
          <Slider infor={lastedMovies} title={'Filmes mais vistos'} />
        )}
        {topArtists && (
          <Slider infor={topArtists} title={'Artistas Populares'} />
        )}
      </div>
    </>
  )
}
