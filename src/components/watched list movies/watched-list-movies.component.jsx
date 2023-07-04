import WatchedMovieRank from "../watched movie rank/watched-movie-rank.component";

const WatchedListMovies = ({ watched }) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovieRank
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default WatchedListMovies;
