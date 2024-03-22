import {
    Routes,
    Route,
} from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import TaskTrackerPage from "./pages/TaskTrackerPage.jsx";
import EventStatsPage from "./pages/EventStatsPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={ <Login/> }/>
                <Route element={<Layout/>}>
                    <Route path="/homePage" element={<HomePage/>}/>
                    <Route path="/taskTracker" element={<TaskTrackerPage/>}/>
                    <Route path="/eventStats" element={<EventStatsPage/>}/>
                    <Route path="/calendar" element={<CalendarPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;