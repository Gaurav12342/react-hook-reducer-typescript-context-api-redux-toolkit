import React, { FC } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from '../utils/auth';

export const PublicRoute: FC = () => {
    return isLogin ? <Navigate to="/dashboard" /> : <Outlet />
}

