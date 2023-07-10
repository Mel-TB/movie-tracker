import styled from "styled-components";

const WatchedSummaryStyle = styled.div`
  background-color: #ffc300;
  color: #001d3d;
  border-radius: 3px;
  padding: 20px 30px 20px 30px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);

  h2 {
    text-transform: uppercase;
    font-family: "Roboto";
    margin-bottom: 16px;
    font-size: 17px;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-family: "Roboto";
    gap: 25px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      padding-bottom: 20px;
    }
  }

  p {
    display: flex;
    align-items: center;
    gap: 5px;

    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
    }
  }

  .emoji {
    background-color: #001d3d;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
      border-radius: 50%;
      height: 20px;
      width: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-top: 20px;
  }
`;

export default WatchedSummaryStyle;
