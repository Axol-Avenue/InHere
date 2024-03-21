import styles from "./PageHeader.module.css"
import React, { useState } from 'react';
import Sidebar from '../SideBar/Sidebar.jsx';
import './PageHeader.module.css';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={styles.header}>
            <h1>Calendar Page</h1>
            <button className={styles.button} onClick={toggleSidebar}>Settings</button>
            {isSidebarOpen && <Sidebar />}
        </div>
    )
}

export default Header;