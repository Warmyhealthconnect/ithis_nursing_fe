import React from 'react'
import { Link } from 'react-router-dom'
import './Admission.css'
import Titlebar from '../../Components/Titlebar/Titlebar'

function Admission() {
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
                        <form className="form-content">
                            {/* Row 1: Name & Mobile */}
                            <div className="row-inputs">
                                <label>
                                    Name
                                    <input type="text" name="name" />
                                </label>
                                <label>
                                    Mobile No
                                    <input type="number" name="mobile" />
                                </label>
                            </div>

                            {/* Row 2: Email & DOB */}
                            <div className="row-inputs">
                                <label>
                                    Email
                                    <input type="email" name="email" />
                                </label>
                                <label>
                                    DOB
                                    <input type="date" name="dob" />
                                </label>
                            </div>

                            {/* Row 3: Gender */}
                            <div className="row-inputs gender-row">
                                <label className="gender-label d-block text-center mb-2">Gender</label>
                                <div className="gender-options d-flex justify-content-center gap-4">
                                    <label className="d-flex align-items-center">
                                        <input type="radio" name="gender" value="male" />
                                        <span className="ms-1">Male</span>
                                    </label>
                                    <label className="d-flex align-items-center">
                                        <input type="radio" name="gender" value="female" />
                                        <span className="ms-1">Female</span>
                                    </label>
                                    <label className="d-flex align-items-center">
                                        <input type="radio" name="gender" value="other" />
                                        <span className="ms-1">Other</span>
                                    </label>
                                </div>
                            </div>


                            {/* Row 4: Address */}
                            <div className="row-inputs">
                                <label className="full-width">
                                    Address
                                    <input type="text" name="address" />
                                </label>
                            </div>



                            {/* Row 7: Aadhar Number & Email */}
                            <div className="row-inputs">
                                <label>
                                    Aadhar Number
                                    <input type="number" name="aadhar" />
                                </label>
                                <label>
                                    Email
                                    <input type="email" name="email2" />
                                </label>
                            </div>

                            {/* Row 8: Blood Group & Nationality */}
                            <div className="row row-inputs align-items-start">
                                <label className='col mx-0'>
                                    Blood Group
                                    <select name="bloodgroup">
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
                                            <input type="radio" name="nationality" value="Indian" />
                                            <span className="ms-1">Indian</span>
                                        </label>
                                        <label className="d-flex align-items-center">
                                            <input type="radio" name="nationality" value="Other" />
                                            <span className="ms-1">Other</span>
                                        </label>
                                    </div>
                                </div>
                            </div>


                            {/* Row 9: Caste & Category */}
                            <div className="row-inputs">
                                <label>
                                    Caste
                                    <input type="text" name="caste" />
                                </label>
                                <label>
                                    Category
                                    <input type="text" name="category" />
                                </label>
                            </div>

                            <h3>Educational Details</h3>

                            {/* Row 5: Course & Qualification */}
                            <div className="row-inputs">
                                <label>
                                    Qualification
                                    <input type="text" name="qualification" />
                                </label>
                            </div>

                            {/* Row 9: Institute & State of Last Qualification */}
                            <div className="row-inputs">
                                <label>
                                    Institute of Last Qualification
                                    <input type="text" name="lastInstitute" />
                                </label>
                                <label>
                                    State of Qualification
                                    <input type="text" name="qualificationState" />
                                </label>
                            </div>

                            {/* Row 10: Year of Passing & Register Number */}
                            <div className="row-inputs">
                                <label>
                                    Year of Passing
                                    <input type="number" name="passingYear" />
                                </label>
                                <label>
                                    Register Number
                                    <input type="text" name="registerNumber" />
                                </label>
                            </div>

                            {/* Row 11: Marks Section */}
                            <div className="marks-section">
                                <h4 className="marks-section-label">Marks Obtained</h4>

                                <div className="marks-row">
                                    <label className="marks-label">English</label>
                                    <input type="number" name="englishMarks" className="marks-input" />
                                </div>

                                <div className="marks-row">
                                    <label className="marks-label">Chemistry</label>
                                    <input type="number" name="chemistryMarks" className="marks-input" />
                                </div>

                                <div className="marks-row">
                                    <label className="marks-label">Physics</label>
                                    <input type="number" name="physicsMarks" className="marks-input" />
                                </div>

                                <div className="marks-row">
                                    <label className="marks-label">Biology / Equivalent</label>
                                    <input type="number" name="biologyMarks" className="marks-input" />
                                </div>

                                <div className="marks-row">
                                    <label className="marks-label">Total Marks</label>
                                    <input type="number" name="totalMarks" className="marks-input" />
                                </div>
                            </div>

                            <h3>Documents uploaded along with the application</h3>

                            {/* Row 1: Passport Photo */}
                            <div className="row-inputs">
                                <label className="full-width">
                                    Upload Passport Size Photo
                                    <input type="file" name="photo" />
                                </label>
                            </div>

                            {/* Row 2: SSLC / Equivalent Certificate */}
                            <div className="row-inputs">
                                <label className="full-width">
                                    Copy of relevant page of SSLC / Equivalent Board Certificate as proof of Age and DOB (PDF)
                                    <input type="file" name="ageProof" accept=".pdf" />
                                </label>
                            </div>

                            {/* Row 3: Qualifying Exam Certificate / Marksheet */}
                            <div className="row-inputs">
                                <label className="full-width">
                                    Copy of Certificate and Marklist of Qualifying Examination (Plus Two / CBSE / PDF of Result Sheet from Website)
                                    <input type="file" name="qualifyingCert" accept=".pdf" />
                                </label>
                            </div>


                        </form>



                        {/* Fixed Submit Button */}
                        <div className="form-button">
                            <button type="submit" className="btn btn-light">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Admission