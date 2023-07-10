import { useEffect, useState } from "react";

import StarRanking from "../star ranking/star-ranking.component";
import Spinner from "../spinner/spinner.component";

import MY_API_KEY from "../../utils/api";
import { useKey } from "../../hooks/useKey";
import {
  ButtonAdd,
  Details,
  DetailsOverview,
  Rating,
} from "./watched-list-box.styles";

const MovieDetails = ({ selectId, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.find((movie) => movie.imdbId === selectId);
  const watchedUserRanking = isWatched?.userRating;

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

  // Custom key => add Keydown Events so the user just have to click on escape keypress to close the movie details
  useKey("Escape", onCloseMovie);

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
    <Details>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            {/*        <button
          onClick={onCloseMovie}
        >
          Close
        </button>
*/}
            <img
              src={poster}
              alt={`Poster of {movie}`}
            />
            <DetailsOverview>
              <h2>{title}</h2>
              <p>
                {released} - <span>{runtime}</span>
              </p>
              <p>{genre}</p>
              <p>
                <span className='emoji'> ⭐</span>
                {imdbRating} IMDB Rating
              </p>
            </DetailsOverview>
          </header>

          <section>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors} ...</p>

            <Rating>
              {!isWatched ? (
                <>
                  <StarRanking
                    maxRanking={10}
                    onSetRanking={setUserRating}
                  />

                  {userRating && (
                    <ButtonAdd onClick={handleAdd}>Watched</ButtonAdd>
                  )}
                </>
              ) : (
                <p>
                  Already Rated {watchedUserRanking} <span>⭐</span>
                </p>
              )}
            </Rating>
          </section>
        </>
      )}
    </Details>
  );
};

export default MovieDetails;
