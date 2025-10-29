import React from 'react'
import './Contact.css'
import Titlebar from '../../Components/Titlebar/Titlebar'

function Contact() {
  return (
    <>
      <Titlebar title={'Contact Us'} />

      <section className='contact_section1'>
        <h1 className=''>
          Reach out to Ithis Medicity for your <br /> academic and admission queries
        </h1>
      </section>

      <section className='contact_section2 px-5' >
        <div className="row">
          <div className="col d-flex flex-column justify-content-between">
            <div>
              <h3>Get in touch</h3>
              <h5>Have questions about our courses or admissions? <br /> Reach out and our team will get back to you soon</h5>
            </div>
            <div>
              <p><span className='icon_bg p-2 rounded-circle me-3'><i class="fa-solid fa-envelope fa-sm text-white"></i></span>ietcollegeofnursing@gmail.com</p>
              <p className='my-4'><span className='icon_bg p-2 rounded-circle me-3'><i class="fa-solid fa-phone fa-sm text-white"></i></span>+91 7902288866, +91 7902288899</p>
              <p><span className='icon_bg p-2 rounded-circle me-3'><i class="fa-solid fa-location-dot fa-sm text-white"></i></span>Near Inkel City, Oorakam Melmuri,Panakkad</p>
            </div>
          </div>

          <div className="col ">
            <form className="p-4 shadow rounded bg-light w-100">
              {/* Row 1: Full Name and Contact Number */}
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control form-control-lg" id="fullName" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contactNumber" className="form-label">
                    Phone Number
                  </label>
                  <input type="tel" className="form-control form-control-lg" id="contactNumber" required />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control form-control-lg" id="email" required />
              </div>

              {/* Row 3: Message */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea className="form-control form-control-lg" id="message" rows="4"></textarea>
              </div>

              {/* Row 4: Submit Button */}
              <div className="text-center">
                <button type="submit" className="submit_btn form-control form-control-lg rounded-pill px-5">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact