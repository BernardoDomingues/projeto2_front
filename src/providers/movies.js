import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getHomePageMovies, searchMovies } from "services/movies";

export const MoviesContext = React.createContext({});

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [searcher, setSearcher] = useState("");

  // const addMovieFavorite = (movieId) => {

  // };

  const searchMovie = async () => {
    const data = await searchMovies({ reqType: "search", options: searcher });
    setMovies(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHomePageMovies({ reqType: "homePage", options: "" });
      if (data.personalError) {
        setIsError(data.personalError);
      } else {
        setMovies(data);
      }
    };
    fetchData();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        isError,
        setSearcher,
        searchMovie
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

MoviesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useMovies = () => React.useContext(MoviesContext);
