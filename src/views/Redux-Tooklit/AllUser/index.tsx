import React, { FC, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, usersData, userLoading } from '../../../store/user/getAllUserSlice';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const AllUsers: FC = () => {
    const user = useSelector(usersData);
    const userLogin = useSelector(userLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    {userLogin ?
                        <Box sx={{ width: "100%" }}> <Skeleton />
                            <Skeleton animation="wave" />
                            <Skeleton animation={false} />
                        </Box>
                        : <>
                            <TableHead>
                                <TableRow>
                                    <TableCell>User Id</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Location</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user?.data?.map((row: any) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">{row.location}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </>}
                </Table>
            </TableContainer>
        </div>
    )
}

export default AllUsers