import React, { FC, useEffect, useState } from 'react'
import LoginComponent from './Login';
import { IForm } from '../../interface/login';
import { useSelector, useDispatch } from 'react-redux';
import { loginAPI, loginUser } from '../../views/login/loginSlice';
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
    const user = useSelector(loginUser);

    const dispatch: any = useDispatch();
    let navigate = useNavigate();

    // useEffect(() => {
    //     if (user.message === "success") {
    //         navigate("/dashboard");
    //     }
    // }, [navigate, user.message]);

    const [userData, setUserData] = useState<IForm>({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        debugger
        const obj: IForm = {
            "email": userData.email || "",
            "password": userData.password || ""
        }
        dispatch(loginAPI(obj)).then((res: any) => {
            if (res?.payload?.message === "success") {
                navigate("/dashboard");
            }
        });
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