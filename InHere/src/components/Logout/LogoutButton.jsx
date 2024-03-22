import styles from "./LogoutButton.module.css"
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // TODO: add actual deauthentication
        navigate('/');
    };

    return (
        <button
            className={styles.button}
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}

export default Logout;