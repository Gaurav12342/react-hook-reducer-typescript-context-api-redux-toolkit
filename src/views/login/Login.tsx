import React, { FC } from 'react'
import { IconButton, InputAdornment, TextField, Button, Paper, Grid, Typography, FormControl, Input, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ILogin } from '../../interface/login';

const Login: FC<ILogin> = ({ setShowPassword, showPassword, handleChange, userData, handleSubmit }) => {

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Grid sx={{ margin: "1rem 0", alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h3" gutterBottom component="div">
                Login
            </Typography>
            <Paper sx={{ margin: "1rem 20rem", padding: "3rem 1.5rem", backgroundColor: "#e3dddd", borderRadius: "10px", width: "50%", }}>
                <Grid container direction="column" justifyContent={'center'} alignItems={"center"} spacing={3}>
                    <Grid item xs={6}>
                        <TextField name="email" onChange={handleChange} id="email" label="Email" variant="standard" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                name="password"
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                // value={}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant='contained' onClick={handleSubmit}> Login </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid >
    )
}

export default Login