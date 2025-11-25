import React, { useState } from 'react'
import './Footer.css'
import { Link, useNavigate } from 'react-router-dom'
import AdminLoginModal from '../../../Admin/Components/AdminLogin/AdminLoginModal'

function Footer() {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <div className='footer_container'>
        <h2>Empowering a brighter,healthier <br /> future with Ithis Medicity <br /><hr /> <span></span></h2>

        <div>
          <h5>An initiative of ithi educational trust</h5>
          <h6>We are a part of a wider group of healthcare and educational institutions</h6>
        </div>

        <h5 className='mt-4'>Our networks</h5>
        <div className="footer-links row py-5">
          <div className="col">
            <a href="https://ietcop.com/"><div className='circular-img'>
              <img src="/HomeImages/ietcop-2048x896.png" alt="Logo" />
            </div>
            </a>
              <h5 className='py-3'>iet College of Pharmacy</h5>
          </div>
          <div className="col">
            <a href="https://www.ithismedcity.com/">
            <div className='circular-img'>
              <img src="/HomeImages/iet-institute-of-allied-health-science-logo.png" alt="Logo" />
            </div>
            </a>
            <h5 className='py-3'>ithis medicity</h5>
          </div>
          <div className="col">
             <a href="https://ithishospital.com/">
            <div className='circular-img'>
              <img src="/HomeImages/ithis_hospital.png" alt="Logo" />
            </div>
            </a>
            <h5 className='py-3'>ithis hospital</h5>
          </div>
        </div>

        <div className='row'>
          <div className="col footer_container_1 ">
            <div className='logo_container mb-5'>
              <Link to={'/'}>
                <img src="/Footer/footerLogo.png" className='img-fluid' alt="footerLogo" />
              </Link>
            </div>
            <h6>a world where knowledge meets kindness, science meets service, and learning becomes a lifelong commitment to humanity.</h6>
          </div>
          <div className="col d-flex justify-content-evenly">
            <ul className='list-unstyled d-flex flex-column gap-2 gap-md-2'>
              <li><Link className='text-decoration-none text-light' to="/">Home</Link></li>
              <li><Link className='text-decoration-none text-light' to="/about">About</Link></li>
              <li><Link className='text-decoration-none text-light' to="/bscnursing">BSc Nursing</Link></li>
              <li><Link className='text-decoration-none text-light' to="/dpharm">D Pharm </Link></li>
            </ul>
            <ul className='list-unstyled d-flex flex-column gap-2 gap-md-2'>
              <li><Link className='text-decoration-none text-light' to="/gallery">Facilities</Link></li>
              <li><Link className='text-decoration-none text-light' to="/admission">Admission</Link></li>
              <li><Link className='text-decoration-none text-light' to="/career">Career</Link></li>
              <li><Link className='text-decoration-none text-light' to="/contact">Contact</Link></li>
              <li onClick={() => setShowModal(true)} style={{ cursor: "pointer" }}>Admin Login</li>
            </ul>
          </div>
          <div className="col d-flex justify-content-center align-content-start">
            <ul className='list-unstyled d-flex flex-column gap-md-2'>
              <li ><div ><p><i class="fa-solid fa-envelope fa-xs text-white"></i><span className='mail-location'> Email : ietcollegeofnursing@gmail.com</span></p></div></li>
              <li ><div className='mail-location'><p><i class="fa-solid fa-phone fa-xs text-white"></i><span className='mail-location'> Phone : +91 79022 88866, +91 7902288899</span></p></div></li>
              <li className='d-flex '><div className='mail-location'><p><i class="fa-solid fa-location-dot fa-xs text-white"></i><span className='mail-location'> Location :</span></p> </div> <div><p><span className='mail-location'>Near Inkel City, Oorakam Melmuri,<br /> Panakkad PO,676519</span></p></div></li>
            </ul>
          </div>
          <div className='social_container'>
            <span><i class="fa-brands fa-instagram fa-xs fa-md-lg text-white me-2"></i></span>
            <span><i class="fa-brands fa-square-facebook fa-xs fa-md-lg text-white"></i></span>
          </div>
        </div>
      </div>
      <div className='footer_copyright d-flex justify-content-between px-4 pt-3 pb-2'>
        <div className=''>Copyright &copy;2025 Ithis medicity. All rights reserved</div>
        <div className=' '>Designed by Warmy health connect</div>
      </div>

      <AdminLoginModal show={showModal} onClose={() => setShowModal(false)} />


      {/* Modal Component */}
    </>
  )
}

export default Footer