import Card from "@mui/material/Card";
import {Button, CardContent, FormControl, Grid} from "@mui/material";

function ProfileInformation(){

    return(
        <Card variant="outlined">
            <form>
                <CardContent
                    sx={{
                        p: 3,
                        maxHeight: { md: "40vh" },
                        textAlign: { xs: "center"}
                    }}
                >
                    <FormControl fullWidth>
                        {<Grid
                            container direction={{xs: "column"}}
                            columnSpacing={3}
                            rowSpacing={3}
                        >
                            {/*FIRST NAME*/}
                            <Grid component="form" item xs={6}>
                                <input
                                    type="text"
                                    placeholder="First name"
                                />
                            </Grid>

                            {/*LAST NAME*/}
                            <Grid component="form" item xs={6}>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </Grid>

                            {/*EMAIL*/}
                            <Grid component="form" item xs={6}>
                                <input
                                    type="text"
                                    placeholder="Email"
                                />
                            </Grid>

                            {/*PASSWORD*/}
                            <Grid component="form" item xs={6}>
                                <input
                                    type="text"
                                    placeholder="Password"
                                />
                            </Grid>
                            <Button type="submit" >Submit</Button> {/*className={}*/}
                        </Grid>}
                    </FormControl>
                </CardContent>
            </form>
        </Card>
    )

}

export default ProfileInformation;