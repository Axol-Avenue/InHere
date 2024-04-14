import React from 'react';
import SideNavBar from "../SideBar/SideNavBar.jsx";
import Header from "../PageHeader/PageHeader.jsx";
import "./Layout.css";
import {Outlet, useLocation} from "react-router-dom";

const Layout =() =>{

    const { pathname } = useLocation();
    let headerTitle;
    switch (pathname) {
        case "/calendar":
            headerTitle = "Calendar Page";
            break;
        case "/taskTracker":
            headerTitle = "Task Page";
            break;
        case "/eventStats":
            headerTitle = "Event Stats Page";
            break;
        case "/accountPage":
            headerTitle = "Account Page";
            break;
        default:
            headerTitle = "Empty Page";
            break;
    }

    return(
        <div className="Layout">
            <SideNavBar className="SideNavBar"/>
            <Header className="Header" title={headerTitle}/>
            <main className="main"><Outlet/></main>
        </div>
    )
}

export default Layout;