import ProgressChart from "../components/Event Stats/ProgressChart.jsx";
import styles from "./css-files/EventStatsPage.module.css"

import Legend from "../components/Event Stats/Legend.jsx";

// TODO: create API call for task counts

// Test Data:
// MANIPULATE THIS DATA TO SIMULATE DATABASE QUERY RESPONSE:
const fakeQueryRes = [
    {
        "Condition_Name" : "Total Count",
        "count" : 10
    },
    {
        "Condition_Name" : "Completed Count",
        "count" : 3
    }
]

// Percentage Calculations:
const totalTaskCount = fakeQueryRes.find(
    item =>
        item.Condition_Name === 'Total Count').count;

const completedTaskCount = fakeQueryRes.find(
    item =>
        item.Condition_Name === 'Completed Count').count;

const incompleteTaskCount = totalTaskCount - completedTaskCount;

const percentage = (completedTaskCount /  totalTaskCount) * 100;


// Display Event Stats Page:
function EventStatsPage () {
    // Parameters to Populate Progress Charts and Legends:
    const legendProps = {
        total_count: totalTaskCount,
        completed_count: completedTaskCount,
        incomplete_count: incompleteTaskCount
    }

    return (
        <>
            <h2 className={styles.heading}>Task Completion:</h2>

            <div className={styles.chartContainer}>

                <div className={styles.chartBox}>
                    <ProgressChart percentage={percentage}  />
                </div>

                <div className={styles.legendBox}>
                    <Legend data={legendProps}/>
                </div>

            </div>
        </>
    )
}

export default EventStatsPage;