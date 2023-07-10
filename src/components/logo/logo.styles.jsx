import styled from "styled-components";

export const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  span {
    font-size: 32px;
  }

  h1 {
    font-family: "Cronus Round";
    font-size: 27px;
    letter-spacing: 0.4px;
  }

  @media screen and (max-width: 768px) {
    background-color: #003566;
    border-radius: 20px;
    width: 385px;
    /* justify-content: center; */
  }
`;
