import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPopup.css";

const LoginPopup = () => {
    const navigate = useNavigate();
    function validateEmail(event) {
        let email = event.target.value;

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            event.target.setCustomValidity("Please enter a valid email.");
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
    return (
        <div className="popup">

            <div className="login-box">

                <h1>Login</h1>

                <form>

                    <label htmlFor="email">Enter Email:</label>
                    <input type="email" id="email" onInput={validateEmail} required/>

                    <label htmlFor="password">Enter Password:</label>
                    <input type="password" id="password" onInput={validatePass} required/>

                    <button type="submit" onClick={() => navigate("/")}>Login</button>

                    <p>
                        <span>Forgot Password?</span>
                    </p>

                </form>

            </div>

        </div>
    );
};

export default LoginPopup;