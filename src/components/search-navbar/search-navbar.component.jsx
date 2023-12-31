import { useRef } from "react";
import { useKey } from "../../hooks/useKey";
import SearchStyle from "./searchBar.styles";

const SearchNavBar = ({ query, setQuery }) => {
  const inputElement = useRef(null);

  //  Custom key => Add key 'Enter' events search bar focused and add keydown event using useRef()
  useKey("Enter", () => {
    if (document.activeElement === inputElement.current) return;

    inputElement.current.focus();
    setQuery("");
  });

  return (
    <SearchStyle
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
};

export default SearchNavBar;
