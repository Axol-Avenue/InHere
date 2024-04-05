import Header from "../components/PageHeader/PageHeader.jsx";
import styles from "../components/PageHeader/PageHeader.module.css";
import Calendar from "../components/Calendar/Calendar.jsx";

function CalendarPage () {
    return (
        <div className={styles.layout}>
            <Calendar />
            {/*<Header />*/}
        </div>
    )
}

export default CalendarPage;