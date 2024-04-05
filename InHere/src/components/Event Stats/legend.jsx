import * as React from 'react';
import styles from "./legend.module.css";

function Legend (props) {
    return (
        <>
            <div className={styles.legendEntryContainer}>
                <div className={styles.legendEntryColor}>
                    <h1>Color</h1>
                </div>

                <div className={styles.legendEntryText}>
                    <h1>Text</h1>
                </div>
            </div>
        </>
    );
}

export default Legend;