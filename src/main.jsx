import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import App from './App.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import './index.css'

const withScrollRestoration = (element) => (
  <>
    <ScrollRestoration />
    {element}
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: withScrollRestoration(<App />),
  },
  {
    path: '/services/:slug',
    element: withScrollRestoration(<ServiceDetail />),
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
