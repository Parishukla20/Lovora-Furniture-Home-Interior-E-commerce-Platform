import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import "./Account.css";

const Account = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="account-page">

            <div className="account-header">
                <div>
                    <h1>My Account</h1>
                </div>

                <div className="profile-circle">
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>

            <div className="profile-card">

                <h2>
                    Welcome, NAME 👋
                </h2>

                <div className="profile-info">

                    <div className="info-box">
                        <i className="fa-solid fa-envelope"></i>
                        <div>
                            <span>Email</span>
                            <h4>email@gmail.com</h4>
                        </div>
                    </div>

                    <div className="info-box">
                        <i className="fa-solid fa-phone"></i>
                        <div>
                            <span>Mobile</span>
                            <h4>xxxxxxxxxx</h4>
                        </div>
                    </div>

                    <div className="info-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <span>Address</span>
                            <h4>Current Address</h4>
                        </div>
                    </div>

                </div>
            </div>

            <br />

            <div className="action-grid">

                <div className="action-card">
                    <i className="fa-solid fa-box"></i>
                    <h3>My Orders</h3>
                    <p>Track your purchases</p>
                </div>

                <div className="action-card" onClick={() =>navigate("/wishlist")}>
                    <i className="fa-solid fa-heart"></i>
                    <h3>Wishlist</h3>
                    <p>Your saved products</p>
                </div>

                <div className="action-card" onClick={() =>navigate("/cart")}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <h3>My Cart</h3>
                    <p>View cart items</p>
                </div>

                <div className="action-card">
                    <i className="fa-solid fa-user-pen"></i>
                    <h3>Edit Profile</h3>
                    <p>Update your details</p>
                </div>

                <div className="action-card">
                    <i className="fa-solid fa-lock"></i>
                    <h3>Change Password</h3>
                    <p>Keep your account secure</p>
                </div>

                <div
                    className="action-card logout-card"
                    onClick={handleLogout}
                >
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <h3>Logout</h3>
                    <p>Sign out safely</p>
                </div>

            </div>
        </div>
    );
};

export default Account;