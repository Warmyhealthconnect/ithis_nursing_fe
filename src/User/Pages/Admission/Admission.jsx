import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Admission.css'
import Titlebar from '../../Components/Titlebar/Titlebar'
import { addAdmissionApi } from '../../../../services/allApis'

function Admission() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    gender: "",
    address: "",
    aadhar: "",
    email2: "",
    bloodgroup: "",
    nationality: "",
    caste: "",
    category: "",
    qualification: "",
    lastInstitute: "",
    qualificationState: "",
    passingYear: "",
    registerNumber: "",
    englishMarks: "",
    chemistryMarks: "",
    physicsMarks: "",
    biologyMarks: "",
    totalMarks: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addAdmissionApi(formData);
      console.log("Admission submitted:", result);
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        mobile: "",
        email: "",
        dob: "",
        gender: "",
        address: "",
        aadhar: "",
        email2: "",
        bloodgroup: "",
        nationality: "",
        caste: "",
        category: "",
        qualification: "",
        lastInstitute: "",
        qualificationState: "",
        passingYear: "",
        registerNumber: "",
        englishMarks: "",
        chemistryMarks: "",
        physicsMarks: "",
        biologyMarks: "",
        totalMarks: ""
      });

    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Titlebar title={'Admission'} />

      <div className="row mx-auto px-4 my-5 admission-section">
        {/* Left Info Column */}
        <div className="col info-column">
          <div className="admission-heading">
            <h1>
              Admissions at <span style={{ color: "#3E6FAC" }}>Ithis Medicity Nursing College</span>
            </h1>
          </div>

          <div className="info-box">
            <p>
              Ithis Medicity Nursing College nurtures future nurses through quality education, expert guidance, and hands-on clinical experience.
            </p>
          </div>

          <div className="img-container">
            <p>Email : <br />
              ietcollegeofnursing@gmail.com</p>

            <p>Phone : <br />
              +91 79022 88866, +91 79022 88899</p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="col form-column">
          <div className="form-wrapper">
            <form className="form-content" onSubmit={handleSubmit}>
              
              {/* Row 1: Name & Mobile */}
              <div className="row-inputs">
                <label>
                  Name
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                  Mobile No
                  <input type="number" name="mobile" value={formData.mobile} onChange={handleChange} />
                </label>
              </div>

              {/* Row 2: Email & DOB */}
              <div className="row-inputs">
                <label>
                  Email
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                  DOB
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                </label>
              </div>

              {/* Row 3: Gender */}
              <div className="row-inputs gender-row">
                <label className="gender-label d-block text-center mb-2">Gender</label>
                <div className="gender-options d-flex justify-content-center gap-4">
                  <label className="d-flex align-items-center">
                    <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} />
                    <span className="ms-1">Male</span>
                  </label>
                  <label className="d-flex align-items-center">
                    <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} />
                    <span className="ms-1">Female</span>
                  </label>
                  <label className="d-flex align-items-center">
                    <input type="radio" name="gender" value="other" checked={formData.gender === "other"} onChange={handleChange} />
                    <span className="ms-1">Other</span>
                  </label>
                </div>
              </div>

              {/* Row 4: Address */}
              <div className="row-inputs">
                <label className="full-width">
                  Address
                  <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </label>
              </div>

              {/* Row 5: Aadhar & Email2 */}
              <div className="row-inputs">
                <label>
                  Aadhar Number
                  <input type="number" name="aadhar" value={formData.aadhar} onChange={handleChange} />
                </label>
                <label>
                  Alternate Email
                  <input type="email" name="email2" value={formData.email2} onChange={handleChange} />
                </label>
              </div>

              {/* Row 6: Blood Group & Nationality */}
              <div className="row row-inputs align-items-start">
                <label className='col mx-0'>
                  Blood Group
                  <select name="bloodgroup" value={formData.bloodgroup} onChange={handleChange}>
                    <option value=""></option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                    <option value="AB+">AB+</option>
                  </select>
                </label>

                <div className="col nationality_options">
                  <label className="d-block mb-2">Nationality</label>
                  <div className='d-flex gap-4'>
                    <label className="d-flex align-items-center">
                      <input type="radio" name="nationality" value="Indian" checked={formData.nationality === "Indian"} onChange={handleChange} />
                      <span className="ms-1">Indian</span>
                    </label>
                    <label className="d-flex align-items-center">
                      <input type="radio" name="nationality" value="Other" checked={formData.nationality === "Other"} onChange={handleChange} />
                      <span className="ms-1">Other</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Row 7: Caste & Category */}
              <div className="row-inputs">
                <label>
                  Caste
                  <input type="text" name="caste" value={formData.caste} onChange={handleChange} />
                </label>
                <label>
                  Category
                  <input type="text" name="category" value={formData.category} onChange={handleChange} />
                </label>
              </div>

              <h3>Educational Details</h3>

              {/* Qualification */}
              <div className="row-inputs">
                <label>
                  Qualification
                  <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} />
                </label>
              </div>

              {/* Institute & State */}
              <div className="row-inputs">
                <label>
                  Institute of Last Qualification
                  <input type="text" name="lastInstitute" value={formData.lastInstitute} onChange={handleChange} />
                </label>
                <label>
                  State of Qualification
                  <input type="text" name="qualificationState" value={formData.qualificationState} onChange={handleChange} />
                </label>
              </div>

              {/* Year & Register */}
              <div className="row-inputs">
                <label>
                  Year of Passing
                  <input type="number" name="passingYear" value={formData.passingYear} onChange={handleChange} />
                </label>
                <label>
                  Register Number
                  <input type="text" name="registerNumber" value={formData.registerNumber} onChange={handleChange} />
                </label>
              </div>

              {/* Marks */}
              <div className="marks-section">
                <h4 className="marks-section-label">Marks Obtained</h4>

                <div className="marks-row">
                  <label className="marks-label">English</label>
                  <input type="number" name="englishMarks" value={formData.englishMarks} onChange={handleChange} className="marks-input" />
                </div>
                <div className="marks-row">
                  <label className="marks-label">Chemistry</label>
                  <input type="number" name="chemistryMarks" value={formData.chemistryMarks} onChange={handleChange} className="marks-input" />
                </div>
                <div className="marks-row">
                  <label className="marks-label">Physics</label>
                  <input type="number" name="physicsMarks" value={formData.physicsMarks} onChange={handleChange} className="marks-input" />
                </div>
                <div className="marks-row">
                  <label className="marks-label">Biology / Equivalent</label>
                  <input type="number" name="biologyMarks" value={formData.biologyMarks} onChange={handleChange} className="marks-input" />
                </div>
                <div className="marks-row">
                  <label className="marks-label">Total Marks</label>
                  <input type="number" name="totalMarks" value={formData.totalMarks} onChange={handleChange} className="marks-input" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-button text-center mt-4">
                <button type="submit" className="btn btn-light">
                  Send
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admission
