import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import "./LoginPopup.css";

const LoginPopup = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
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

    function handleChange(event) {
        setLoginData({
            ...loginData,
            [event.target.id]: event.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch("https://lovora-furniture-home-interior-backend.onrender.com/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            alert(data.message);

            if (response.ok) {
                // Save JWT Token
                login(data.token);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    }
    return (
        <div className="popup">

            <div className="login-box">

                <h1>Login</h1>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">Enter Email:</label>
                    <input type="email" id="email" onInput={validateEmail} value={loginData.email} onChange={handleChange} required />

                    <label htmlFor="password">Enter Password:</label>
                    <input type="password" id="password" onInput={validatePass} value={loginData.password} onChange={handleChange} required />

                    <button type="submit">Login</button>

                    <p>
                        <span>Forgot Password?</span>
                    </p>

                </form>

            </div>

        </div>
    );
};

export default LoginPopup;