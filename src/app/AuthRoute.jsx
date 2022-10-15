import { Navigate } from "react-router-dom";
import useToken from "../hooks/useToken";

const AuthRoutes = ({ children, path }) => {
    const { token } = useToken();
    // const path = useLocation().pathname;
    // console.log(path)
    if (!token) {
        return <Navigate to="/login" />
    }
    else {
        return children;
    }
}
export default AuthRoutes;