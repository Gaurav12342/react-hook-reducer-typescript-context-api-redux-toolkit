import React, { FC, useState } from 'react'
import { IconButton, InputAdornment, TextField, Button, Paper, Grid, Typography, FormControl, Input, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Registration: FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Grid sx={{ margin: "1rem 0", alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h3" gutterBottom component="div">
                Registration
            </Typography>
            <Paper sx={{ margin: "1rem 20rem", padding: "3rem 1.5rem", backgroundColor: "#e3dddd", borderRadius: "10px", width: "50%", }}>
                <Grid container direction="column" justifyContent={'center'} alignItems={"center"} spacing={3}>
                    <Grid item xs={6}>
                        <TextField id="username" label="Username" variant="standard" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="email" label="Email" variant="standard" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                // value={}
                                // onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant='contained'> Sign Up </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid >
    )
}

export default Registration