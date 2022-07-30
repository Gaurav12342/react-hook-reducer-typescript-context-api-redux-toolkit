import React, { FC } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { currentUser } from '../../../store/user/getCurrentUserSlice';
import { useSelector } from 'react-redux';

const CurrentUser: FC = () => {
    const userData = useSelector(currentUser);

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={userData?.profilepicture}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {userData?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {userData?.id}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {userData?.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {userData?.location}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CurrentUser