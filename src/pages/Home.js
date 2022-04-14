import React, { useEffect, useContext } from "react";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";

const Home = () => {
  const moviesCtx = useContext(MoviesContext);

  useEffect(() => {
    moviesCtx.searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>React Movie App</h1>
      <Search
        searchMovies={moviesCtx.searchMovies}
        search={moviesCtx.search}
        setSearch={moviesCtx.setSearch}
      />
      <div className="container">
        {moviesCtx.movies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
