import { FC } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import { isLogin } from '../utils/auth';

const PrivateOutlet: FC = () => {
    const { pathname } = useLocation();

    return isLogin ? (
        <>
            <Header />
            <Outlet />
        </>
    ) : (
        <Navigate to="/" state={{ from: pathname }} replace />
    );
};

export default PrivateOutlet;
