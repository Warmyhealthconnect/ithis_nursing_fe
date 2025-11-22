import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createPaymentApi } from "../../../services/payuApi";

function PayUCheckout() {
    const location = useLocation();
    const { applicationNumber, studentName, email, phone } = location.state || {};

    const [form, setForm] = useState({
        amount: "1200",
        productinfo: "Application Fee",
        firstname: "",
        email: "",
        phone: "",
        studentName: "",
        applicationNumber: "",
    });

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            firstname: studentName || "",
            email: email || "",
            phone: phone || "",
            studentName: studentName || "",
            applicationNumber: applicationNumber || "",
        }));
    }, [studentName, applicationNumber, email, phone]);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePayment = async () => {
        if (!form.firstname || !form.email || !form.phone) {
            alert("All fields are required");
            return;
        }

        try {
            const res = await createPaymentApi(form);
            const newWindow = window.open();
            newWindow.document.write(res.data);
            newWindow.document.close();
        } catch (err) {
            console.error("Payment Error:", err);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto" }}>
            <h2>PayU Payment</h2>

            <p><b>Student:</b> {studentName}</p>
            <p><b>Application No:</b> {applicationNumber}</p>

            <input type="text" name="firstname" value={form.firstname} onChange={handleChange} placeholder="Name" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
            <input type="text" name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" />



            <button
                onClick={handlePayment}
                disabled={!form.firstname || !form.email || !form.phone}
                style={{ marginTop: "10px" }}
            >
                Pay Now
            </button>
        </div>
    );
}

export default PayUCheckout;
