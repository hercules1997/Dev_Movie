import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '8fe74bded97f08049808a0ac86f6c7b3',
    language: 'pt-BR',
    page: 1
  }
})

export default api
