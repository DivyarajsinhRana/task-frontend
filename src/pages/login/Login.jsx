import { useNavigate } from "react-router-dom";
import Box from "../../components/box/Box";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Error from "../../components/formerror/FormError";
import FormFiled from "../../components/formfield/FormField";
import FormWrapper from "../../components/formwrapper/FormWrapper";
import InfoDiv from "../../components/infodiv/InfoDiv";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import Link from "../../components/link/Link";
import StyledSpan from "../../components/styledspan/StyledSpan";
import Title from "../../components/title/Title";
import WrapperImage from "../../components/wrapperimage/WrapperImage";
import { loginFormValidators } from "../../formvalidators/loginformvalidators";
import useForm from "../../hooks/useForm";

const Login = () => {
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        item && navigate(item);
    }
    const handleLogin = () => {
        handleNavigate('/dashboard')
    }
    const { handleSubmit, handleChange, data, errors } =
        useForm({
            validations: loginFormValidators,
            onSubmit: () => handleLogin(data),
        });
    return (
        <WrapperImage>
            <Box>
                <FormWrapper>
                    <Title>Login</Title>
                    <Form onSubmit={handleSubmit}>
                        <FormFiled>
                            <Label htmlFor="email">Email:</Label>
                            <Input placeholder="Enter email" type='text' value={data.email} onChange={handleChange('email')}></Input>
                            {errors.email && <Error>{errors.email}</Error>}
                        </FormFiled>
                        <FormFiled>
                            <Label htmlFor="password">Password:</Label>
                            <Input placeholder="Enter passoword" type="password" value={data.password} onChange={handleChange('password')}></Input>
                            {errors.password && <Error>{errors.password}</Error>}
                        </FormFiled>
                        <Button type="submit">Login</Button>
                    </Form>
                    <InfoDiv>
                        <StyledSpan>
                            Don't have an account yet?
                        </StyledSpan>
                        <Link onClick={() => handleNavigate('/signup')}>
                            Sign Up
                        </Link>
                    </InfoDiv>
                </FormWrapper>
            </Box>
        </WrapperImage>
    )
}
export default Login;