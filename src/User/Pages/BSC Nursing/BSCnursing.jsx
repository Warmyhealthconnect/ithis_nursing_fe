import React from 'react';
// Assuming Titlebar is located here
import Titlebar from '../../Components/Titlebar/Titlebar';
import './BSCnursing.css'; // Import the dedicated CSS file

function BSCnursing() {
    return (
        <>
            {/* Assuming Titlebar accepts a 'title' prop */}
            <Titlebar title={'Course'} />

            <div className="bsc-nursing-page">
                {/* Header Section */}
                <header className="page-header">
                    <div className='page-header-contents'>
                        <p className="mb-3 page-category">BSc Nursing</p>
                        <h1>Empowering Future Nurses with Knowledge and Compassion</h1>
                    </div>
                </header>

                {/* Content Section */}
                <section className="nursing-content">
                    <div className="image-container">
                        {/* Replace with your actual image source */}
                        <img src="/nursing/nursing.png" alt="Nurses caring for a patient" className="nursing-image" />
                    </div>
                    <div className="text-container">
                        <p>
                            The B.Sc Nursing program is a four-year course that prepares skilled, compassionate, and ethical nursing professionals through theory, simulation, and clinical training.
                        </p>
                        <p>
                            Our journey at this is based on compassion, trust, and a dedication to healthcare excellence. We develop our students into competent and compassionate nurses from the very first day by providing them with knowledge, practical experience, and sincere guidance. Every healing session, course, and patient encounter becomes a part of our common journey, which is devoted to changing lives, inspiring hope, and having a significant impact. This is more than just an establishment; it's a dependable place of support, education, and inspiration where every life matters and passion meets purpose.
                        </p>
                    </div>
                </section>

                <hr className="divider" />

                {/* Course Details Table Section */}
                <section className="course-details-section">
                    <h2>Course Details</h2>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Duration</th>
                                    <th>University</th>
                                    <th>No. of seat</th>
                                    <th>Qualification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>4 Years</td>
                                    <td>
                                        Kerala University of Health
                                        <br />
                                        Sciences, Thrissur
                                    </td>
                                    <td>Total Seats: 30</td>
                                    <td>Plus Two Science with minimum 50% marks</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Seats Section */}
                <section className="seats-section">
                    <div className="seat-category">
                        <h3>Government / General Merit Seats</h3>
                        <p>
                            General Merit seats are those set apart for the students allotted by LBS (Government), following the guidelines of INC, KNMC, and Kerala University of Health Sciences.
                        </p>
                    </div>
                    <div className="seat-category">
                        <h3>Management Seats</h3>
                        <p>
                            Management seats are those set apart for eligible candidates selected from online applications received against the notification on the management website, based on merit in qualifying examination and interview, following the guidelines of INC, KNMC, and Kerala University of Health Sciences.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default BSCnursing;