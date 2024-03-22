import styles from "./LoginButton.module.css"

function LoginButton( {handleClick} ){
    return (
        <button
            className={styles.button}
            onClick={handleClick}
        >
            Log In
        </button>
    );
}

export default LoginButton;