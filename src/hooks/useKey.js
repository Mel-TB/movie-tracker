import { useEffect } from "react";

export const useKey = (key, action) => {
  // Add Keydown Events so the user just have to click on escape keypress to close the movie details
  useEffect(() => {
    const callbackListener = (event) => {
      if (event.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", callbackListener);
    return () => document.removeEventListener("keydown", callbackListener);
  }, [action, key]);
};
