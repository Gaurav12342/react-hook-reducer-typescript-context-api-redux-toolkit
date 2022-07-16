import React, { FC } from 'react'
import { TextField, Button, Paper, Grid } from '@mui/material';

const Login: FC = () => {
    return (
        <Grid container direction="column" justifyContent={'center'} alignItems={"center"}>
            <Paper style={{ width: "40%", padding: "20px" }}>
                <Grid container direction="column" justifyContent={'center'} alignItems={"center"} spacing={3}>
                    <Grid item xs={6}>
                        <TextField label="Username"></TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Password" type={'password'}></TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant='contained'> Login </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid >
    )
}

export default Login