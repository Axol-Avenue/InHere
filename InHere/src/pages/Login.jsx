import styles from "../components/Login/Login.module.css"
import LoginButton from "../components/Login/LoginButton.jsx"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

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

function Login (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleClick = async (event) => {
        event.preventDefault();
        try {
            await authenticate(username, password);
            navigate('/homePage');
        }
        catch (authErr) {
            setError(authErr.message);
        }
    }


    return (
        <div className={styles.wrapper}>
            <form action="">
                <h1>Login</h1>
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

                <div className='registerLink'>
                    <p>First time in here? <a href="">Sign Up!</a></p>
                </div>

                <LoginButton handleClick={handleClick}/>
                {error && <p>{error}</p>}

            </form>
        </div>
    )
}


export default Login