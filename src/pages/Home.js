import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const api = {
  url: "http://www.omdbapi.com/?apikey=a9df5544",
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = (search) => {
    fetch(`${api.url}&s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };
  return (
    <div className="app">
      <h1>React Movie App</h1>
      <Search
        searchMovies={searchMovies}
        search={search}
        setSearch={setSearch}
      />
      <div className="container">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
