import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { MoviesContext } from "./context/MoviesContext";

const App = () => {
  const moviesCtx = useContext(MoviesContext);

  useEffect(() => {
    moviesCtx.searchMovies("Batman");
  }, [moviesCtx]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            movies={moviesCtx.Movies}
            setMovies={moviesCtx.setMovies}
            search={moviesCtx.search}
            setSearch={moviesCtx.setSearch}
            searchMovies={moviesCtx.searchMovies}
          />
        }
      />
      <Route path="/movie" element={<Movie />} />
    </Routes>
  );
};

export default App;
