import React, { useEffect, useState } from 'react';
import './StudentDetails.css';
import { useParams } from 'react-router-dom';
import { getStudentByIdApi } from '../../../../services/allApis';
import { getPaymentsApi } from '../../../../services/allApis';

function StudentDetails() {
    const { id } = useParams(); // get the student ID from URL
    const [student, setStudent] = useState(null);
    const [paymentdata, setPaymentdata] = useState(null)

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await getStudentByIdApi(id);
                setStudent(res.data); // always set student first

                try {
                    const payresult = await getPaymentsApi(res.data.basicDetails.applicationNumber);
                    setPaymentdata(payresult.data);
                } catch (err) {
                    // if payment not found or error, just set paymentdata null
                    console.warn("No payment data:", err.response?.data?.message || err.message);
                    setPaymentdata(null);
                }
            } catch (err) {
                console.error("Failed to fetch student:", err);
            }
        };

        fetchStudent();
    }, [id]);


    if (!student) return <p>Loading student details...</p>;

    const {
        basicDetails,
        parentDetails,
        address,
        qualificationDetails,
        documents,
        declaration,
        payment,
        createdAt,
        updatedAt
    } = student;

    return (
        <div className="student-details-container">
            <h1>Student Details</h1>

            <section className="section basic-details">
                <h2>Basic Details</h2>
                <div className="flex-row">
                    <a href={basicDetails.studentphoto} target="_blank" rel="noreferrer">
                        <img src={basicDetails.studentphoto} alt="Student" className="student-photo" />
                    </a>                    <div className="details-list">
                        <p><strong>Name:</strong> {basicDetails?.name}</p>
                        <p><strong>Application No:</strong> {basicDetails?.applicationNumber}</p>
                        <p><strong>DOB:</strong> {new Date(basicDetails?.dob).toLocaleDateString()}</p>
                        <p><strong>Gender:</strong> {basicDetails?.gender}</p>
                        <p><strong>Blood Group:</strong> {basicDetails?.bloodGroup}</p>
                        <p><strong>Mobile:</strong> {basicDetails?.mobile}</p>
                        <p><strong>Email:</strong> {basicDetails?.email}</p>
                        <p><strong>Nationality:</strong> {basicDetails?.nationality}</p>
                        <p><strong>Religion:</strong> {basicDetails?.religion}</p>
                        <p><strong>Caste Category:</strong> {basicDetails?.casteCategory}</p>
                        <p><strong>Aadhar:</strong> {basicDetails?.aadharNumber}</p>
                    </div>
                </div>
            </section>

            <section className="section parent-details">
                <h2>Parent / Guardian Details</h2>
                <p><strong>Name:</strong> {parentDetails?.parentName}</p>
                <p><strong>Relationship:</strong> {parentDetails?.relationship}</p>
                <p><strong>Mobile:</strong> {parentDetails?.guardianMobile}</p>
                <p><strong>Email:</strong> {parentDetails?.parentEmail}</p>
            </section>

            <section className="section address">
                <h2>Address</h2>
                <p><strong>House Name:</strong> {address?.houseName}</p>
                <p><strong>Street:</strong> {address?.street}</p>
                <p><strong>Landmark:</strong> {address?.landmark}</p>
                <p><strong>District:</strong> {address?.district}</p>
                <p><strong>State:</strong> {address?.state}</p>
                <p><strong>Pincode:</strong> {address?.pincode}</p>
                <p><strong>Mobile:</strong> {address?.addressmobile}</p>
            </section>

            <section className="section qualification-details">
                <h2>Qualification Details</h2>
                <p><strong>Institution & State:</strong> {qualificationDetails?.institutionAndState}</p>
                <p><strong>Year of Passing:</strong> {qualificationDetails?.yearOfPassing}</p>
                <p><strong>Register No:</strong> {qualificationDetails?.registerNumber}</p>
                <div className="marks">
                    <h3>Marks</h3>
                    <p>Physics: {qualificationDetails.marks?.physics}</p>
                    <p>Chemistry: {qualificationDetails.marks?.chemistry}</p>
                    <p>Biology/Equivalent: {qualificationDetails.marks?.biologyOrEquivalent}</p>
                    <p>English: {qualificationDetails.marks?.english}</p>
                    <p>Total: {qualificationDetails.marks?.total}</p>
                </div>
            </section>

            <section className="section documents">
                <h2>Documents</h2>
                <p><a href={documents?.sslcProof} target="_blank" rel="noreferrer">SSLC Proof</a></p>
                <p><a href={documents?.plusTwoCertificate} target="_blank" rel="noreferrer">Plus Two Certificate</a></p>
                <p><a href={documents?.signatures} target="_blank" rel="noreferrer">Signatures</a></p>
            </section>

            <section className="section declaration">
                <h2>Declaration</h2>
                <p><strong>Prospectus Agreement:</strong> {declaration?.prospectusAgreement ? "Agreed" : "Not Agreed"}</p>
                <p><strong>Truth Declaration:</strong> {declaration?.truthDeclaration ? "Agreed" : "Not Agreed"}</p>

            </section>

            <section className="section payment">
                <h2>Payment Details </h2>

                {!paymentdata ? (
                    <p>No payment found for this student.</p>
                ) : (
                    <>
                        <p><strong>Status:</strong> {paymentdata?.status}</p>
                        <p><strong>Amount:</strong> ₹{paymentdata?.amount}</p>
                        <p><strong>Transaction ID:</strong> {paymentdata?.txnid}</p>
                        <p><strong>Payu Transaction ID:</strong> {paymentdata?.payuTxnId}</p>
                        <p><strong>Payment Date:</strong> {new Date(paymentdata?.createdAt).toLocaleString()}</p>
                        <p><strong>Application Number:</strong> {paymentdata?.applicationNumber}</p>
                    </>
                )}
            </section>


            <section className="section timestamps">
                <h2>Record Timestamps</h2>
                <p><strong>Created At:</strong> {new Date(createdAt).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(updatedAt).toLocaleString()}</p>
            </section>
        </div>
    );
}

export default StudentDetails;
