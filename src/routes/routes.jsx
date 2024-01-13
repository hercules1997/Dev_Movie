import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { paths } from '../constants/paths'
import { Home, Movies, Series, Detail } from '../containers'
import DefautLayout from '../layout/DefautLayout'

function AllRoutes() {
  return (
    <Routes>
      <Route element={<DefautLayout />}>
        <Route path={paths.Home} element={<Home />} />
        <Route path={paths.Movies} element={<Movies />} />
        <Route path={paths.Series} element={<Series />} />
        <Route path={`${paths.Detail}/:id`} element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default AllRoutes
