import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonRed, ButtonWhite } from '../../components/Button/styles'
import { Modal } from '../../components/Modal'
import { Slider } from '../../components/Slider'
import { SliderMovies } from '../../components/SliderMovies'
import { paths } from '../../constants/paths'
import {
  getGenreMovies,
  getLastedMovie,
  getMovieByCollection,
  getPopularMovies,
  getTopArtists
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Background,
  Container,
  GroupButton,
  Poster,
  PosterInfo
} from './styles'

export function Movies() {
  const navigate = useNavigate()
  // Estados dos dados vem da API
  const [showModal, setShowModal] = useState(false)
  const [popularMovie, setPopularMovie] = useState()
  const [listGener, setListGener] = useState()
  const [movieByCollection, setMovieByCollection] = useState()
  const [lastedMovies, setLastedMovies] = useState()
  const [topArtists, setTopArtisits] = useState()
  const col = listGener[0].name

  console.log(movieByCollection.data.results)

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getPopularMovies(),
        getGenreMovies(),
        getMovieByCollection(col),
        getLastedMovie(),
        getTopArtists()
      ])
        .then(
          ([
            popularMovie,
            listGener,
            movieByCollection,
            lastedMovies,
            topArtisits
          ]) => {
            setPopularMovie(popularMovie)
            setListGener(listGener)
            setMovieByCollection(movieByCollection)
            setLastedMovies(lastedMovies)
            setTopArtisits(topArtisits)
          }
        )
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [col])

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
        {movieByCollection.data.results && (
          <SliderMovies
            infor={movieByCollection.data.results}
            title={listGener[0]?.name}
          />
        )}
        {/* {topSeries && <Slider infor={topSeries} title={listGener} />} */}
        {lastedMovies && <Slider infor={lastedMovies} title={'terror'} />}
        {topArtists && (
          <Slider infor={topArtists} title={'Artistas Populares'} />
        )}
      </div>
    </>
  )
}
