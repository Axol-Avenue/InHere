import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import "./App.css";
import SideNavBar from "./components/SideBar/SideNavBar.jsx";

import HomePage from "./pages/HomePage.jsx";
import TaskTrackerPage from "./pages/TaskTrackerPage.jsx";
import EventStatsPage from "./pages/EventStatsPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import Login from "./pages/Login.jsx";

function App() {
    return (
        <div className="App">

                <Routes>
                    <Route path="/" element={ <Login/> }/>
                    <Route path="/homePage" element={ <HomePage/> }/>
                    <Route path="/taskTracker" element={ <TaskTrackerPage/> }/>
                    <Route path="/eventStats" element={ <EventStatsPage/> }/>
                    <Route path="/calendar" element={ <CalendarPage/> }/>
                </Routes>

        </div>
    )
}

export default App;