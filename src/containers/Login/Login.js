import React, { useState } from "react";
import styled from "styled-components";
import colors from "helpers/colors";

import Logo from "Components/Logo";

import LoginForm from './LoginForm';

const Singin = () => {
  const [formState, setFormState] = useState('login')
  return (
    <Container>
      <Card>
        <Logo
          extraStyle="
          height: 100px;
          width: 250px;
        "
        />
        {formState === 'login' && <LoginForm />}
        {formState === 'singIn' && <span>Cadastro</span>}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Card = styled.div`
  height: 600px;
  width: 480px;
  border-radius: 15px;
  box-shadow: 5px 3px 30px rgba(50, 50, 50, 0.2);
  background-color: ${colors.white};
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    grid-template-columns: none;
    height: auto;
    box-shadow: none;
  }

  @media (max-width: 1150px) {
    grid-template-columns: none;
    height: auto;
    box-shadow: none;
  }
`;

export default Singin;
