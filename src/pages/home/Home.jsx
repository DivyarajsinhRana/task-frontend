import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        item && navigate(item);
    }
    return (
        <div>
            Welcome to the our site please login to continue
            <button onClick={() => { handleNavigate('/login') }} >Login</button>
        </div>
    )
}
export default Home;