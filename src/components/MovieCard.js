import React from "react";
import "../App.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie" key={movie.imdbID}>
      <div>{movie.Year}</div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
