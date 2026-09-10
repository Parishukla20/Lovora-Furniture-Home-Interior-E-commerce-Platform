import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChangePassword.css";

const ChangePassword = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
        alert("New Password and Confirm Password do not match");
        return;
    }
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/users/change-password`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify({
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword,
                }),
            }
        );
        const data = await response.json();
        if (response.ok) {
            alert("Password changed successfully");
            navigate("/account");
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }
};

    return (
        <div className="change-password-page">

            <div className="change-password-card">

                <h1>Change Password</h1>

                <form onSubmit={handleSubmit}>

                    <label>Current Password</label>
                    <input
                        type="password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                    />

                    <label>New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                    />

                    <label>Confirm New Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <div className="button-group">

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Update Password
                        </button>

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate("/account")}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default ChangePassword;
