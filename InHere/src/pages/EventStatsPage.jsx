import React, {useState} from 'react';

import ProgressChart from "../components/Event Stats/ProgressChart.jsx";
import styles from "./css-files/EventStatsPage.module.css"
import Legend from "../components/Event Stats/Legend.jsx";

import http from "../http-common.js";

// Variable Declarations:
const [eventStats, setEventStats] = useState(null);

const TEST_USER_ID = 65;


// Get Task Completion Data:
const fetchData = (userId) => {

    // Call API w/ Axios:
    http.get(`https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/eventStats?userId=${userId}`)
        .then(res => {
            console.log(res);
            setEventStats(res.data);
        })
        .catch(err =>
        {
            console.log("axios error");
            console.log(err)
        });
};


// Display Event Stats Page:
function EventStatsPage () {
    // // Get Task Completion Data:
    // fetchData(TEST_USER_ID); // Call the fetchData function with the desired UserID
    //
    // // Percentage Calculations:
    // const totalTaskCount = eventStats.find(
    //     item =>
    //         item.Condition_Name === 'Total Count').count;
    //
    // const completedTaskCount = eventStats.find(
    //     item =>
    //         item.Condition_Name === 'Completed Count').count;
    //
    // const incompleteTaskCount = totalTaskCount - completedTaskCount;
    //
    // const percentage = (completedTaskCount /  totalTaskCount) * 100;

    // DUMMY DATA:
    const totalTaskCount = 4;
    const completedTaskCount = 3;
    const incompleteTaskCount = 1;

    const percentage = (completedTaskCount /  totalTaskCount) * 100;


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