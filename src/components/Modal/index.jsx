import React, { useEffect, useState } from 'react'

import { getMovieVideos } from '../../services/getData'
import { getVideosTriler } from '../../utils/getTrilers'
import { Container, Background } from './styles'

export function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()
  useEffect(() => {
    try {
      async function moviesId() {
        setMovie(await getMovieVideos(movieId))
      }
      moviesId()
    } catch (error) {
      console.error(error)
    }
  }, [movieId])

  return (
    <Background onClick={() => setShowModal(false)}>
      <Container>
        <button onClick={() => setShowModal(false)}>❎</button>
        {movie && (
          <div>
            <iframe
              title="Youtube Video Player"
              height="400px"
              width="100%"
              src={getVideosTriler(movie[0]?.key)}
            ></iframe>
          </div>
        )}
      </Container>
    </Background>
  )
}
