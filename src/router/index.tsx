import { FC } from 'react'
import PrivateRoute from "./PrivateRoute";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../views/login/index';
import ToolkitDashboard from '../views/Redux-Tooklit/index';
const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/*" element={<PrivateRoute />}>
                    <Route path="toolkit-dashboard" element={<ToolkitDashboard />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Router 