import SearchMovieList from "./movies.styles";

const Movies = ({ movie, onSelectMovie }) => {
  return (
    <SearchMovieList
      onClick={() => onSelectMovie(movie.imdbID)}
      key={movie.imdbID}
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </SearchMovieList>
  );
};

export default Movies;
