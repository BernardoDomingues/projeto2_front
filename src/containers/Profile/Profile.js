import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BasePage from "Components/BasePage";
import BigButton from "Components/BigButton";

import colors from "helpers/colors";

import { useLogin } from 'providers/login';

import { getMovie } from 'services/movies';

const Profile = () => {
  const { userData, delUser } = useLogin();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie({ reqType: "individualData", options: userData.favMovieId });
      setMovieData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <BasePage>
        <Container>
          <span>Nome de Usuário: </span><span>{userData.userName}</span>
          <br />
          <span>Email: </span><span>{userData.email}</span>
          {userData.favMovieId && (<><br /><h1>Filme Favorito</h1><Banner alt="Banner do filme" src={movieData.image} /><br /><span>{movieData.title}</span></>)}
          {!userData.favMovieId && (<><br /><span>Você ainda não possui um filme favorito, adicione na aba catálogo</span></>)}
          <br />
          <DeleteButton onClick={() => delUser()}>Apagar Usuário</DeleteButton>
        </Container>
      </BasePage>
    </>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Banner = styled.img`
  height: 400px;
  width: 270px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  :hover {
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.8);
  }
`;

const DeleteButton = styled(BigButton)`
  background-color: ${colors.red};
`;

export default Profile;
