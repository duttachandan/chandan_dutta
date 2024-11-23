import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./Components/About/About"
import Projects from './Components/Projects/Projects.jsx'
import Layout from './Components/Outlet/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/Portfolio/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path='/Portfolio/projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
