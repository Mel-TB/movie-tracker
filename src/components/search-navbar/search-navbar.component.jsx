import { useEffect, useRef } from "react";

const SearchNavBar = ({ query, setQuery }) => {
  const inputElement = useRef(null);
  // search bar focused and add keydown event
  useEffect(() => {
    const callbackListener = (event) => {
      if (document.activeElement === inputElement.current) return;

      if (event.code === "Enter") {
        inputElement.current.focus();
        setQuery("");
      }
    };

    document.addEventListener("keydown", callbackListener);

    return () => document.removeEventListener("keydown", callbackListener);
  }, [setQuery]);

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
};

export default SearchNavBar;
