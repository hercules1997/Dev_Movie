import api from './api'

//  Criação de uma instância da api para melhorar a perfoirmace
const apiInstance = api.create()

export async function getPopularMovies() {
  // Variável para alterar a ordem dos filmes a ser exibido no topo
  const order = Math.floor(Math.random() * (19 - 1) + 1)
  const {
    data: { results }
  } = await apiInstance.get('/movie/popular')

  return results[order]
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await apiInstance.get('/movie/top_rated')

  return results
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await apiInstance.get('/tv/top_rated')

  return results
}

export async function getLastedMovie() {
  const {
    data: { results }
  } = await apiInstance.get('/movie/now_playing')

  return results
}

export async function getTopArtists() {
  const {
    data: { results }
  } = await apiInstance.get('/person/popular')

  return results
}

export async function getMovieVideos(movieId) {
  // Variável para alterar a ordem dos filmes a ser exibido no topo
  const {
    data: { results }
  } = await apiInstance.get(`/movie/${movieId}/videos`)

  return results
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast }
  } = await apiInstance.get(`/movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await apiInstance.get(`/movie/${movieId}/similar`)

  return results
}

export async function getMoviesById(movieId) {
  const { data } = await apiInstance.get(`/movie/${movieId}`)

  return data
}
export async function getMovieByCollection(col) {
  const data = await apiInstance.get(`/search/collection?query=${col}`)

  return data
}

export async function getGenreMovies() {
  const {
    data: { genres }
  } = await apiInstance.get(`/genre/movie/list`)

  return genres
}
