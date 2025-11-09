import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import NotFound from './components/NotFound.jsx'

import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const router = (createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, // Renders NotFound if any child errors
  children: [
    { index: true, element: <Home /> },
    {path: 'about', element: <About /> },
    {path: 'services', element: <Services /> },
    {path: 'contact', element: <Contact /> },
    {path : '*', element: <NotFound /> }
  ],
}
]))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
