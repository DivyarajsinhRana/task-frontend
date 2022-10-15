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
import { signUpFormValidators } from "../../formvalidators/signupformvalidators";
import useForm from "../../hooks/useForm";

const Signup = () => {
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        item && navigate(item);
    }
    const handleRegister = () => {
        handleNavigate('/login')
    }
    const { handleSubmit, handleChange, data, errors } =
        useForm({
            validations: signUpFormValidators,
            onSubmit: () => handleRegister(data),
        });
    return (
        <WrapperImage>
            <Box>
                <FormWrapper>
                    <Title>Signup</Title>
                    <Form onSubmit={handleSubmit}>
                        <FormFiled>
                            <Label htmlFor="firstname">Firstname:</Label>
                            <Input placeholder="Enter firstname" type='text' value={data.firstname} onChange={handleChange('firstname')}></Input>
                            {errors.firstname && <Error>{errors.firstname}</Error>}
                        </FormFiled>
                        <FormFiled>
                            <Label htmlFor="lastname">Lastname:</Label>
                            <Input placeholder="Enter lastname" type='text' value={data.lastname} onChange={handleChange('lastname')}></Input>
                            {errors.lastname && <Error>{errors.lastname}</Error>}

                        </FormFiled>
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
                        <Button type="submit">Create Account</Button>
                    </Form>
                    <InfoDiv>
                        <StyledSpan>
                            Already have an account?
                        </StyledSpan>
                        <Link onClick={() => handleNavigate('/login')}>
                            Sign in
                        </Link>
                    </InfoDiv>
                </FormWrapper>
            </Box>
        </WrapperImage>
    )
}
export default Signup;