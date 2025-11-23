import React from 'react'
import './App.scss'
// import Header from './Components/Header1/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header2/Header'


function App() {
  

  return (
    <>
    <BrowserRouter>
    {/* <Header /> */}
    <Header />
    <Routes>
      
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
