import React from 'react'
import './App.scss'
import Header from './Components/Headers/Header1/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Heros/Hero1/Hero'




function App() {
  

  return (
    <>
    <BrowserRouter>
  {/* <Header /> */}
  {/* <Header/> */}
  <Header/>


    <Routes>
      <Hero />
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
