import Card from "@mui/material/Card";
import {Avatar, Grid} from "@mui/material";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";

function ProfileCard() {
    return (
        <Card variant="outlined">
            <Grid
                container direction="column"
                justify content="center"
                align items="center"
            />
            <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
                {/* PROFILE PHOTO */}
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                    <Avatar
                        sx={{ width: 100, height: 100, mb: 1.5 }}
                        src="https://getdrawings.com/free-icon-bw/free-avatars-icons-25.png"
                    />
                </Badge>
                <Typography variant="h6">First Name, Last Name {/*Here enter Props to get the name of the account user*/}</Typography>
            </Grid>
        </Card>
    )
}

export default ProfileCard;

