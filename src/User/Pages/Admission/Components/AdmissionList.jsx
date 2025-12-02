import React, { useState } from "react";
import "./AdmissionList.css";
import StudentList from "../../Lists/StudentList";
import { studentsList } from "../../../../data/studentDetails";


const AdmissionList = ({ isMerit }) => {
    const [activeTab, setActiveTab] = useState("joined");

    const data = isMerit
        ? (studentsList.managementMeritQuota[activeTab] || [])
        : (studentsList.spotAdmission[activeTab] || []);


    const studentListProps = {
        type: activeTab,
        isMerit: isMerit,
        data: data
    }

    return (
        <React.Fragment>
            <div className="info_wrapper">
                <div className="info_card">
                    <h2 className="info_title">
                        {isMerit ? 'Management Merit Notice' : 'Spot Admission Notice'}
                    </h2>
                    {isMerit ? (
                        <p className="info_text">
                            Those who are willing to apply need complete the application procedure through this website
                            on or before <strong>26/11/2025, 4pm</strong>.
                            The application details are given in the prospectus. <br />
                            No late application will be entertained.
                        </p>
                    ) : (
                        <p className="info_text">
                            It is decided to conduct spot allotment for the programme
                            <strong> BSc Nursing</strong> at
                            <strong> IET College of Nursing, Campus Malappuram</strong> on
                            <strong> 28th Friday 2025</strong>, <strong>9 30 am</strong> till <strong>2 PM</strong>.
                        </p>
                    )}

                </div>
            </div>

            <div className="tabs_wrapper">
                <button
                    className={`tab_btn ${activeTab === "joined" ? "active" : ""}`}
                    onClick={() => setActiveTab("joined")}
                >
                    Joined Candidates
                </button>

                <button
                    className={`tab_btn ${activeTab === "notJoined" ? "active" : ""}`}
                    onClick={() => setActiveTab("notJoined")}
                >
                    Non-Joined Candidates
                </button>
            </div>

            <div className="table_section">
                {activeTab === 'joined' && <StudentList {...studentListProps} />}
                {activeTab === 'notJoined' && <StudentList {...studentListProps} />}
            </div>
        </React.Fragment>
    )
};


export default AdmissionList;