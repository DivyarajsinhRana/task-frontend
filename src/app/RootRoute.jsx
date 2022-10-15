import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home"
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const RootRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}
export default RootRoute;
