import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Login from './pages/Login.jsx'
import Vidyarthi from './pages/dashboards/Vidyarthi.jsx'
import Acharya from './pages/dashboards/Acharya.jsx'
import Palaka from './pages/dashboards/Palaka.jsx'
import PradhanaAcharya from './pages/dashboards/PradhanaAcharya.jsx'
import Mulyankan from './pages/dashboards/Mulyankan.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/vidyarthi', element: <Vidyarthi /> },
  { path: '/acharya', element: <Acharya /> },
  { path: '/palaka', element: <Palaka /> },
  { path: '/pradhana-acharya', element: <PradhanaAcharya /> },
  { path: '/mulyankan', element: <Mulyankan /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
