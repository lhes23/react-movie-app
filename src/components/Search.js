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

  const setSearchHandler = (e) => {
    moviesCtx.setSearch(e.target.value);
  };

  return (
    <form onSubmit={submitFormHandler} className="search">
      <div>
        <input type="text" onChange={setSearchHandler} />
        <img src={searchIcon} alt="search" onClick={submitFormHandler} />
      </div>
    </form>
  );
};

export default Search;
