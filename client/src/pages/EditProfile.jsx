import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";

const EditProfile = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        address: "",
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(
                    "https://lovora-furniture-home-interior-backend.onrender.com/api/users/profile",
                    {
                        method: "GET",
                        headers: {
                            Authorization: token,
                        },
                    }
                );

                const data = await response.json();

                if (response.ok) {
                    setFormData({
                        fullName: data.fullName,
                        mobile: data.mobile,
                        address: data.address,
                    });
                } else {
                    alert(data.message);
                }

            } catch (error) {
                console.log(error);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const token = localStorage.getItem("token");

        const response = await fetch(
            "http://:5000/api/users/profile",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(formData),
            }
        );

        const data = await response.json();

        if (response.ok) {
            alert("Profile Updated Successfully");
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
        <div className="edit-profile-page">

            <div className="edit-profile-card">

                <h1>Edit Profile</h1>

                <form onSubmit={handleSubmit}>

                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />

                    <label>Mobile Number</label>
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                    />

                    <label>Address</label>
                    <textarea
                        name="address"
                        rows="4"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>

                    <div className="button-group">
                        <button type="submit" className="save-btn">
                            Save Changes
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

export default EditProfile;