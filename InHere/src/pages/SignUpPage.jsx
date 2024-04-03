import styles from "./css-files/SignUpPage.module.css"
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import SignUpValidation from "../components/SignUp/SignUpValidation.jsx";
import http from "../http-common.js";

function SignUpPage () {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [inputErrors, setInputErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const err = SignUpValidation(email, username, password);
        setInputErrors( err );

        if(err.email === '' && err.username === '' && err.password === '')
        {
            const values = {
                email: email,
                username: username,
                password: password,
                salt: "temp"
            };

            // Call API w/ Axios:
            http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/signUp', values)
                .then(res => {

                    console.log(res);
                    navigate("/");

                })
                .catch(err =>
                {
                    console.log("axios error");
                    console.log(err)
                });

        }
    }

    return (
        <div className={styles.wrapper}>
            <h1>Sign Up</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={styles.input}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // required
                    />
                    {inputErrors.email && <span className={styles.formErrors}>{inputErrors.email}</span>}
                </div>
                <div className={styles.input}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        // required
                    />
                    {inputErrors.username && <span className={styles.formErrors}>{inputErrors.username}</span>}
                </div>
                <div className={styles.input}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // required
                    />
                    {inputErrors.password && <span className={styles.formErrors}>{inputErrors.password}</span>}
                </div>

                <button type="submit" className={styles.button}>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpPage;