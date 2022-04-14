import React, { useState } from "react";

export const MoviesContext = React.createContext({
  Movies: [],
});

const api = {
  url: "http://www.omdbapi.com/?apikey=a9df5544",
};

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMoviesHandler = (data) => {
    setMovies(data);
  };

  const addMovieHandler = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  const removeMovieHandler = (ID) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.imdbID !== ID)
    );
  };

  const searchMovies = (search) => {
    fetch(`${api.url}&s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };

  const value = {
    Movies: movies,
    getMovies: getMoviesHandler,
    addMovie: addMovieHandler,
    removeMovie: removeMovieHandler,
    searchMovies,
    search,
  };

  return (
    <MoviesContext.Provider value={value}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
