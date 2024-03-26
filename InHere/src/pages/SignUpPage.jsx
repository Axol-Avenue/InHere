import styles from "./css-files/SignUpPage.module.css"
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import SignUpValidation from "../components/SignUp/SignUpValidation.jsx";


function SignUpPage () {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [inputErrors, setInputErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        setInputErrors( SignUpValidation(email, username, password) );

        // TODO: fix having to double click button to return to login page
        if(inputErrors.email === '' && inputErrors.username === '' && inputErrors.password === '')
        {
            navigate("/");
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
                        type="text"
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