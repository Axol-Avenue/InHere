import styles from "./css-files/SignUpPage.module.css"
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";

async function authenticate(username, password) {
    if (username !== '' && password !== '')
    {
        // TODO: add actual authentication
        if (username === 'admin' && password === 'admin')
        {
            return true; // authentication successful
        }
        else
        {
            throw new Error('Invalid Credentials');
        }
    }
    else
    {
        throw new Error('Username and Password are required');
    }
}

function SignUpPage () {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        navigate("/");
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
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className={styles.button}>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpPage;