import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

import { getHomePageMovies, searchMovies } from "services/movies";
import { updateUser } from "services/users";

import { useLogin } from "providers/login";

export const MoviesContext = React.createContext({});

export const MoviesProvider = ({ children }) => {
  const { userData, setUserData } = useLogin();
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [searcher, setSearcher] = useState("");

  const addMovieFavorite = async (movieId) => {
    if (userData.id) {
      const update = await updateUser(userData.id, { favMovieId: movieId });
      Cookies.set("userData", JSON.stringify(update.data));
      setUserData(update.data);
    }
  };

  const searchMovie = async () => {
    const data = await searchMovies({ reqType: "search", options: searcher });
    setMovies(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHomePageMovies({
        reqType: "homePage",
        options: "",
      });
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
        searchMovie,
        addMovieFavorite,
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
