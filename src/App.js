import { useEffect, useState } from "react";

import NavBar from "./components/navbar/navbar.component";
import Main from "./components/main/main.component";
import SearchNumResults from "./components/search num results/search-num-results.component";
import Box from "./components/box/box.component";
import SearchMovieList from "./components/search movie  list/search-movie-list.component";

import Spinner from "./components/spinner/spinner.component";
import SearchNavBar from "./components/search-navbar/search-navbar.component";

const MY_KEY = "d107f7a0";
const ErrorMessage = ({ message }) => {
  return (
    <p className='error'>
      <span>⛔</span>
      {message}
    </p>
  );
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const tempQuery = "friends";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${MY_KEY}&s=${tempQuery}`
        );

        if (!response.ok) throw new Error("Something went wrong");

        const data = await response.json();

        if (data.Response === "False") throw new Error("Not found");

        setMovies(data.Search);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <SearchNavBar
          query={query}
          setQuery={setQuery}
        />
        <SearchNumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Spinner />}
          {!isLoading && !error && <SearchMovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
      </Main>
    </>
  );
};

export default App;
