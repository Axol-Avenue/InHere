import styles from "./LogoutButton.module.css"
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Deauthentication:
        sessionStorage.removeItem("UserID");

        // Navigate back to login page:
        navigate('/');
    };

    return (
        <button
            className={styles.button}
            onClick={handleLogout}
        >
            <LogoutIcon  />
        </button>
    );

}

export default LogoutButton;