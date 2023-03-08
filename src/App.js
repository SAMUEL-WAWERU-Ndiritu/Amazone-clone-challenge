import React from 'react'
import Header from './Header'
import Home from './Home'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Checkout from './Checkout'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header/>
          <Routes>
              <Route path="/Checkout" element={ <Checkout/>} />
              <Route path='/' element={ <Home/>}/>
            </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App