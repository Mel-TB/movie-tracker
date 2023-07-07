import { useEffect, useState } from "react";

import NavBar from "./components/navbar/navbar.component";
import Main from "./components/main/main.component";
import SearchNumResults from "./components/search num results/search-num-results.component";
import Box from "./components/box/box.component";
import SearchMovieList from "./components/search movie  list/search-movie-list.component";

import MovieDetails from "./components/watched list box/watched-list-box.component";
import WatchedSummary from "./components/watched summary/watched-summary.component";
import WatchedListMovies from "./components/watched list movies/watched-list-movies.component";

import Spinner from "./components/spinner/spinner.component";
import SearchNavBar from "./components/search-navbar/search-navbar.component";

import MY_API_KEY from "./utils/api";

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
  const [watched, setWatched] = useState(() => {
    const storedWatched = localStorage.getItem("watched");
    return JSON.parse(storedWatched);
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectId, setSelectId] = useState("");

  const handleSelectMovie = (id) => {
    setSelectId((selectId) => (id === selectId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectId(null);
  };

  const handleAddWatch = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbId !== id));
  };

  // Add local storage for watched movies
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  // Fetch movies information from the database ombDB API and return them to the search results. If no movies are found then return error messages.
  // While movies are loading have spinner rendering.
  useEffect(() => {
    // Abort controller to clean up fetching requests
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setError("");
        setIsLoading(true);

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${MY_API_KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Something went wrong");

        const data = await response.json();

        if (data.Response === "False") throw new Error("Not found");

        setMovies(data.Search);
        setError("");
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    handleCloseMovie();

    fetchMovies();

    // clean up function
    return () => controller.abort();
  }, [query]);

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
          {!isLoading && !error && (
            <SearchMovieList
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectId ? (
            <MovieDetails
              selectId={selectId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatch}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />

              <WatchedListMovies
                watched={watched}
                onDeleteWatch={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
