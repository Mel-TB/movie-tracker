import { useCallback, useState } from "react";

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

import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

import GlobalStyle from "./GlobalStyle";

const ErrorMessage = ({ message }) => {
  return (
    <p className='error'>
      <span>⛔</span>
      {message}
    </p>
  );
};

const App = () => {
  const [query, setQuery] = useState("");
  const [selectId, setSelectId] = useState("");

  // Custom Hooks
  const { movies, error, isLoading } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  const handleSelectMovie = (id) => {
    setSelectId((selectId) => (id === selectId ? null : id));
  };

  const handleCloseMovie = useCallback(() => setSelectId(null), []);

  const handleAddWatch = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbId !== id));
  };

  return (
    <>
      <GlobalStyle />
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
