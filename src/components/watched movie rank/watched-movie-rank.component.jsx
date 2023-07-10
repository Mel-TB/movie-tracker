import SearchMovieList from "../movies/movies.styles";

const WatchedMovieRank = ({ movie, onDeleteWatch }) => {
  return (
    <SearchMovieList key={movie.imdbId}>
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
      />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span className='emoji'>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span className='emoji'>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span className='emoji'>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button onClick={() => onDeleteWatch(movie.imdbId)}>X</button>
      </div>
    </SearchMovieList>
  );
};

export default WatchedMovieRank;
