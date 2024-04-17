import styles from "./css-files/LoginPage.module.css"
import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import LoginValidation from "../components/Login/LoginValidation.jsx";
import http from "../http-common.js";
import PropTypes from "prop-types";

function LoginPage ({setToken}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [inputErrors, setInputErrors] = useState({});

    const navigate = useNavigate();

    // Uncomment for local development:
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //
    //     navigate("/homepage");
    // }

    // Uncomment for Build:
    const handleSubmit = (event) => {
        event.preventDefault();

        const err = LoginValidation(username, password);
        setInputErrors( err );

        console.log(err);

        if(err.username === '' && err.password === '') {
            const values = {
                username: username,
                password: password
            };

            // Call API w/ Axios:
            http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/', values)
                .then(res => {

                    console.log(res);
                    if(res.data.message === 'Authentication Successful') {
                        // Set UserID Token:
                        setToken(res.data.userID);

                        // Navigate to Home Page:
                        navigate("/homePage");
                    } else if (res.data.error === 'Password Incorrect') {
                        alert("Password incorrect, please try again");
                    }
                    else {
                        alert("No record existed");
                    }

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
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
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
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // required
                    />
                    {inputErrors.password && <span className={styles.formErrors}>{inputErrors.password}</span>}
                </div>

                <button type="submit" className={styles.button}>Log In</button>

                <div className='registerLink'>
                    <p></p>
                    <p>First time in here?
                        <Link to="/signUp">Sign Up!</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
}


export default LoginPage;