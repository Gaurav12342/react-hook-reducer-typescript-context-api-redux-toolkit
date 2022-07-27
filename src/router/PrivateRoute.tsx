import { FC } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { isLogin } from '../utils/auth';

const PrivateOutlet: FC = () => {
    const { pathname } = useLocation();

    return isLogin ? (
        <Outlet />
    ) : (
        <Navigate to="/" state={{ from: pathname }} replace />
    );
};

export default PrivateOutlet;
