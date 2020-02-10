import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Routes from './Routes'

export default function App() {
  return (
    <div>
        
        <BrowserRouter > 
            <Navbar/> 
            <Routes />
        </BrowserRouter>
    </div>
  )
}
