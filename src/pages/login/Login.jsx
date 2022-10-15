import { useNavigate } from "react-router-dom";
import Box from "../../components/stylescomponents/box/Box";
import Button from "../../components/stylescomponents/button/Button";
import Form from "../../components/stylescomponents/form/Form";
import Error from "../../components/stylescomponents/formerror/FormError";
import FormFiled from "../../components/stylescomponents/formfield/FormField";
import FormWrapper from "../../components/stylescomponents/formwrapper/FormWrapper";
import InfoDiv from "../../components/stylescomponents/infodiv/InfoDiv";
import Input from "../../components/stylescomponents/input/Input";
import Label from "../../components/stylescomponents/label/Label";
import Link from "../../components/stylescomponents/link/Link";
import StyledSpan from "../../components/stylescomponents/styledspan/StyledSpan";
import Title from "../../components/stylescomponents/title/Title";
import WrapperImage from "../../components/stylescomponents/wrapperimage/WrapperImage";
import { loginFormValidators } from "../../formvalidators/loginformvalidators";
import { decrypt } from "../../helpers/crypto";
import useForm from "../../hooks/useForm";

const Login = () => {
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        item && navigate(item);
    }

    const handleLogin = () => {

        const islogin = JSON.parse(localStorage.getItem('user'));
        let email = islogin && islogin.email;
        let password = islogin && decrypt(islogin.password);
        if (data.password === password && data.email === email) {
            localStorage.setItem('token', "jwttoken");
            handleNavigate('/dashboard')
        }
        else {
            alert('Username or Password invalid')
        }
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