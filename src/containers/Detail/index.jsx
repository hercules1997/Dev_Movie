import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Credits } from '../../components/Credits'
import { Slider } from '../../components/Slider'
import { SpanGener } from '../../components/SpanGener'
import {
  getMovieCredits,
  getMovieSimilar,
  getMoviesById,
  getMovieVideos
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { getVideosTriler } from '../../utils/getTrilers'
import { Background, Container, ContainerMovies, Cover, Info } from './styles'

export function Detail() {
  const { id } = useParams()

  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMoviesById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ])
        .then(([movie, videos, credits, similar]) => {
          setMovie(movie)
          setMovieVideos(videos)
          setMovieCredits(credits)
          setMovieSimilar(similar)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [id])

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  return (
    movie && (
      <>
        <Background img={getImages(movie.backdrop_path)} />
        <Container>
          <Cover>
            <img src={getImages(movie.poster_path)} />
          </Cover>
          <Info>
            <h2>{movie.title}</h2>
            <SpanGener genres={movie.genres} />
            <p>{movie.overview}</p>
            <div>
              <Credits credits={movieCredits} />
            </div>
          </Info>
        </Container>
        <ContainerMovies>
          {movieVideos &&
            movieVideos.map((video) => (
              <div key={video.id}>
                <h4>{video.name}</h4>
                <iframe
                  title="Youtube Video Player"
                  height="400px"
                  width="100%"
                  src={getVideosTriler(video?.key)}
                ></iframe>
              </div>
            ))}
        </ContainerMovies>
        {movieSimilar && (
          <Slider
            infor={movieSimilar}
            onClick={scrollToTop}
            title={'Filmes relacionados'}
            style={{ marginTop: '100px' }}
          />
        )}
      </>
    )
  )
}
