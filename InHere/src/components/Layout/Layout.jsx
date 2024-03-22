import React from 'react';
import SideNavBar from "../SideBar/SideNavBar.jsx";
import Header from "../PageHeader/PageHeader.jsx";
import "./Layout.css";
import {useLocation} from "react-router-dom";

const Layout =({children}) =>{

    const { pathname } = useLocation();
    let headerTitle;
    switch (pathname) {
        case "/homePage":
            headerTitle = "Home Page";
            break;
        case "/taskTracker":
            headerTitle = "Task Page";
            break;
        case "/eventStats":
            headerTitle = "Event Stats Page";
            break;
        case "/calendar":
            headerTitle = "Calendar Page";
            break;
        default:
            headerTitle = "Empty Page";
            break;
    }

    return(
        <div className="Layout">
            <SideNavBar className="SideNavBar"/>
            <Header className="Header" title={headerTitle}/>
            <main className="main">{children}</main>
        </div>
    )
}

export default Layout;