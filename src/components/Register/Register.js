import React, { useState } from "react";
import { registerUser } from "../../api/auth";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        checkbox: false,
    });
    // const [isFormChecked, setIsFormChecked] = useState(false);

    const handleChange = (event) => {
        if (event.target.type === "checkbox") {
            setFormData({ ...formData, checkbox: event.target.checked });
        }
        else{
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.name || !formData.email || !formData.mobile || !formData.password) {
            alert("Fields can't be empty");
            return;
        }

        if (!formData.checkbox) {
            alert("Please accept T&C");
            return;
        }

        console.log(formData)

        await registerUser(formData);
        navigate('/login')
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Create an account</h1>
            <h2 className={styles.h2}>Your personal job finder is here</h2>
            <input
                className={styles.input}
                name="name"
                onChange={handleChange}
                type={"text"}
                placeholder="Name"
            ></input>
            <input
                className={styles.input}
                name="email"
                onChange={handleChange}
                type={"email"}
                placeholder="Email"
            ></input>
            <input
                className={styles.input}
                name="mobile"
                onChange={handleChange}
                type={"tel"}
                placeholder="Mobile"
            ></input>
            <input
                className={styles.input}
                name="password"
                onChange={handleChange}
                type={"password"}
                placeholder="Password"
            ></input>

            
            <div style={{ display: "flex" , alignItems : "center"}}>
                <input
                    style={{height : "24px",width: "24px", marginRight : "10px" , border : "2px solid #C2C2C2"}}
                    type="checkbox"
                    checked={formData.checkbox}
                    // onChange={(event) => setIsFormChecked(event.target.checked)}
                    onChange={handleChange}
                    name="checkbox"
                    id="checkbox"
                ></input>
                <label
                    className={styles.grey}
                    style={{ fontSize: "14px" }}
                    htmlFor="checkbox"
                >
                    By creating an account, I agree to our terms of use and
                    privacy policy
                </label>
            </div>
            <button onClick={handleSubmit} className={styles.button}>
                Create Account
            </button>
            <p className={styles.footer}>
                <span className={styles.grey}>Already have an account?</span>
                <span
                    className={styles.underline}
                    onClick={() => navigate("/login")}
                    style={{ cursor: "pointer" }}
                >
                    Sign in
                </span>
            </p>
        </div>
    );
}
