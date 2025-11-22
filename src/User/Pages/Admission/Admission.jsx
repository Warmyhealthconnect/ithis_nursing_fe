import { useState } from 'react';
import './Admission.css';
import Titlebar from '../../Components/Titlebar/Titlebar';
import { addAdmissionApi } from '../../../../services/allApis';
import { useNavigate } from 'react-router-dom';

function Admission() {

  const [details, setDetails] = useState({
    basicDetails: { studentphoto: "", name: "", dob: "", aadharNumber: "", religion: "", mobile: "", gender: "", nationality: "", bloodGroup: "", casteCategory: "", email: "" },
    parentDetails: { parentName: "", relationship: "", guardianMobile: "", parentEmail: "" },
    address: { houseName: "", street: "", landmark: "", district: "", state: "", pincode: "", addressmobile: "" },
    qualificationDetails: { institutionAndState: "", yearOfPassing: "", registerNumber: "", marks: { chemistry: "", physics: "", english: "", biologyOrEquivalent: "", total: "" } },
    documents: { sslcProof: "", plusTwoCertificate: "", signatures: "" },
    declaration: { prospectusAgreement: false, truthDeclaration: false } // <-- added
  });

  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append files with the field names Multer expects
      formData.append("studentphoto", details.basicDetails.studentphoto);
      formData.append("sslcProof", details.documents.sslcProof);
      formData.append("plusTwoCertificate", details.documents.plusTwoCertificate);
      formData.append("signatures", details.documents.signatures);

      // Append other data as JSON string
      // We send everything except files
      const nonFileData = {
        basicDetails: { ...details.basicDetails, studentphoto: undefined },
        parentDetails: details.parentDetails,
        address: details.address,
        qualificationDetails: details.qualificationDetails,
        documents: {
          sslcProof: undefined,
          plusTwoCertificate: undefined,
          signatures: undefined,
        },
        declaration: details.declaration
      };

      formData.append("data", JSON.stringify(nonFileData));

      // Call API
      const res = await addAdmissionApi(formData);

      console.log("Response:", res);
      nav('/payu', {
        state: {
          applicationNumber: res?.data?.applicationNumber,
          studentName: res?.data?.studentName,
          email: details.basicDetails.email,
          phone: details.basicDetails.mobile
        }
      });
    } catch (error) {
      console.error("Error submitting admission:", error);
    }
  };



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
                  <input type="text" name="name" required onChange={(e) => setDetails({ ...details, basicDetails: { ...details.basicDetails, name: e.target.value } })} />
                </label>

                <label>
                  Mobile
                  <input type="text" name="mobile" required onChange={(e) => setDetails({ ...details, basicDetails: { ...details.basicDetails, mobile: e.target.value } })} />
                </label>
              </div>

              <div className="row-inputs">
                <label>
                  Email
                  <input type="email" name="email" required onChange={(e) => setDetails({ ...details, basicDetails: { ...details.basicDetails, email: e.target.value } })} />
                </label>

                <label>
                  Date of Birth
                  <input type="date" name="dob" required onChange={(e) => setDetails({ ...details, basicDetails: { ...details.basicDetails, dob: e.target.value } })} />
                </label>
              </div>

              <div className="row-inputs gender-row">
                <label className="gender-label d-block text-center mb-2">Gender</label>

                <div className="gender-options d-flex justify-content-center gap-4">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          basicDetails: { ...details.basicDetails, gender: e.target.value }
                        })
                      }
                      checked={details.basicDetails.gender === "Male"}
                    />
                    Male
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          basicDetails: { ...details.basicDetails, gender: e.target.value }
                        })
                      }
                      checked={details.basicDetails.gender === "Female"}
                    />
                    Female
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          basicDetails: { ...details.basicDetails, gender: e.target.value }
                        })
                      }
                      checked={details.basicDetails.gender === "Other"}
                    />
                    Other
                  </label>
                </div>
              </div>



              <div className="row-inputs">
                <label>
                  Aadhar Number
                  <input type="text" name="aadharNumber" required onChange={(e) => setDetails({ ...details, basicDetails: { ...details.basicDetails, aadharNumber: e.target.value } })} />
                </label>
                <label>
                  Religion
                  <input type="text" name="religion" required onChange={(e) => setDetails({ ...details, basicDetails: { ...details.basicDetails, religion: e.target.value } })} />
                </label>
              </div>

              <div className="row-inputs">
                <label>
                  Blood Group
                  <select name="bloodGroup" required onChange={(e) => setDetails({ ...details, basicDetails: { ...details.basicDetails, bloodGroup: e.target.value } })}>
                    <option value=""></option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                    <option value="AB+">AB+</option>
                  </select>
                </label>

                <label>
                  Nationality
                  <select name="nationality" required onChange={(e) => setDetails({ ...details, basicDetails: { ...details.basicDetails, nationality: e.target.value } })}>
                    <option value=""></option>
                    <option value="Indian">Indian</option>
                    <option value="NRI">NRI</option>
                  </select>
                </label>
              </div>

              <div className="row-inputs">
                <label>
                  Caste and category
                  <input type="text" name="casteCategory" required onChange={(e) => setDetails({ ...details, basicDetails: { ...details.basicDetails, casteCategory: e.target.value } })} />
                </label>
              </div>

              {/* Passport Photo */}
              <div className="row-inputs">
                <label className="full-width">
                  Upload Passport Size Photo
                  <input type="file" name="studentphoto" required onChange={(e) => setDetails({ ...details, basicDetails: { ...details.basicDetails, studentphoto: e.target.files[0] } })} />
                </label>
              </div>


              {/* ------------------- PARENT DETAILS ------------------- */}

              <h3>Parent / Guardian Details</h3>

              <div className="row-inputs">
                <label>
                  Parent Full Name
                  <input type="text" name="parentName" required onChange={(e) => setDetails({ ...details, parentDetails: { ...details.parentDetails, parentName: e.target.value } })} />
                </label>

                <label>
                  Relationship
                  <input type="text" name="relationship" required onChange={(e) => setDetails({ ...details, parentDetails: { ...details.parentDetails, relationship: e.target.value } })} />
                </label>
              </div>

              <div className="row-inputs">
                <label>
                  Guardian Mobile
                  <input type="text" name="guardianMobile" required onChange={(e) => setDetails({ ...details, parentDetails: { ...details.parentDetails, guardianMobile: e.target.value } })} />
                </label>

                <label>
                  Parent Email
                  <input type="email" name="parentEmail" required onChange={(e) => setDetails({ ...details, parentDetails: { ...details.parentDetails, parentEmail: e.target.value } })} />
                </label>
              </div>


              {/* ------------------- ADDRESS ------------------- */}

              <h3>Present Address</h3>

              <div className="row-inputs">
                <label>
                  House / Flat No
                  <input type="text" name="houseName" required onChange={(e) => setDetails({ ...details, address: { ...details.address, houseName: e.target.value } })} />
                </label>

                <label>
                  Street / Lane
                  <input type="text" name="street" required onChange={(e) => setDetails({ ...details, address: { ...details.address, street: e.target.value } })} />
                </label>
              </div>

              <div className="row-inputs">
                <label className="full-width">
                  Landmark (Optional)
                  <input type="text" name="landmark" onChange={(e) => setDetails({ ...details, address: { ...details.address, landmark: e.target.value } })} />
                </label>
              </div>

              <div className="row-inputs">
                <label>
                  District
                  <input type="text" name="district" required onChange={(e) => setDetails({ ...details, address: { ...details.address, district: e.target.value } })} />
                </label>

                <label>
                  State
                  <input type="text" name="state" required onChange={(e) => setDetails({ ...details, address: { ...details.address, state: e.target.value } })} />
                </label>
              </div>

              <div className="row-inputs">
                <label>
                  Pincode
                  <input type="text" name="pincode" required onChange={(e) => setDetails({ ...details, address: { ...details.address, pincode: e.target.value } })} />
                </label>

                <label>
                  Mobile
                  <input type="text" name="addressmobile" required onChange={(e) => setDetails({ ...details, address: { ...details.address, addressmobile: e.target.value } })} />
                </label>
              </div>


              {/* ------------------- EDUCATIONAL DETAILS ------------------- */}

              <h3>Educational Details</h3>

              <div className="row-inputs">
                <label>
                  Institution & State
                  <input type="text" name="institutionAndState" required onChange={(e) => setDetails({ ...details, qualificationDetails: { ...details.qualificationDetails, institutionAndState: e.target.value } })} />
                </label>
              </div>

              <div className="row-inputs">
                <label>
                  Year of Passing
                  <input type="number" name="yearOfPassing" required onChange={(e) => setDetails({ ...details, qualificationDetails: { ...details.qualificationDetails, yearOfPassing: e.target.value } })} />
                </label>

                <label>
                  Register Number
                  <input type="text" name="registerNumber" required onChange={(e) => setDetails({ ...details, qualificationDetails: { ...details.qualificationDetails, registerNumber: e.target.value } })} />
                </label>
              </div>

              <h4>Marks Obtained</h4>

              <div className="marks-section">
                <div className="marks-row">
                  <label>Chemistry</label>
                  <input type="number" name="chemistry" required onChange={(e) => setDetails({ ...details, qualificationDetails: { ...details.qualificationDetails, marks: { ...details.qualificationDetails.marks, chemistry: e.target.value } } })}
                    value={details.qualificationDetails.marks.chemistry} />
                </div>

                <div className="marks-row">
                  <label>Physics</label>
                  <input type="number" name="physics" required onChange={(e) => setDetails({ ...details, qualificationDetails: { ...details.qualificationDetails, marks: { ...details.qualificationDetails.marks, physics: e.target.value } } })}
                    value={details.qualificationDetails.marks.physics} />
                </div>

                <div className="marks-row">
                  <label>English</label>
                  <input type="number" name="english" required onChange={(e) => setDetails({ ...details, qualificationDetails: { ...details.qualificationDetails, marks: { ...details.qualificationDetails.marks, english: e.target.value } } })}
                    value={details.qualificationDetails.marks.english} />
                </div>

                <div className="marks-row">
                  <label>Biology or equivalent</label>
                  <input type="number" name="biologyOrEquivalent" required onChange={(e) => setDetails({ ...details, qualificationDetails: { ...details.qualificationDetails, marks: { ...details.qualificationDetails.marks, biologyOrEquivalent: e.target.value } } })}
                    value={details.qualificationDetails.marks.biologyOrEquivalent} />
                </div>

                <div className="marks-row">
                  <label>Total</label>
                  <input type="number" name="total" required onChange={(e) => setDetails({ ...details, qualificationDetails: { ...details.qualificationDetails, marks: { ...details.qualificationDetails.marks, total: e.target.value } } })}
                    value={details.qualificationDetails.marks.total} />
                </div>
              </div>


              {/* ------------------- DOCUMENTS ------------------- */}

              <h3>Required Documents (PDF Only)</h3>

              <div className="row-inputs">
                <label className="full-width">
                  SSLC / Age Proof (PDF)
                  <input type="file" accept=".pdf" name="sslcProof" required onChange={(e) => setDetails({ ...details, documents: { ...details.documents, sslcProof: e.target.files[0] } })} />
                </label>
              </div>

              <div className="row-inputs">
                <label className="full-width">
                  Plus Two Certificate (PDF)
                  <input type="file" accept=".pdf" name="plusTwoCertificate" required onChange={(e) => setDetails({ ...details, documents: { ...details.documents, plusTwoCertificate: e.target.files[0] } })} />
                </label>
              </div>

              <div className="row-inputs">
                <label className="full-width">
                  Signature (PDF)
                  <input type="file" accept=".pdf" name="signatures" required onChange={(e) => setDetails({ ...details, documents: { ...details.documents, signatures: e.target.files[0] } })} />
                </label>
              </div>

              {/* ------------------- DECLARATION ------------------- */}

              <h3>Declaration by the Applicant</h3>

              <div className="declaration-section">
                <label className="declaration-label d-block mb-2">
                  <input
                    type="checkbox"
                    name="prospectusAgreement"
                    required
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        declaration: {
                          ...details.declaration,
                          prospectusAgreement: e.target.checked
                        }
                      })
                    }
                    checked={details.declaration?.prospectusAgreement || false}
                  />
                  I hereby declare that I have read the various clauses in the prospectus for admission to BSc Nursing course & the instructions carefully & I agree to abide by them
                </label>

                <label className="declaration-label d-block">
                  <input
                    type="checkbox"
                    name="truthDeclaration"
                    required
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        declaration: {
                          ...details.declaration,
                          truthDeclaration: e.target.checked
                        }
                      })
                    }
                    checked={details.declaration?.truthDeclaration || false}
                  />
                  I also declare that all statements in the application are true, complete & correct to the best of my knowledge & belief
                </label>
              </div>


            </form>

            {/* Submit Button */}
            <div className="form-button">
              <button type="submit" className="btn btn-light" onClick={(e) => handleSubmit(e)}>
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
