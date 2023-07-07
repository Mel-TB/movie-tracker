import { useEffect, useState } from "react";

import StarRanking from "../star ranking/star-ranking.component";
import Spinner from "../spinner/spinner.component";

import MY_API_KEY from "../../utils/api";

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

  // Render informations about the movie/series and add to movieWatched list
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

  // Add Keydown Events so the user just have to click on escape keypress to close the movie details
  useEffect(() => {
    const callbackListener = (event) => {
      if (event.code === "Escape") {
        onCloseMovie();
      }
    };

    document.addEventListener("keydown", callbackListener);
    return () => document.removeEventListener("keydown", callbackListener);
  }, [onCloseMovie]);

  // Select watched movie if === to select Id from the movie list
  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${MY_API_KEY}&i=${selectId}`
      );

      const data = await response.json();
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [selectId]);

  // Change page title to show the type and the name
  useEffect(() => {
    if (!title) return;
    document.title = `${type} | ${title}`;

    // Clean up function
    return () => (document.title = "Night Owl");
  }, [title, type]);

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
