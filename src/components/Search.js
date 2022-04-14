import React, { useContext, useEffect } from "react";
import searchIcon from "../search.svg";
import "../App.css";
import { MoviesContext } from "../context/MoviesContext";

const Search = () => {
  const moviesCtx = useContext(MoviesContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    moviesCtx.searchMovies(moviesCtx.search);
  };

  const setSearchHandler = (e) => {
    moviesCtx.setSearch(e.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={submitFormHandler}>
        <input type="text" onChange={setSearchHandler} />
        <img src={searchIcon} alt="search" onClick={submitFormHandler} />
      </form>
    </div>
  );
};

export default Search;
