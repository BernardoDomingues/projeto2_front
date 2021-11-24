import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { postRegister } from "services/register";

import { useLogin } from "providers/login";

import colors from "helpers/colors";
import InputField from "Components/InputField";
import BigButton from "Components/BigButton";

const RegisterForm = () => {
  const { setFormState } = useLogin();

  const values = {
    userName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const loginSchema = Yup.object().shape({
    userName: Yup.string().required("Nome de usuário Obrigatório!"),
    email: Yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
    password: Yup.string()
      .min(8, "Muito Pequena!")
      .max(50, "Muito Longa!")
      .required("Campo Obrigatório!"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Senhas incompatíveis"
    ),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await postRegister(values);
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
              <div style={{ display: "grid" }}>
                <InputField
                  name="userName"
                  type="text"
                  label="Nome de Usuário:"
                />
                <InputField name="email" type="email" label="Email:" />
                <InputField name="password" type="password" label="Senha:" />
                <InputField
                  name="passwordConfirmation"
                  type="password"
                  label="Confirme sua Senha:"
                />
              </div>
              <ButtonGrid>
                <BigButton type="submit" disabled={isSubmitting}>
                  Cadastrar
                </BigButton>
                <BackButton onClick={() => setFormState("login")}>
                  Voltar
                </BackButton>
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

const BackButton = styled(BigButton)`
  background: ${colors.white};
  border: 1px solid ${colors.red};
  color: ${colors.red};
  margin-bottom: 10px;
`;

const ButtonGrid = styled.div`
  display: grid;
  gap: 10px;
`;

export default RegisterForm;
