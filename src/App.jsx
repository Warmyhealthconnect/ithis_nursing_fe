import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './User/Components/Header/Header'
import Home from './User/Pages/Home/Home'
import Footer from './User/Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
