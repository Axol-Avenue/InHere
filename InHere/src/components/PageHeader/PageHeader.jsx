import styles from "./PageHeader.module.css"
import React, { useState } from 'react';
import Settings from './Settings.jsx';
import './PageHeader.module.css';

const Header = ({title}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={styles.header}>
            <h1 className={styles.heading}>{title}</h1>
            <button className={styles.button} onClick={toggleSidebar}>Settings</button>
            {isSidebarOpen && <Settings />}
        </div>
    )
}

export default Header;