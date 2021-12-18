import React from "react";
import styled from "styled-components";

import BigButton from "Components/BigButton";

import colors from "helpers/colors";

import { useMovies } from 'providers/movies';

const SearchMovie = () => {
  const { setSearcher, searchMovie } = useMovies();

  return (
    <>
      <SearchCase>
        <Input
          type="text"
          onChange={(e) => setSearcher(e.target.value)}
          placeholder="Pesquise um filme"
        />
      </SearchCase>
      <ButtonCase>
        <BigButton onClick={() => searchMovie()}>Pesquisar</BigButton>
      </ButtonCase>
    </>
  );
};

const SearchCase = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 10px;
`;

const ButtonCase = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const Input = styled.input`
  height: 30px;
  width: 100%;
  max-width: 100%;
  color: ${colors.black};
  font-family: inherit;
  font-size: 13px;

  margin-top: 3px;
  border: 0;
  border-radius: 4px;
  padding-left: 10px;

  border: solid 1px ${colors.primaryGreen};
`;

export default SearchMovie;
