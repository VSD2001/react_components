import React from 'react'
import './App.scss'
import Header from './Components/Header3/Header'
import Header2 from './Components/Header2/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header22 from './Components/Header5/Header22'



function App() {
  

  return (
    <>
    <BrowserRouter>
  {/* <Header /> */}
  {/* <Header2/> */}
  <Header22/>

    <Routes>
      
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
