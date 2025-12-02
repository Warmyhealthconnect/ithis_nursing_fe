import React, { useEffect, useState } from "react";
import "./StudentList.css";


const StudentList = ({ type, isMerit, data }) => {

    const base =
        isMerit ? "Management Merit Quota" : "Spot Admission";

    const title =
        type === "joined"
            ? `${base} – Joining Candidates`
            : type === "notJoined"
                ? `${base} – Not Joined Candidates`
                : "Candidates";


    const [page, setPage] = useState(1);

    const pageSize = 15;

    const totalPages = Math.ceil(data.length / pageSize);
    const start = (page - 1) * pageSize;
    const currentPageData = data.slice(start, start + pageSize);
    return (
        <React.Fragment>
            <div className="studentlist_wrapper">
                <h2 className="studentlist_title">{title}</h2>

                <div className="table_container">
                    <table className="student_table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student Name</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentPageData.map((student, i) => (
                                <tr key={student.index}>
                                    <td>{start + i + 1}</td>
                                    <td>{student.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="pagination">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(p => p - 1)}
                    >
                        Prev
                    </button>

                    <span className="page_info">
                        Page {page} of {totalPages}
                    </span>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(p => p + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
};


export default StudentList;