import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        item && navigate(item);
    }
    return (
        <div>
            login page
            <button onClick={() => handleNavigate('/dashboard')}>Login</button>
            <span onClick={() => handleNavigate('/signup')}>Signup</span>
        </div>
    )
}
export default Login;