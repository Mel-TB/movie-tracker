import NumResult from "./search-num-results.styles";

const SearchNumResults = ({ movies }) => {
  return (
    <NumResult>
      Found <strong>{movies.length}</strong> results
    </NumResult>
  );
};

export default SearchNumResults;
