import styles from "./css-files/LoginPage.module.css"
import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import LoginValidation from "../components/Login/LoginValidation.jsx";
import http from "../http-common.js";

function LoginPage (){
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
                        navigate("/calendar");
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
        <div class={styles.background}>
            <div className={styles.wrapper}>
                <form action="" onSubmit={handleSubmit}>
                    <h1 className={styles.text} style={{fontSize: 48}}>Log<i><b>InHere</b></i></h1>
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
                        <div className={styles.text}>
                            <p style={{ color: '#3a683b' }}>First time?
                                <Link to="/signUp" style={{ color: '#345a35' }}> Sign Up!</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default LoginPage;