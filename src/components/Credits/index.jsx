import React from 'react'

import { getImages } from '../../utils/getImages'
import { Container, Title } from './styles'
export function Credits({ credits }) {
  return (
    <>
      <Title>Principais elencos</Title>
      <Container>
        {credits &&
          credits.slice(0, 6).map((artist) => (
            <span key={artist.id}>
              {artist.profile_path && artist.name !== undefined ? (
                <div>
                  <img
                    src={getImages(artist.profile_path)}
                    alt="Imagem de artista"
                  />
                  <p>{artist.name}</p>
                </div>
              ) : (
                <div style={{ display: 'none' }}></div>
              )}
            </span>
          ))}
      </Container>
    </>
  )
}
