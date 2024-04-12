import styles from "../components/PageHeader/PageHeader.module.css";
import Calendar from "../components/Calendar/ListCalendar.jsx";

function TaskTrackerPage () {

    var cal = new Calendar();
    //console.log(cal.view.currentStart);


    return (
        <div className={styles.layout}>
            {cal}
        </div>
    )
}

export default TaskTrackerPage;