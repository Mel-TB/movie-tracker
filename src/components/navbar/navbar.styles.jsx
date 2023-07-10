import styled from "styled-components";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 73px;
  border-radius: 20px;
  padding: 0 33px;
  background-color: #003566;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: #000814;
  }
`;

export default Nav;
