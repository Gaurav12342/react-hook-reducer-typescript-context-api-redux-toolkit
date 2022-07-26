import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { loginUser } from '../login/loginSlice';

const Home: FC = () => {
    const user = useSelector(loginUser);

    console.log("user", user);

    return (
        <div>index1212</div>
    )
}

export default Home