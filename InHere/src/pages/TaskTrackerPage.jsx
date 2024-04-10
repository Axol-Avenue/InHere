import styles from "../components/PageHeader/PageHeader.module.css";
import Calendar from "../components/Calendar/ListCalendar.jsx";

function TaskTrackerPage () {
    return (
        <div className={styles.layout}>
            <Calendar/>
        </div>
    )
}

export default TaskTrackerPage;