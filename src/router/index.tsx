import { FC } from 'react'
import PrivateRoute from "./PrivateRoute";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../views/login/index';
import Dashboard from '../views/dashboard/index';
const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/*" element={<PrivateRoute />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Router 