import React from 'react';
import './Admission.css';
import Titlebar from '../../Components/Titlebar/Titlebar';

function Admission() {
    return (
        <>
            <Titlebar title={'Admission'} />

            <div className="row mx-auto px-4 my-5 admission-section">

                {/* LEFT INFO BOX */}
                <div className="col info-column">
                    <div className="admission-heading">
                        <h1>
                            Admissions at <span style={{ color: "#3E6FAC" }}>Ithis Medicity Nursing College</span>
                        </h1>
                    </div>

                    <div className="info-box">
                        <p>
                            Ithis Medicity Nursing College nurtures future nurses through quality education,
                            expert guidance, and hands-on clinical experience.
                        </p>
                    </div>

                    <div className="img-container">
                        <p>Email : <br /> ietcollegeofnursing@gmail.com</p>
                        <p>Phone : <br /> +91 79022 88866, +91 79022 88899</p>
                    </div>
                </div>

                {/* RIGHT: FORM */}
                <div className="col form-column">
                    <div className="form-wrapper">

                        <form className="form-content" encType="multipart/form-data">

                            {/* ------------------- BASIC DETAILS ------------------- */}

                            <h3>Basic Details</h3>

                            <div className="row-inputs">
                                <label>
                                    Student Name
                                    <input type="text" name="name" required />
                                </label>

                                <label>
                                    Mobile
                                    <input type="text" name="mobile" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Email
                                    <input type="email" name="email" required />
                                </label>

                                <label>
                                    Date of Birth
                                    <input type="date" name="dob" required />
                                </label>
                            </div>

                            <div className="row-inputs gender-row">
                                <label className="gender-label d-block text-center mb-2">Gender</label>
                                <div className="gender-options d-flex justify-content-center gap-4">
                                    <label><input type="radio" name="gender" value="Male" /> Male</label>
                                    <label><input type="radio" name="gender" value="Female" /> Female</label>
                                    <label><input type="radio" name="gender" value="Other" /> Other</label>
                                </div>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Aadhar Number
                                    <input type="text" name="aadharNumber" required />
                                </label>
                                <label>
                                    Religion
                                    <input type="text" name="religion" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Blood Group
                                    <select name="bloodGroup" required>
                                        <option value=""></option>
                                        <option value="A+">A+</option>
                                        <option value="B+">B+</option>
                                        <option value="O+">O+</option>
                                        <option value="AB+">AB+</option>
                                    </select>
                                </label>

                                <label>
                                    Nationality
                                    <select name="nationality" required>
                                        <option value="Indian">Indian</option>
                                        <option value="NRI">NRI</option>
                                    </select>
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Caste and category
                                    <input type="text" name="casteCategory" required />
                                </label>
                            </div>

                            {/* Passport Photo */}
                            <div className="row-inputs">
                                <label className="full-width">
                                    Upload Passport Size Photo
                                    <input type="file" name="studentphoto" required />
                                </label>
                            </div>


                            {/* ------------------- PARENT DETAILS ------------------- */}

                            <h3>Parent / Guardian Details</h3>

                            <div className="row-inputs">
                                <label>
                                    Parent Full Name
                                    <input type="text" name="fullName" required />
                                </label>

                                <label>
                                    Relationship
                                    <input type="text" name="relationship" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Guardian Mobile
                                    <input type="text" name="guardianMobile" required />
                                </label>

                                <label>
                                    Parent Email
                                    <input type="email" name="parentEmail" required />
                                </label>
                            </div>


                            {/* ------------------- ADDRESS ------------------- */}

                            <h3>Present Address</h3>

                            <div className="row-inputs">
                                <label>
                                    House / Flat No
                                    <input type="text" name="houseName" required />
                                </label>

                                <label>
                                    Street / Lane
                                    <input type="text" name="street" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label className="full-width">
                                    Landmark (Optional)
                                    <input type="text" name="landmark" />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    District
                                    <input type="text" name="district" required />
                                </label>

                                <label>
                                    State
                                    <input type="text" name="state" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Pincode
                                    <input type="text" name="pincode" required />
                                </label>

                                <label>
                                    Mobile
                                    <input type="text" name="addressmobile" required />
                                </label>
                            </div>


                            {/* ------------------- EDUCATIONAL DETAILS ------------------- */}

                            <h3>Educational Details</h3>

                            <div className="row-inputs">
                                <label>
                                    Institution & State
                                    <input type="text" name="institutionAndState" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label>
                                    Year of Passing
                                    <input type="number" name="yearOfPassing" required />
                                </label>

                                <label>
                                    Register Number
                                    <input type="text" name="registerNumber" required />
                                </label>
                            </div>

                            <h4>Marks Obtained</h4>

                            <div className="marks-section">
                                <div className="marks-row">
                                    <label>Chemistry</label>
                                    <input type="number" name="chemistry" required />
                                </div>

                                <div className="marks-row">
                                    <label>Physics</label>
                                    <input type="number" name="physics" required />
                                </div>

                                <div className="marks-row">
                                    <label>English</label>
                                    <input type="number" name="english" required />
                                </div>

                                <div className="marks-row">
                                    <label>Biology</label>
                                    <input type="number" name="biology" required />
                                </div>

                                <div className="marks-row">
                                    <label>Total Marks</label>
                                    <input type="number" name="total" required />
                                </div>
                            </div>


                            {/* ------------------- DOCUMENTS ------------------- */}

                            <h3>Required Documents (PDF Only)</h3>

                            <div className="row-inputs">
                                <label className="full-width">
                                    SSLC / Age Proof (PDF)
                                    <input type="file" accept=".pdf" name="sslcProof" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label className="full-width">
                                    Plus Two Certificate (PDF)
                                    <input type="file" accept=".pdf" name="plusTwoCertificate" required />
                                </label>
                            </div>

                            <div className="row-inputs">
                                <label className="full-width">
                                    Signature (PDF)
                                    <input type="file" accept=".pdf" name="signatures" required />
                                </label>
                            </div>

                        </form>

                        {/* Submit Button */}
                        <div className="form-button">
                            <button type="submit" className="btn btn-light">
                                Submit Application
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Admission;
