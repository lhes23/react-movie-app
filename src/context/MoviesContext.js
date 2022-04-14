import React, { useState } from "react";

export const MoviesContext = React.createContext({
  movies: [],
  search: "Batman",
  getMovies: () => {},
  searchMovies: () => {},
  setSearch: () => {},
});

const api = {
  url: "http://www.omdbapi.com/?apikey=a9df5544",
};

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = (data) => {
    setMovies(data);
  };

  const searchMovies = (search) => {
    fetch(`${api.url}&s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  const value = {
    movies,
    search,
    getMovies,
    searchMovies,
    setSearch,
  };

  return (
    <MoviesContext.Provider value={value}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
