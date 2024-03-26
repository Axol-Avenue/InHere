import styles from "./css-files/LoginPage.module.css"
import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import LoginValidation from "../components/Login/LoginValidation.jsx";
import LoginAuthentication from "../components/Login/LoginAuthentication.jsx";

function LoginPage (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [authError, setAuthError] = useState('');
    const [inputErrors, setInputErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        setInputErrors( LoginValidation(username, password) );

        try {
            await LoginAuthentication(username, password);
            navigate('/homePage');
        }
        catch (authErr) {
            setAuthError(authErr.message);
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
                {authError && <p className={styles.formErrors}>{authError}</p>}

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


export default LoginPage;