import { useState, useEffect } from 'react';
import './AdminDash.css';
import { getStudentsApi } from '../../../../services/allApis';
import { Link } from 'react-router-dom';

function AdminDash() {
  // Placeholder student data


  useEffect(() => {
    getData();
  }, []);

  const [studentlist, setStudentlist] = useState([])

  const getData = async () => {
    try {
      const res = await getStudentsApi(); // no need to pass studentlist
      console.log(res.data); // check what this prints

      // if your API returns an object with array: res.data.students or just res.data
      const studentsArray = Array.isArray(res.data) ? res.data : res.data.students;
      setStudentlist(studentsArray);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };


  return (
    <div className="admin-dashboard">
      <h1>Student Details</h1>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Application number</th>
            <th>Phone</th>
            <th>Payment status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentlist.map((student) => (
            <tr key={student._id}>
              <td>{student.basicDetails.name}</td>
              <td>{student.basicDetails.applicationNumber}</td>
              <td>{student.basicDetails.mobile}</td>
              <td>{student.payment.status}</td>
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
