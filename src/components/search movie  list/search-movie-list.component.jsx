import Movies from "../movies/movies.component";

const SearchMovieList = ({ movies }) => {
  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <Movies
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default SearchMovieList;
