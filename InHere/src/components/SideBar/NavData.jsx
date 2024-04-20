import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DataSaverOffRoundedIcon from '@mui/icons-material/DataSaverOffRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const navData = [
    {
        id: 0,
        text: "Calendar        ",
        link: "/calendar",
        icon: <CalendarMonthIcon/>

    },
    {
        id: 1,
        text: "Task Tracker",
        link: "/taskTracker",
        icon: <AssignmentIcon/>
    },
    {
        id: 2,
        text: "Event Statistics",
        link: "/eventStats",
        icon: <DataSaverOffRoundedIcon/>
    },
    {
        id: 3,
        text: "Account        ",
        link: "/accountPage",
        icon: <HomeIcon/>

    }
]
