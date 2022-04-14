import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";
import classes from "./MovieDetails.module.css";

const MovieDetails = () => {
  const moviesCtx = useContext(MoviesContext);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setMovie(moviesCtx.movies.filter((movie) => movie.imdbID === id));
  }, [moviesCtx.movies, id]);

  console.log(movie);

  return (
    <div className={classes.movieDetails}>
      {movie.map((m) => {
        return (
          <>
            <img src={m.Poster} alt={m.Title} />
            <h2 className={classes.title}>{m.Title}</h2>
            <p>{m.Type}</p>
          </>
        );
      })}
    </div>
  );
};

export default MovieDetails;
