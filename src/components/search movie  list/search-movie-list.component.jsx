import Movies from "../movies/movies.component";
import List from "./searchMovieList.styles";

const SearchMovieList = ({ movies, onSelectMovie }) => {
  return (
    <List>
      {movies?.map((movie) => (
        <Movies
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </List>
  );
};

export default SearchMovieList;
