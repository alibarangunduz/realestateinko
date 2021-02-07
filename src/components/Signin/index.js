import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">
          <ArrowBackIcon fontSize="large" />
        </Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Hesabınıza giriş yapın</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for" required>
              Password
            </FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Devam Et</FormButton>
            <Text>Forgot password ?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
