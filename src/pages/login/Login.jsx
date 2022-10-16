import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getRegisterUsersList } from "../../redux/features/resgister/registerSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRegisterUsersList());
    }, []);
    const { allUsers } = useSelector(state => state.register);
    // console.log('user', allUsers);
    const handleNavigate = (item) => {
        item && navigate(item);
    }

    const handleLogin = () => {
        dispatch(getRegisterUsersList());
        const islogin = JSON.parse(localStorage.getItem('user'));
        let email = islogin && islogin.email;
        let password = islogin && decrypt(islogin.password);

        const existUser = allUsers.filter((item) => {
            return (data.email === item.email)
        })
        if (existUser.length === 0) {
            setErrors({ ...errors, email: "Please enter valid email" })
        }
        else if (data.password === decrypt(existUser[0].password)) {
            localStorage.setItem('token', "jwttoken");
            handleNavigate('/dashboard')
        }
        else {
            setErrors({ ...errors, password: 'password is incorrect' })
        }
    }
    const { handleSubmit, handleChange, data, errors, setErrors } =
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