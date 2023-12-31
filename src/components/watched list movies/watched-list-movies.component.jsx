import WatchedMovieRank from "../watched movie rank/watched-movie-rank.component";

const WatchedListMovies = ({ watched, onDeleteWatch }) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovieRank
          movie={movie}
          key={movie.imdbID}
          onDeleteWatch={onDeleteWatch}
        />
      ))}
    </ul>
  );
};

export default WatchedListMovies;
