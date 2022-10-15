import { Navigate, Route, Routes } from "react-router-dom"
import useToken from "../hooks/useToken";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home"
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import AuthRoutes from "./AuthRoute";

const RootRoute = () => {
    const { token } = useToken();
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={token ? <Navigate to='/dashboard' /> : <Login />} />
            <Route path="/signup" element={token ? <Navigate to='/dashboard' /> : <Signup />} />
            <Route path="/dashboard" element={
                <AuthRoutes>
                    <Dashboard />
                </AuthRoutes>
            } />
        </Routes>
    )
}
export default RootRoute;
