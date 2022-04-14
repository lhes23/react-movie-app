import React, { useContext } from "react";
import searchIcon from "../search.svg";
import "../App.css";
import { MoviesContext } from "../context/MoviesContext";

const Search = () => {
  const moviesCtx = useContext(MoviesContext);
  const submitFormHandler = (e) => {
    e.preventDefault();
    moviesCtx.searchMovies(moviesCtx.search);
  };
  return (
    <div className="search">
      <form onSubmit={submitFormHandler}>
        <input
          type="text"
          onChange={(e) => moviesCtx.setSearch(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => moviesCtx.searchMovies(moviesCtx.search)}
        />
      </form>
    </div>
  );
};

export default Search;
