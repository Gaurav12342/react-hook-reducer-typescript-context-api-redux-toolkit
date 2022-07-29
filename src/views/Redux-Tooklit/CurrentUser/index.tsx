import React, { FC, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { fetchCurrentUser } from '../../../store/user/getCurrentUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from '../../../utils/auth';
const CurrentUser: FC = () => {
    const dispatch = useDispatch();
    const loggedUser = JSON.parse(isLogin)

    useEffect(() => {
        if (loggedUser?.id) {
            dispatch(fetchCurrentUser(loggedUser?.id));
        }
    }, [loggedUser]);

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="http://restapi.adequateshop.com/Media//Images/userimageicon.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CurrentUser