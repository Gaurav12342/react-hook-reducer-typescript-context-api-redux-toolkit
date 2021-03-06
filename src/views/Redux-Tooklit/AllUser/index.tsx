import React, { FC, useEffect, useState } from 'react'
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
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { deletePerticularUser, deleteLoading } from '../../../store/user/deleteUserSlice';
import UserDialoag from '../../../components/common/UserDialoag';

const AllUsers: FC = () => {
    const user = useSelector(usersData);
    const userLogin = useSelector(userLoading);
    const dispatch = useDispatch();
    const deleteUserLoader = useSelector(deleteLoading);

    const [open, setOpen] = useState(false);
    const [rowData, setRowData] = useState<any>({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleConfirm = () => {
        dispatch(deletePerticularUser(rowData.id)).then((res: any) => {
            if (res?.payload?.status === 200) {
                dispatch(fetchUsers());
                setOpen(false);
            }
        }).catch();

    };


    const handleCancel = () => {
        setOpen(false);
    };

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
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">Location</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user?.data?.map((row: any) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={() => setRowData(row)}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                        <TableCell align="left">{row.location}</TableCell>
                                        <TableCell align="center">
                                            <IconButton aria-label="Delete" onClick={handleClickOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Edit">
                                                <ModeEditOutlineOutlinedIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </>}
                </Table>
            </TableContainer>

            {open && <UserDialoag deleteUserLoader={deleteUserLoader} handleConfirm={handleConfirm} handleCancel={handleCancel} open={open} rowData={rowData} />}
        </div>
    )
}

export default AllUsers