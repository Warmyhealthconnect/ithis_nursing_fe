import React from "react";
import "./AdmissionSummary.css";

const AdmissionSummary = () => {
  const details = {
    name: "Abin Joshua",
    mobile: "9876543210",
    email: "abin.joshua@gmail.com",
    dob: "12/09/2002",
    gender: "Male",
    course: "BSC Nursing",
    address: "346tedghehdkhjkfjvkhkfdfhkbhdljbvdjhspbjagdhdthtu2eyuhc",
    qualification: "+2",
    aadhar: "55432628939",
    religion: "gsdgfdfa",
    caste: "rwet yw",
    bloodGroup: "A+",
    nationality: "India",
    parentName: "Joshua",
    relationship: "Father",
    parentMobile: "987654312",
    parentEmail: "joshua@gmail.com",
    district: "Kozhikode",
    state: "Kerala",
    passingYear: "2023",
    registerNo: "678943"
  };

  const rows = [
    [
      { label: "Name", value: details.name },
      { label: "Mobile No", value: details.mobile }
    ],
    [
      { label: "Email", value: details.email },
      { label: "DOB", value: details.dob }
    ],
    [
      { label: "Gender", value: details.gender },
      { label: "Course", value: details.course }
    ],
    [
      { label: "Address", value: details.address },
      { label: "Aadhar No", value: details.aadhar }
    ],
    [
      { label: "Qualification", value: details.qualification },
      { label: "Religion", value: details.religion }
    ],
    [
      { label: "Caste", value: details.caste },
      { label: "Blood Group", value: details.bloodGroup }
    ],
    [
      { label: "Nationality", value: details.nationality },
      { label: "Parent Name", value: details.parentName }
    ],
    [
      { label: "Relationship", value: details.relationship },
      { label: "Mobile No", value: details.parentMobile }
    ],
    [
      { label: "Email", value: details.parentEmail },
      { label: "District", value: details.district }
    ],
    [
      { label: "State", value: details.state },
      { label: "Year of Passing", value: details.passingYear }
    ],
    [
      { label: "Register No", value: details.registerNo }
    ]
  ];

  return (
    <div className="admission-summary">
      <section className="summary-hero" />

      <section className="summary-card">
        <div className="card-header">
          <div className="header-brand" />
        </div>

        <div className="summary-grid">
          {rows.map((row, idx) => (
            <div className="summary-row" key={idx}>
              {row.map((item, itemIdx) => (
                <div className="summary-item" key={`${idx}-${itemIdx}`}>
                  <span className="item-label">{item.label} :</span>
                  <span className="item-value">{item.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="summary-actions">
          <button className="outline-btn">Edit</button>
          <button className="primary-btn">Confirm</button>
        </div>
      </section>
    </div>
  );
};

export default AdmissionSummary;
