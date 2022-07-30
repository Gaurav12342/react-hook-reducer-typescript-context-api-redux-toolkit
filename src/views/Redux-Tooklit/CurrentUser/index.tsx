import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { currentUser } from '../../../store/user/getCurrentUserSlice';
import CurrentUserComponent from '../../../components/common/CurrentUser';

const CurrentUser: FC = () => {
    const userData = useSelector(currentUser);

    return (
        <div>
            <CurrentUserComponent userData={userData} />
        </div>
    )
}

export default CurrentUser