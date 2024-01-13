import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

// Disponibilizando o Header para as rotas
function DefautLayout() {
  return (
    <>
      <Header /> {/* Retorna o Header  */}
      <Outlet /> {/* Retorna o a rota que está configurada em AllRoutes  */}
    </>
  )
}

export default DefautLayout
