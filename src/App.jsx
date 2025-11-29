import React from 'react'
import './App.scss'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Web from './Components/newWeb/Web'




function App() {
  

  return (
    <>
    <BrowserRouter>
  {/* <Header /> */}
  {/* <Header/> */}
  {/* <Header/> */}
  <Web />


    <Routes>
      {/* <Route path="/" element={<Hero />} /> */}
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
