import styled from "styled-components";

const SearchStyle = styled.input`
  background-color: #e5e5e5;
  width: 350px;
  justify-self: center;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 18px;
  color: #001d3d;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 24px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #001d3d;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    font-size: 16px;
    text-align: center;
    width: auto;
    top: 30px;
    right: 4px;
  }
`;

export default SearchStyle;
