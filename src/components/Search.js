import React from "react";
import searchIcon from "../search.svg";
import "../App.css";

const Search = ({ searchMovies, search, setSearch }) => {
  return (
    <div className="search">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <img src={searchIcon} alt="search" onClick={() => searchMovies(search)} />
    </div>
  );
};

export default Search;
