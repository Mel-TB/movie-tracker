import styled from "styled-components";

const SearchMovieList = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 25px;
  font-size: 15px;
  align-items: center;
  padding: 15px 25px;
  border-bottom: 1px solid #003566;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: #ffd60a;
    color: #001d3d;
    border-bottom: 1px solid #000814;
  }

  img {
    width: 100%;
  }

  h3 {
    font-size: 15px;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
      margin-top: 10px;
      margin-bottom: 6px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
      margin-top: 10px;
      margin-bottom: 6px;
    }
  }

  p {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    position: absolute;
    right: 25px;
    height: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: none;
    background-color: #ffc300;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s;
  }

  .emoji {
    background-color: #001d3d;
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;

export default SearchMovieList;
