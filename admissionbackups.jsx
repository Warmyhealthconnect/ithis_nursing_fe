  import { useState } from 'react';
  import './Admission.css';
  import Titlebar from '../../Components/Titlebar/Titlebar';
  import { addAdmissionApi } from '../../../../services/allApis';

  function Admission() {

    const [details, setDetails] = useState({
      studentphoto: "",
      name: "",
      dob: "",
      aadharNumber: "",
      religion: "",
      mobile: "",
      gender: "",
      nationality: "",
      bloodGroup: "",
      casteCategory: "",
      email: "",
      parentName: "",
      relationship: "",
      guardianMobile: "",
      parentEmail: "",
      houseName: "",
      street: "",
      landmark: "",
      district: "",
      state: "",
      pincode: "",
      addressmobile: "",
      institutionAndState: "",
      yearOfPassing: "",
      registerNumber: "",
      chemistry: "",
      physics: "",
      english: "",
      biologyOrEquivalent: "",
      total: "",
      sslcProof: "",
      plusTwoCertificate: "",
      signatures: ""
    })

    const handleSubmit = async (e) => {
      e.preventDefault();

      // --- BASIC VALIDATIONS ---

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(details.email)) {
        return alert("Please enter a valid email address");
      }

      // Phone number validation (10 digits)
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(details.mobile)) {
        return alert("Mobile number must be 10 digits");
      }

      // Guardian mobile validation (optional: same 10 digits)
      if (!phoneRegex.test(details.guardianMobile)) {
        return alert("Guardian mobile must be 10 digits");
      }

      // Address mobile
      if (!phoneRegex.test(details.addressmobile)) {
        return alert("Address mobile must be 10 digits");
      }

      // Aadhar validation (12 digits)
      const aadharRegex = /^[0-9]{12}$/;
      if (!aadharRegex.test(details.aadharNumber)) {
        return alert("Aadhar number must be exactly 12 digits");
      }

      // Pincode validation (6 digits)
      const pincodeRegex = /^[0-9]{6}$/;
      if (!pincodeRegex.test(details.pincode)) {
        return alert("Pincode must be 6 digits");
      }

      // Year of passing validation
      const year = parseInt(details.yearOfPassing);
      if (year < 1990 || year > new Date().getFullYear()) {
        return alert("Enter a valid year of passing");
      }

      // Marks validation
      const chemistry = Number(details.chemistry);
      const physics = Number(details.physics);
      const english = Number(details.english);
      const bio = Number(details.biologyOrEquivalent);
      const total = Number(details.total);

      if (chemistry < 0 || physics < 0 || english < 0 || bio < 0) {
        return alert("Marks cannot be negative");
      }

      if (total !== chemistry + physics + english + bio) {
        return alert("Total does not match the sum of all subjects!");
      }

      const formData = new FormData();

      // BASIC DETAILS
      formData.append("basicDetails[studentphoto]", details.studentphoto);
      formData.append("basicDetails[name]", details.name);
      formData.append("basicDetails[dob]", details.dob);
      formData.append("basicDetails[aadharNumber]", details.aadharNumber);
      formData.append("basicDetails[religion]", details.religion);
      formData.append("basicDetails[mobile]", details.mobile);
      formData.append("basicDetails[gender]", details.gender);
      formData.append("basicDetails[nationality]", details.nationality);
      formData.append("basicDetails[bloodGroup]", details.bloodGroup);
      formData.append("basicDetails[casteCategory]", details.casteCategory);
      formData.append("basicDetails[email]", details.email);


      // PARENT DETAILS
      formData.append("parentDetails[parentName]", details.parentName);
      formData.append("parentDetails[relationship]", details.relationship);
      formData.append("parentDetails[guardianMobile]", details.guardianMobile);
      formData.append("parentDetails[parentEmail]", details.parentEmail);


      // ADDRESS DETAILS
      formData.append("address[houseName]", details.houseName);
      formData.append("address[street]", details.street);
      formData.append("address[landmark]", details.landmark);
      formData.append("address[district]", details.district);
      formData.append("address[state]", details.state);
      formData.append("address[pincode]", details.pincode);
      formData.append("address[addressmobile]", details.addressmobile);


      // QUALIFICATION DETAILS
      formData.append("qualificationDetails[institutionAndState]", details.institutionAndState);
      formData.append("qualificationDetails[yearOfPassing]", details.yearOfPassing);
      formData.append("qualificationDetails[registerNumber]", details.registerNumber);

      formData.append("qualificationDetails[marks][chemistry]", details.chemistry);
      formData.append("qualificationDetails[marks][physics]", details.physics);
      formData.append("qualificationDetails[marks][english]", details.english);
      formData.append("qualificationDetails[marks][biologyOrEquivalent]", details.biologyOrEquivalent);
      formData.append("qualificationDetails[marks][total]", details.total);


      // FILES (VERY IMPORTANT)
      formData.append("documents[sslcProof]", details.sslcProof);
      formData.append("documents[plusTwoCertificate]", details.plusTwoCertificate);
      formData.append("documents[signatures]", details.signatures);


      // --- SEND TO BACKEND ---
      try {
        const res = await addAdmissionApi(formData);

        alert("Admission submitted successfully!");
        console.log(res.data);
      } catch (err) {
        console.error(err);
        alert("Something went wrong");
      }


      // If everything is correct
      console.log("FORM VALIDATED SUCCESSFULLY 🎉");
      console.log(details);
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
                    <input type="text" name="name" required onChange={(e) => setDetails({ ...details, name: e.target.value })} />
                  </label>

                  <label>
                    Mobile
                    <input type="text" name="mobile" required onChange={(e) => setDetails({ ...details, mobile: e.target.value })} />
                  </label>
                </div>

                <div className="row-inputs">
                  <label>
                    Email
                    <input type="email" name="email" required onChange={(e) => setDetails({ ...details, email: e.target.value })} />
                  </label>

                  <label>
                    Date of Birth
                    <input type="date" name="dob" required onChange={(e) => setDetails({ ...details, dob: e.target.value })} />
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
                          setDetails({ ...details, gender: e.target.value })
                        }
                        checked={details.gender === "Male"}
                      />
                      Male
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={(e) =>
                          setDetails({ ...details, gender: e.target.value })
                        }
                        checked={details.gender === "Female"}
                      />
                      Female
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange={(e) =>
                          setDetails({ ...details, gender: e.target.value })
                        }
                        checked={details.gender === "Other"}
                      />
                      Other
                    </label>
                  </div>
                </div>


                <div className="row-inputs">
                  <label>
                    Aadhar Number
                    <input type="text" name="aadharNumber" required onChange={(e) => setDetails({ ...details, aadharNumber: e.target.value })} />
                  </label>
                  <label>
                    Religion
                    <input type="text" name="religion" required onChange={(e) => setDetails({ ...details, religion: e.target.value })} />
                  </label>
                </div>

                <div className="row-inputs">
                  <label>
                    Blood Group
                    <select name="bloodGroup" required onChange={(e) => setDetails({ ...details, bloodGroup: e.target.value })}>
                      <option value=""></option>
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="O+">O+</option>
                      <option value="AB+">AB+</option>
                    </select>
                  </label>

                  <label>
                    Nationality
                    <select name="nationality" required onChange={(e) => setDetails({ ...details, nationality: e.target.value })}>
                      <option value="Indian">Indian</option>
                      <option value="NRI">NRI</option>
                    </select>
                  </label>
                </div>

                <div className="row-inputs">
                  <label>
                    Caste and category
                    <input type="text" name="casteCategory" required onChange={(e) => setDetails({ ...details, casteCategory: e.target.value })} />
                  </label>
                </div>

                {/* Passport Photo */}
                <div className="row-inputs">
                  <label className="full-width">
                    Upload Passport Size Photo
                    <input type="file" name="studentphoto" required onChange={(e) => setDetails({ ...details, studentphoto: e.target.files[0] })} />
                  </label>
                </div>


                {/* ------------------- PARENT DETAILS ------------------- */}

                <h3>Parent / Guardian Details</h3>

                <div className="row-inputs">
                  <label>
                    Parent Full Name
                    <input type="text" name="parentName" required onChange={(e) => setDetails({ ...details, parentName: e.target.value })} />
                  </label>

                  <label>
                    Relationship
                    <input type="text" name="relationship" required onChange={(e) => setDetails({ ...details, relationship: e.target.value })} />
                  </label>
                </div>

                <div className="row-inputs">
                  <label>
                    Guardian Mobile
                    <input type="text" name="guardianMobile" required onChange={(e) => setDetails({ ...details, guardianMobile: e.target.value })} />
                  </label>

                  <label>
                    Parent Email
                    <input type="email" name="parentEmail" required onChange={(e) => setDetails({ ...details, parentEmail: e.target.value })} />
                  </label>
                </div>


                {/* ------------------- ADDRESS ------------------- */}

                <h3>Present Address</h3>

                <div className="row-inputs">
                  <label>
                    House / Flat No
                    <input type="text" name="houseName" required onChange={(e) => setDetails({ ...details, houseName: e.target.value })} />
                  </label>

                  <label>
                    Street / Lane
                    <input type="text" name="street" required onChange={(e) => setDetails({ ...details, street: e.target.value })} />
                  </label>
                </div>

                <div className="row-inputs">
                  <label className="full-width">
                    Landmark (Optional)
                    <input type="text" name="landmark" onChange={(e) => setDetails({ ...details, landmark: e.target.value })} />
                  </label>
                </div>

                <div className="row-inputs">
                  <label>
                    District
                    <input type="text" name="district" required onChange={(e) => setDetails({ ...details, district: e.target.value })} />
                  </label>

                  <label>
                    State
                    <input type="text" name="state" required onChange={(e) => setDetails({ ...details, state: e.target.value })} />
                  </label>
                </div>

                <div className="row-inputs">
                  <label>
                    Pincode
                    <input type="text" name="pincode" required onChange={(e) => setDetails({ ...details, pincode: e.target.value })} />
                  </label>

                  <label>
                    Mobile
                    <input type="text" name="addressmobile" required onChange={(e) => setDetails({ ...details, addressmobile: e.target.value })} />
                  </label>
                </div>


                {/* ------------------- EDUCATIONAL DETAILS ------------------- */}

                <h3>Educational Details</h3>

                <div className="row-inputs">
                  <label>
                    Institution & State
                    <input type="text" name="institutionAndState" required onChange={(e) => setDetails({ ...details, institutionAndState: e.target.value })} />
                  </label>
                </div>

                <div className="row-inputs">
                  <label>
                    Year of Passing
                    <input type="number" name="yearOfPassing" required onChange={(e) => setDetails({ ...details, yearOfPassing: e.target.value })} />
                  </label>

                  <label>
                    Register Number
                    <input type="text" name="registerNumber" required onChange={(e) => setDetails({ ...details, registerNumber: e.target.value })} />
                  </label>
                </div>

                <h4>Marks Obtained</h4>

                <div className="marks-section">
                  <div className="marks-row">
                    <label>Chemistry</label>
                    <input type="number" name="chemistry" required onChange={(e) => setDetails({ ...details, chemistry: e.target.value })} />
                  </div>

                  <div className="marks-row">
                    <label>Physics</label>
                    <input type="number" name="physics" required onChange={(e) => setDetails({ ...details, physics: e.target.value })} />
                  </div>

                  <div className="marks-row">
                    <label>English</label>
                    <input type="number" name="english" required onChange={(e) => setDetails({ ...details, english: e.target.value })} />
                  </div>

                  <div className="marks-row">
                    <label>Biology</label>
                    <input type="number" name="biologyOrEquivalent" required onChange={(e) => setDetails({ ...details, biologyOrEquivalent: e.target.value })} />
                  </div>

                  <div className="marks-row">
                    <label>Total Marks</label>
                    <input type="number" name="total" required onChange={(e) => setDetails({ ...details, total: e.target.value })} />
                  </div>
                </div>


                {/* ------------------- DOCUMENTS ------------------- */}

                <h3>Required Documents (PDF Only)</h3>

                <div className="row-inputs">
                  <label className="full-width">
                    SSLC / Age Proof (PDF)
                    <input type="file" accept=".pdf" name="sslcProof" required onChange={(e) => setDetails({ ...details, sslcProof: e.target.files[0] })} />
                  </label>
                </div>

                <div className="row-inputs">
                  <label className="full-width">
                    Plus Two Certificate (PDF)
                    <input type="file" accept=".pdf" name="plusTwoCertificate" required onChange={(e) => setDetails({ ...details, plusTwoCertificate: e.target.files[0] })} />
                  </label>
                </div>

                <div className="row-inputs">
                  <label className="full-width">
                    Signature (PDF)
                    <input type="file" accept=".pdf" name="signatures" required onChange={(e) => setDetails({ ...details, signatures: e.target.files[0] })} />
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
