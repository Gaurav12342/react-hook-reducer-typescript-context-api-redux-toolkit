import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { loginUser } from '../../store/login/loginSlice';
import { isLogin } from '../../utils/auth';

const Home: FC = () => {
    const user = useSelector(loginUser);
    const logged = JSON.parse(isLogin)
    console.log("isLogin", logged.Token);


    return (
        <div>index1212</div>
    )
}

export default Home