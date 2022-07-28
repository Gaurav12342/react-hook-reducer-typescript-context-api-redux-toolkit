import React, { FC } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { loginUser } from '../../store/login/loginSlice';
// import { isLogin } from '../../utils/auth';
// import { fetchUsers, usersData, userLoading } from '../../store/user/getAllUserSlice';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Home: FC = () => {
    // const user = useSelector(usersData);
    // const userLogin = useSelector(userLoading);
    // console.log("userData =>", user);
    // console.log("userLogin =>", userLogin);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, [dispatch]);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Current User" />
                <Tab label="All user" />
            </Tabs>
        </Box>
    )
}

export default Home