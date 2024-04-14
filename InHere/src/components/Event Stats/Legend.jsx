import * as React from 'react';
import styles from "./Legend.module.css";

import SquareIcon from '@mui/icons-material/Square';

function Legend (props) {
    return (
        <>
            <div className={styles.legendEntryContainer}>
                <div className={styles.legendEntryColor}>
                    <SquareIcon style={{color: "#d6d6d6"}} sx={{fontSize: 40}}/>
                </div>

                <div className={styles.legendEntryLabel}>
                    <h1>Incomplete Task Count</h1>
                </div>

                <div className={styles.legendEntryCount}>
                    <h1>{props.data.incomplete_count}</h1>
                </div>
            </div>

            <div className={styles.legendEntryContainer}>
                <div className={styles.legendEntryColor}>
                    <SquareIcon style={{color: "#009900"}} sx={{fontSize: 40}}/>
                </div>

                <div className={styles.legendEntryLabel}>
                    <h1>Completed Task Count</h1>
                </div>

                <div className={styles.legendEntryCount}>
                    <h1>{props.data.completed_count}</h1>
                </div>
            </div>

            <div className={styles.legendEntryContainer}>
                <div className={styles.legendEntryColor}>
                </div>

                <div className={styles.legendEntryLabel}>
                    <h1>Total Count</h1>
                </div>

                <div className={styles.legendEntryCount}>
                    <h1>{props.data.total_count}</h1>
                </div>
            </div>
        </>
    );
}

export default Legend;