import React, { useState } from "react";
import "./Signup.css";
import LoginPopup from "../components/LoginPopup";
import img1 from '../assets/IMAGES/f976673a689a5f7b9a657e2a8486dc70.png';

const Signup = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        createPass: "",
        confirmPass: "",
    });

    function validateName(event) {
        event.target.value = event.target.value.replace(/[^a-zA-Z\s]/g, "");

        let words = event.target.value.trim().split(/\s+/);

        if (words.length < 2) {
            event.target.setCustomValidity("Please enter your full name.");
        } else {
            event.target.setCustomValidity("");
        }
    }
    function validateEmail(event) {
        let email = event.target.value;

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            event.target.setCustomValidity("Please enter a valid email.");
        } else {
            event.target.setCustomValidity("");
        }
    }
    function validatePhone(event) {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");

        if (event.target.value.length !== 10) {
            event.target.setCustomValidity("Phone number must be exactly 10 digits.");
        } else {
            event.target.setCustomValidity("");
        }
    }
    function validatePass(event) {
        let password = event.target.value;

        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!passwordPattern.test(password)) {
            event.target.setCustomValidity(
                "Password must be at least 8 characters and include one uppercase letter, one lowercase letter, and one number."
            );
        } else {
            event.target.setCustomValidity("");
        }
    }

    function validateConfirmPass(event) {
        let password = document.getElementById("createPass").value;
        let confirmPassword = event.target.value;

        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!passwordPattern.test(confirmPassword)) {
            event.target.setCustomValidity(
                "Password must be at least 8 characters and include one uppercase letter, one lowercase letter, and one number."
            );
        } else if (password !== confirmPassword) {
            event.target.setCustomValidity("Passwords do not match.");
        } else {
            event.target.setCustomValidity("");
        }
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName: formData.name,
                    email: formData.email,
                    mobile: formData.phone,
                    address: formData.address,
                    password: formData.createPass,
                }),
            });

            const data = await response.json();

            alert(data.message);

            if (response.ok) {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    createPass: "",
                    confirmPass: "",
                });
            }
        } catch (error) {
            alert("Something went wrong.");
            console.log(error);
        }
    }
    return (
        <div className="signup">
            <div className="sign-img">
                <img src={img1} alt="" />
            </div>

            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome! Create Your Account</h1>

                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" onInput={validateName} value={formData.name} onChange={handleChange} required></input>

                    <label htmlFor="email">Enter Mail:</label>
                    <input type="email" id="email" onInput={validateEmail} value={formData.email} onChange={handleChange} required />

                    <label htmlFor="phone">Enter Mobile No.:</label>
                    <input type="tel" id="phone" maxLength="10" onInput={validatePhone} value={formData.phone} onChange={handleChange} required />

                    <label htmlFor="address">Enter Address:</label>
                    <textarea id="address" rows="4" value={formData.address} onChange={handleChange}></textarea>

                    <label htmlFor="createPass">Create Password:</label>
                    <input type="password" id="createPass" onInput={validatePass} value={formData.createPass} onChange={handleChange} />

                    <label htmlFor="confirmPass">Confirm Password:</label>
                    <input type="password" id="confirmPass" onInput={validateConfirmPass} />

                    <button type="submit">Create Account</button>

                    <p>
                        Already have an account?
                        <span onClick={() => setShowLogin(true)}>
                            Login Now
                        </span>
                    </p>
                </form>
            </div>
            {showLogin && <LoginPopup />}
        </div>
    );
};
export default Signup;





