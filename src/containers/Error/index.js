import React from 'react';
import styled from 'styled-components';

import colors from 'helpers/colors';
import BasePage from 'Components/BasePage';

const Error = () => (<BasePage><Container><Title>404 - Página não encontrada</Title></Container></BasePage>)

const Container = styled.div`
  width: 100vw;
  height: 91vh;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${colors.primaryGreen};
`;

export default Error;
