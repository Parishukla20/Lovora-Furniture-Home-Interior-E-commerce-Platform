import React from "react";
import "./Signup.css";
import img1 from '../assets/IMAGES/f976673a689a5f7b9a657e2a8486dc70.png'
const Signup = () => {
    return (
        <div className="signup">
            <div className="sign-img">
                <img src={img1} alt="" />
            </div>

            <div className="form">
                <form>
                    <h1>Welcome! Create Your Account</h1>

                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" />

                    <label htmlFor="email">Enter Mail:</label>
                    <input type="email" id="email" />

                    <label htmlFor="phone">Enter Mobile No.:</label>
                    <input type="tel" id="phone" />

                    <label htmlFor="address">Enter Address:</label>
                    <textarea id="address" rows="4"></textarea>

                    <label htmlFor="createPass">Create Password:</label>
                    <input type="password" id="createPass" />

                    <label htmlFor="confirmPass">Confirm Password:</label>
                    <input type="password" id="confirmPass" />

                    <button type="submit">Create Account</button>

                    <p>
                        Already have an account? <span>Login Now</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;