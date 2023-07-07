import { useEffect, useState } from "react";

import StarRanking from "../star ranking/star-ranking.component";
import Spinner from "../spinner/spinner.component";

const MY_KEY = "d107f7a0";

const MovieDetails = ({ selectId, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.find((movie) => movie.imdbId === selectId);
  const watchedUserRating = isWatched?.userRating;

  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Genre: genre,
    Year: year,
    Type: type,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbId: selectId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${MY_KEY}&i=${selectId}`
      );

      const data = await response.json();
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [selectId]);

  useEffect(() => {
    if (!title) return;
    document.title = `${type} | ${title}`;
  }, [title]);

  return (
    <div className='details'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            {/*        <button
          className='btn-back'
          onClick={onCloseMovie}
        >
          Close
        </button>
*/}
            <img
              src={poster}
              alt={`Poster of {movie}`}
            />
            <div className='details-overview'>
              <h2>{title}</h2>
              <p>
                {released} - {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB Rating
              </p>
            </div>
          </header>

          <section>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors} ...</p>

            <div className='rating'>
              {!isWatched ? (
                <>
                  <StarRanking
                    maxRating={10}
                    onSetRanking={setUserRating}
                  />

                  {userRating && (
                    <button
                      className='btn-add'
                      onClick={handleAdd}
                    >
                      Watched
                    </button>
                  )}
                </>
              ) : (
                <p>
                  Already Rated {watchedUserRating} <span>⭐</span>
                </p>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
