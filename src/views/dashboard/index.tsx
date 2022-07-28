import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { loginUser } from '../../store/login/loginSlice';
// import { isLogin } from '../../utils/auth';
import { fetchUsers, usersData, userLoading } from '../../store/user/getAllUserSlice';

const Home: FC = () => {
    const user = useSelector(usersData);
    const userLogin = useSelector(userLoading);
    console.log("userData =>", user);
    console.log("userLogin =>", userLogin);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>index1212</div>
    )
}

export default Home