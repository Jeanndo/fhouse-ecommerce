import React from 'react'
import Routes from './routes/index'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'jquery/dist/jquery.min.js'
import 'antd/dist/antd.css'
import './style/ui.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App