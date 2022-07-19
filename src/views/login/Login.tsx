import React, { FC } from 'react'
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';

const Login: FC = () => {
    return (
        <Grid sx={{ margin: "1rem 0", alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h3" gutterBottom component="div">
                Login
            </Typography>
            <Paper sx={{ margin: "1rem 20rem", padding: "3rem 1.5rem", backgroundColor: "#e3dddd", borderRadius: "10px", width: "50%", }}>
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