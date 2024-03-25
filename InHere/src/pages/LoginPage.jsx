import styles from "./css-files/LoginPage.module.css"
import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import LoginAuthentication from "../components/Login/LoginAuthentication.jsx";

function LoginPage (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await LoginAuthentication(username, password);
            navigate('/homePage');
        }
        catch (authErr) {
            setError(authErr.message);
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

                <button type="submit" className={styles.button}>Log In</button>
                {error && <p>{error}</p>}

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