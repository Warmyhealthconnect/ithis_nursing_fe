import React from 'react'
import './Career.css'
import Titlebar from '../../Components/Titlebar/Titlebar'
import { Link } from 'react-router-dom'

function Career() {

  const careers = [
    {
      name: "Assistant Professor – Nursing",
      field: "BSC Nursing",
      date: "12-11-2025"
    },
    {
      name: "Professor – Medical Surgical Nursing",
      field: "BSC Nursing",
      date: "12-11-2025"
    },
    {
      name: "Pharmacy Lecturer – Pharmacognosy",
      field: "D Pharm",
      date: "12-11-2025"
    },
    {
      name: "Assistant Professor – Pharmaceutical Chemistry",
      field: "D Pharm",
      date: "12-11-2025"
    }
  ]

  return (
    <>

      <Titlebar title={'Career'} />

      <div className="career-container">
        <div className="career-headng">
          <h1>Career</h1>
        </div>

        <div className="careers">
          {careers.map(item => (
            <div className="career-box">
              <div className="career-info">
                <h1 className='career-name'>{item.name}</h1>
                <h1 className='career-field'>{item.field}</h1>
                <h1 className='career-date'>Closing date: {item.date}</h1>
              </div>
              <div className="details-button-section">
                <Link className="btn details-btn" to={'/careerdetails'}>View Details</Link>
              </div>
            </div>
          ))}


        </div>
      </div>

    </>
  )
}

export default Career