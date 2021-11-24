import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useLogin } from 'providers/login';

import colors from 'helpers/colors';
import InputField from "Components/InputField";
import BigButton from "Components/BigButton";

const LoginForm = () => {
  const { setFormState } = useLogin();
  
const values = { email: "", password: "" }

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Muito Pequena!")
    .max(50, "Muito Longa!")
    .required("Campo Obrigatório!"),
  email: Yup.string().email("Email Inválido!").required("Campo Obrigatório!")
});

const handleSubmit = (values, { setSubmitting, resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
};
    return (
      <>
        <Formik
          initialValues={values}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <FormData>
                <div style={{ display: 'grid' }}>
                  <InputField
                    name="email"
                    type="email"
                    label="Email:"
                  />
                  <InputField
                    name="password"
                    type="password"
                    label="Senha:"
                  />
                </div>
                <ButtonGrid>
                  <BigButton type="submit" disabled={isSubmitting}>
                    Entrar
                  </BigButton>
                  <RegisterButton onClick={() => setFormState('register')}>Cadastre-se</RegisterButton>
                </ButtonGrid>
              </FormData>
            );
          }}
        </Formik>
      </>
    );
};

const FormData = styled(Form)`
  display: grid;
  gap: 50px;
`;

const RegisterButton = styled(BigButton)`
  background: ${colors.white};
  border: 1px solid ${colors.secondaryGreen};
  color: ${colors.secondaryGreen};
`;

const ButtonGrid = styled.div`
  display: grid;
  gap: 10px;
`;

export default LoginForm;
