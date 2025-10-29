import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './User/Components/Header/Header'
import Home from './User/Pages/Home/Home'
import Footer from './User/Components/Footer/Footer'
import About from './User/Pages/About/About'
import Affiliation from './User/Pages/Affiliation/Affiliation'
import News from './User/Pages/News&events/News'
import Contact from './User/Pages/Contact/Contact'
import Career from './User/Pages/Career/Career'
import Carrerdetails from './User/Pages/CareerDetails/CareerDetails'
import Department from './User/Pages/Department/Department'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/affiliations' element={<Affiliation />} />
        <Route path='/news-events' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<Career />} />
        <Route path='/careerdetails' element={<Carrerdetails />} />
        <Route path='/dep' element={<Department />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
