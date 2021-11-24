import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import colors from 'helpers/colors';

const LoginForm = () => {
const values = { email: "", password: "" }

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Muito Pequena!")
    .max(50, "Muito Longa!")
    .required("Obrigatório"),
  email: Yup.string().email("Email Inválido").required("Obrigatório")
});

const handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
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
                <label>
                  <div>Email:</div>
                  <FormField type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  <div>Senha:</div>
                  <FormField type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </label>
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
  // background-color: red;
  display: grid;
  gap: 50px;
`;

const FormField = styled(Field)`
  height: 25px;
  border-radius: 5px;
  margin-top: 5px;
  border: 0;
  padding-left: 5px;
  border: solid 1px ${colors.black};
  background: ${colors.backgroundColor};
  transition: 0.4s;
  
  :focus{
    border: solid 1px ${colors.primaryGreen};
    background: #fff;
  }
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
`;

export default LoginForm;
