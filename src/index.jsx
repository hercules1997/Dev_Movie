import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import AllRoutes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
)
