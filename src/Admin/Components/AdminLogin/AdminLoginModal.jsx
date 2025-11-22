import { useEffect, useState } from "react";
import "./AdminLoginModal.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginApi } from "../../../../services/allApis";

export default function AdminLoginModal({ show, onClose }) {
    if (!show) return null; // Don't render unless open

    const [user, setUser] = useState({ email: "", password: "" })
    const nav = useNavigate()

    const loginUser = async () => {
        const { email, password } = user;

        if (!email || !password) {
            toast.warning("Enter all fields");
            return;
        }

        try {
            const response = await loginApi(user);

            if (response.status === 200) {
                // ✅ Show success message
                toast.success(response.data.message);

                // ✅ Save token to sessionStorage
                sessionStorage.setItem("token", response.data.token);

                // ✅ Redirect
                nav("/admin");
            } else {
                toast.error(response.data.message);
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-container position-relative"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                {/* Close Button */}
                <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-3"
                    aria-label="Close"
                    onClick={onClose}
                ></button>

                <h3 className="text-center mb-3">Admin Login</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="Enter email"
                            onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="button" className="btn login_button" onClick={loginUser}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
