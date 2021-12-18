import React from "react";
import styled from "styled-components";

import BasePage from "Components/BasePage";
import SearchMovie from './SearchMovie';

import { useMovies } from 'providers/movies';

const Home = () => {
  const { movies, isError } = useMovies();

  return (
    <>
      <BasePage>
        <SearchMovie />
        <ResultsDiv>
          {!isError &&
            movies.map((movie) => (
              <IndividualCardMovie>
                <Banner alt="Banner do Filme" src={movie.image} />
                <div>{movie.title}</div>
              </IndividualCardMovie>
            ))}
        </ResultsDiv>
        {isError && <ErrorGrid>{isError}</ErrorGrid>}
      </BasePage>
    </>
  );
};

const ErrorGrid = styled.div`
  color: red;
  text-align: center;
`;

const ResultsDiv = styled.div`
  gap: 50px;
  display: flex;
  margin: 10px 10px 0 10px;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) and (max-width: 1366px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1366px) and (max-width: 1920px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const IndividualCardMovie = styled.div`
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px 0 20px 0;

  :hover {
    opacity: 0.9;
    transition: 0.3s;
  }
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

export default Home;
