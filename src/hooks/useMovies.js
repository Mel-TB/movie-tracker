import { useEffect, useState } from "react";
import MY_API_KEY from "../utils/api";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Abort controller to clean up fetching requests
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setError("");
        setIsLoading(true);

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${MY_API_KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Something went wrong");

        const data = await response.json();

        if (data.Response === "False") throw new Error("Not found");

        setMovies(data.Search);
        setError("");
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    // clean up function
    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error };
};
