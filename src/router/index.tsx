import { FC } from 'react'
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from "./PrivateRoute";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../views/login/index';
import Registration from '../views/registration/index';
import Home from '../views/home/index';
const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicRoute />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Registration />} />
                </Route>

                <Route path="/dashboard" element={<PrivateRoute />} >
                    <Route path="/dashboard" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Router 