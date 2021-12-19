import React from "react";
import styled from "styled-components";
import BasePage from "Components/BasePage";
import colors from "helpers/colors";

const About = () => {
  return (
    <>
      <BasePage>
        <Container>
          <h1>Sobre o Projeto</h1>
          <p>
            Essa aplicação foi Feita pelos Desenvolvedores Bernardo Domingues e
            Vinicius Santos com o objetivo de colocar em prática os ensinamentos
            do Professor Eduardo Felipe e obter créditos nas aulas de
            Desenvolvimento Web da Universidade Federal de Itajubá - Campus
            Itabira.
          </p>
          <p>
            Utilizamos como base de dados do sistema a versão free da API de
            filmes da IMDb(Internet Movie Database), para tal, foi necessário
            criar uma conta no site oficial(
            <a href="https://imdb-api.com/film-rating-system" target="_blank">
              https://imdb-api.com/film-rating-system
            </a>
            ) onde obtivemos uma Key necessária na requisição dos dados.
          </p>
        </Container>
        <ProfileGrid>
          <Card>
            <Title>Bernardo Domingues</Title>
            <p>
              Apaixonado por tecnologia, desde cedo me interessei pelo mundo da
              programação, sempre buscando aprender coisas novas e expandindo
              meus horizontes.No momento da criação desse projeto, cursava o
              quarto período de Engenharia de Computação na UNIFEI e trabalhando
              há 1 ano na Rede Melhor Compra.
            </p>
            <CardFooter>
              <a
                href="https://linkedin.com/in/bernardo-domingues14"
                target="_blank"
              >
                LinkedIn
              </a>
              <br />
              <a href="https://github.com/BernardoDomingues" target="_blank">
                GitHub
              </a>
            </CardFooter>
          </Card>
          <Card>
            <Title>UNIFEI - Campus Itabira</Title>
            <p>
              Instituição de ensino superior pública federal, considerada a
              primeira universidade tecnológica e foi a décima escola
              de engenharia do país. Extremamente conceituada entre as
              universidades de engenharia do Brasil, atua há mais de 100 anos no
              ensino.
            </p>
            <CardFooter>
              <a href="https://unifei.edu.br/" target="_blank">
                Site
              </a>
              <br />
              <a
                href="https://pt.wikipedia.org/wiki/Universidade_Federal_de_Itajub%C3%A1"
                target="_blank"
              >
                Wikipedia
              </a>
            </CardFooter>
          </Card>
          <Card>
            <Title>Vinicius Santos</Title>
            <p>
              Mero aspirante ao mundo tech, curto programar e montar
              computadores, peça por peça. Minha curiosidade me instiga a sempre
              buscar a aprender novas tecnologias e jamais ficar obsoleto. No
              momento da elaboração deste projeto, cursava o quarto período de
              Engenharia de Computação na UNIFEI
            </p>
            <CardFooter>
              <a
                href="https://www.linkedin.com/in/vinicius-santos11"
                target="_blank"
              >
                LinkedIn
              </a>
              <br />
              <a href="https://github.com/ViniciusP-Sants" target="_blank">
                GitHub
              </a>
            </CardFooter>
          </Card>
        </ProfileGrid>
      </BasePage>
    </>
  );
};

const Container = styled.div`
  margin: 0 100px 0 100px;
`;

const ProfileGrid = styled.div`
  margin: 50px 180px 50px 180px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;

  @media screen and (max-width: 800px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-flow: column;
  }

  @media screen and (min-width: 801px) and (max-width: 1024px) {
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: column;
  }
`;

const Card = styled.div`
  border: 2px solid;
  text-align: center;
  border-radius: 25px;
  padding: 10px;
  font-size: 20px;
  height: 500px;
  min-width: 300px;
  background-color: ${colors.secondaryGreen};
  color: ${colors.backgroundColor};
  border: 1px solid ${colors.primaryGreen};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;

const Title = styled.h3`
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const CardFooter = styled.div`
  text-decoration: none;
  color: ${colors.backgroundColor};
  margin-top: 20px;
`;

export default About;
