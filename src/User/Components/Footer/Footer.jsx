import React, { useState } from 'react'
import './Footer.css'
import { Link, useNavigate } from 'react-router-dom'


function Footer() {
 
  return (
    <>
      <div className='footer_container'>
        <h2>Empowering a brighter,healthier <br /> future with Ithis Medicity <br /><hr /></h2>
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
            <ul className='list-unstyled d-flex flex-column gap-2 gap-md-4'>
              <li><Link className='text-decoration-none text-light' to="/">Home</Link></li>
              <li><Link className='text-decoration-none text-light' to="/about">About</Link></li>
              <li><Link className='text-decoration-none text-light' to="/bscnursing">BSc Nursing</Link></li>
              <li><Link className='text-decoration-none text-light' to="/dpharm">D Pharm </Link></li>
            </ul>
            <ul className='list-unstyled d-flex flex-column gap-2 gap-md-4'>
              <li><Link className='text-decoration-none text-light' to="/gallery">Facilities</Link></li>
              <li><Link className='text-decoration-none text-light' to="/admission">Admission</Link></li>
              <li><Link className='text-decoration-none text-light' to="/career">Career</Link></li>
              <li><Link className='text-decoration-none text-light' to="/contact">Contact</Link></li>
              <li style={{ cursor: "pointer" }}>Admin Login</li>
            </ul>
          </div>
          <div className="col d-flex justify-content-center">
            <ul className='list-unstyled d-flex flex-column gap-md-4'>
              <li><div><p><i class="fa-solid fa-envelope fa-sm text-white"></i> Email : ietcollegeofnursing@gmail.com</p></div></li>
              <li><div><p><i class="fa-solid fa-phone fa-sm text-white"></i> Phone : +91 79022 88866, +91 7902288899</p></div></li>
              <li className='d-flex'><div><p><i class="fa-solid fa-location-dot fa-sm text-white"></i> Location :</p> </div> <div><p>Near Inkel City, Oorakam Melmuri,<br /> Panakkad PO,676519</p></div></li>
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

      {/* Modal Component */}
    </>
  )
}

export default Footer