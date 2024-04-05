import ProgressChart from "../components/Event Stats/progress-chart.jsx";
import styles from "./css-files/EventStatsPage.module.css"
import Legend from "../components/Event Stats/legend.jsx";


function EventStatsPage () {
    // Parameters to Populate Progress Charts and Legends:
    const props = {
        percentage: 40,
        legend_label_1: "Completed Tasks",
        legend_label_2: "Uncompleted Tasks"
    }

    return (
        <>
            <h2 className={styles.heading}>Task Completion:</h2>

            <div className={styles.chartContainer}>

                <div className={styles.chartBox}>
                    <ProgressChart percentage={props.percentage} />
                </div>

                <div className={styles.legendBox}>
                    <Legend label1={props.legend_label_1} />
                </div>

            </div>
        </>
    )
}

export default EventStatsPage;