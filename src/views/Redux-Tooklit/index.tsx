import React, { FC, useEffect } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import CurrentUser from './CurrentUser/index';
import AllUsers from './AllUser/index';
import { Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { isLogin } from '../../utils/auth';
import { fetchCurrentUser } from '../../store/user/getCurrentUserSlice';
import { fetchUsers } from '../../store/user/getAllUserSlice';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Home: FC = () => {
    const [value, setValue] = React.useState<any>(0);
    const dispatch = useDispatch();
    const loggedUser = JSON.parse(isLogin)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (loggedUser && value === 0) {
            dispatch(fetchCurrentUser(loggedUser?.Id));
        }
    }, [loggedUser, value, dispatch]);


    useEffect(() => {
        if (loggedUser && value === 1) {
            dispatch(fetchUsers());
        }
    }, [dispatch, value, loggedUser]);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Current User" {...a11yProps(0)} />
                    <Tab label="All User" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <CurrentUser />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AllUsers />
            </TabPanel>
        </Box>
    )
}

export default Home