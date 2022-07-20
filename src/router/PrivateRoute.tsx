import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../utils/auth';

export const PrivateRoute: FC = () => {
    return isLogin ? <Outlet /> : <Navigate to={'/'} />

}
