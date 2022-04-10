import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";

import MovieCard from "./components/MovieCard";
const api = {
  url: "http://www.omdbapi.com/?apikey=a9df5544",
};

function App() {
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
    <div className="App">
      <h1>React Movie App</h1>
      <div className="search">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
