import React, { useState } from "react";
import "./Signup.css";
import LoginPopup from "../components/LoginPopup";
import img1 from '../assets/IMAGES/f976673a689a5f7b9a657e2a8486dc70.png';

const Signup = () => {
    const [showLogin, setShowLogin] = useState(false);

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
    return (
        <div className="signup">
            <div className="sign-img">
                <img src={img1} alt="" />
            </div>

            <div className="form">
                <form>
                    <h1>Welcome! Create Your Account</h1>

                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" onInput={validateName} required></input>

                    <label htmlFor="email">Enter Mail:</label>
                    <input type="email" id="email" onInput={validateEmail} required />

                    <label htmlFor="phone">Enter Mobile No.:</label>
                    <input type="tel" id="phone" maxLength="10" onInput={validatePhone} required />

                    <label htmlFor="address">Enter Address:</label>
                    <textarea id="address" rows="4"></textarea>

                    <label htmlFor="createPass">Create Password:</label>
                    <input type="password" id="createPass" onInput={validatePass} />

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