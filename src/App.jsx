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
import Facilities from './User/Pages/Facilities/Facilities'
import Admission from './User/Pages/Admission/Admission'
import AdminDash from './Admin/Components/AdminDash/AdminDash'
import PayUCheckout from './User/Components/PayUCheckout'
import StudentDetails from './Admin/Components/StudentDetails/StudentDetails'
import { ToastContainer } from 'react-bootstrap'
import ProtectedRoute from './Admin/Components/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/affiliations' element={<Affiliation />} />
        <Route path='/news-events' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<Career />} />
        <Route path='/careerdetails' element={<Carrerdetails />} />
        <Route path='/departments' element={<Department />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/payu' element={<PayUCheckout />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDash />
            </ProtectedRoute>
          }
        />
        <Route path='/admin/studentdetails/:id' element={<StudentDetails />} />
      </Routes>
      <ToastContainer />

      <Footer />
    </>
  )
}

export default App
