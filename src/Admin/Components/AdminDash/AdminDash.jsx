import { useState, useEffect } from 'react';
import './AdminDash.css';
import { getStudentsApi } from '../../../../services/allApis';
import { Link } from 'react-router-dom';
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function AdminDash() {
  const [studentlist, setStudentlist] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await getStudentsApi();
      const studentsArray = Array.isArray(res.data) ? res.data : res.data.students;
      setStudentlist(studentsArray);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const downloadExcel = () => {
    if (!studentlist || studentlist.length === 0) return;

    const formattedData = studentlist.map(student => ({
      Name: student.basicDetails.name,
      ApplicationNumber: student.basicDetails.applicationNumber,
      DOB: new Date(student.basicDetails.dob).toLocaleDateString(),
      Gender: student.basicDetails.gender,
      BloodGroup: student.basicDetails.bloodGroup,
      Mobile: student.basicDetails.mobile,
      Email: student.basicDetails.email,
      Nationality: student.basicDetails.nationality,
      Religion: student.basicDetails.religion,
      CasteCategory: student.basicDetails.casteCategory,
      Aadhar: student.basicDetails.aadharNumber,

      ParentName: student.parentDetails?.parentName,
      ParentRelationship: student.parentDetails?.relationship,
      ParentMobile: student.parentDetails?.guardianMobile,
      ParentEmail: student.parentDetails?.parentEmail,

      AddressHouse: student.address?.houseName,
      Street: student.address?.street,
      Landmark: student.address?.landmark,
      District: student.address?.district,
      State: student.address?.state,
      Pincode: student.address?.pincode,
      AddressMobile: student.address?.addressmobile,

      Institution: student.qualificationDetails?.institutionAndState,
      YearOfPassing: student.qualificationDetails?.yearOfPassing,
      RegisterNumber: student.qualificationDetails?.registerNumber,
      MarksPhysics: student.qualificationDetails?.marks?.physics,
      MarksChemistry: student.qualificationDetails?.marks?.chemistry,
      MarksBiology: student.qualificationDetails?.marks?.biologyOrEquivalent,
      MarksEnglish: student.qualificationDetails?.marks?.english,
      MarksTotal: student.qualificationDetails?.marks?.total,

      ProspectusAgreed: student.declaration?.prospectusAgreement ? "Yes" : "No",
      TruthDeclaration: student.declaration?.truthDeclaration ? "Yes" : "No",

      PaymentStatus: student.payment?.status || "N/A",
      CreatedAt: new Date(student.createdAt).toLocaleString(),
      UpdatedAt: new Date(student.updatedAt).toLocaleString()
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `students_${new Date().toLocaleDateString()}.xlsx`);
  };
  return (
    <div className="admin-dashboard">
      <h1>Student Details</h1>
      <button className="download-btn" onClick={downloadExcel}>
        Download All Students Excel
      </button>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Application number</th>
            <th>Phone</th>
            {/* <th>Payment status</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentlist.map((student) => (
            <tr key={student._id}>
              <td>{student.basicDetails.name}</td>
              <td>{student.basicDetails.applicationNumber}</td>
              <td>{student.basicDetails.mobile}</td>
              {/* <td>{student.payment.status}</td> */}
              <td>
                <Link to={`/admin/studentdetails/${student._id}`} className="details-btn">More Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDash;
