import React from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DateCalendar } from "@mui/x-date-pickers";

export default function DateCalendarUI() {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar
                views={['year', 'month', 'day']}
                /* showDaysOutsideCurrentMonth can be enabled or disabled, fixedWeekNumber determines how many weeks to display */
                /* showDaysOutsideCurrentMonth fixedWeekNumber={6} */
                /* displayWeekNumber */

            />
        </LocalizationProvider>
    );
}