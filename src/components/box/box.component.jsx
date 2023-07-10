// import { useState } from "react";
import BoxStyle from "./boxStyle.styles";

const SearchResultBox = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <BoxStyle>
      {
        //  <button
        //   onClick={() => setIsOpen((open) => !open)}
        // >
        //   {isOpen ? "–" : "+"}
        // </button>
      }
      {children}
    </BoxStyle>
  );
};

export default SearchResultBox;
