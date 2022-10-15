import { useNavigate } from "react-router-dom"
import Button from "../../components/button/Button";
import Title from "../../components/title/Title";
import Wrapper from "../../components/wrapper/Wrapper";

const Home = () => {
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        item && navigate(item);
    }
    return (
        <Wrapper direction="column">
            <Title>Welcome to the our site please login to continue...</Title>
            <Button onClick={() => { handleNavigate('/login') }} >Login</Button>
        </Wrapper>
    )
}
export default Home;