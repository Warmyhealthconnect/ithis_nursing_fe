import React from 'react'
import './CareerDetails.css'
import Titlebar from '../../Components/Titlebar/Titlebar'

function Carrerdetails() {
  return (
    <>
    <Titlebar title={"Career Details"}/>
    <div className="career-details-container">
        <div className="heading-div">
            <h1>Details</h1>
        </div>

        <div className="job-details-container">
            <div className="job-details">
                <h1>Assistant Professor – Nursing</h1>
                <p style={{color:"#646464"}}>Closing date:12-11-2025</p>
                <p>Email : <span style={{color:"#183559"}}>ietcollegeofnursing@gmail.com</span></p>
            </div>

            <div className="job-description">
                <h1>Job Description</h1>
                <p>Experience 3 years and above</p>
                <p>Qualification : M.Sc Nursing</p>
                <p>Please share the resume to ietcollegeofnursing@gmail.com</p>
                <p>Contact number : +91 79022 88866, +91 79022 88899</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Carrerdetails