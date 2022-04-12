import { useEffect, useState } from "react";
import "./App.css";

import MovieCard from "./components/MovieCard";
import Search from "./components/Search";

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
    <div className="app">
      <h1>React Movie App</h1>
      <Search
        searchMovies={searchMovies}
        search={search}
        setSearch={setSearch}
      />
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
