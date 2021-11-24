import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import colors from 'helpers/colors';
import InputField from "Components/InputField";

const LoginForm = () => {
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
                <SubmmitButton type="submit" disabled={isSubmitting}>
                  Entrar
                </SubmmitButton>
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

const SubmmitButton = styled.button`
  border: 0;
  margin: 0;
  background: ${colors.secondaryGreen};
  font-weight: 900;
  color:  ${colors.white};
  height: 40px;
  border-radius: 5px;
  box-shadow: 5px 3px 20px rgba(50, 50, 50, 0.2);
  transition: 0.3s;
  opacity: 1;
  cursor: pointer;

  :hover{
    opacity: 0.8;
  };

  @media (max-width: 1150px) {
    margin-bottom: 10px;
  }
`;

export default LoginForm;
