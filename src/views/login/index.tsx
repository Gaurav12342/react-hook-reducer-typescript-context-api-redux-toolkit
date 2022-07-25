import React, { FC, useState } from 'react'
import LoginComponent from './Login';
import { IForm } from '../../interface/login';
import { useSelector, useDispatch } from 'react-redux';
import { loginAPI } from '../../views/login/loginSlice';
const Login: FC = () => {
    const loginUserData = useSelector(state => state);
    const dispatch: any = useDispatch();
    console.log("loginUserData", loginUserData);

    const [userData, setUserData] = useState<IForm>({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        const obj: IForm = {
            "email": userData.email || "",
            "password": userData.password || ""
        }
        dispatch(loginAPI(obj));
    }
    return (
        <div>
            <LoginComponent
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                setUserData={setUserData}
                userData={userData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Login