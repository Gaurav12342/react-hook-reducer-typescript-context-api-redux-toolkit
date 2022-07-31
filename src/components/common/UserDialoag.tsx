import { FC } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ConfirmPopupProps } from '../../interface/user';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';


const UserDialoag: FC<ConfirmPopupProps> = (props) => {
    const { open, handleConfirm, rowData, handleCancel, deleteUserLoader } = props;
    return (
        <Dialog
            open={open}
            onClose={handleCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Delete Record"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {`Are you sure you want to delete ${rowData?.id} record ?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <LoadingButton
                    loading={deleteUserLoader ? true : false}
                    onClick={handleConfirm}
                >
                    Confirm
                </LoadingButton>
                <Button onClick={handleCancel} autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserDialoag