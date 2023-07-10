import styled from "styled-components";

export const Details = styled.div`
  line-height: 1.3;
  font-size: 14px;

  header {
    display: flex;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  img {
    width: 40%;
  }

  section {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DetailsOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 30px 35px;
  color: #001d3d;
  background-color: #ffc300;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    line-height: 1.5;
    font-family: "Lato";
  }

  p {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  span {
    @media screen and (max-width: 768px) {
      display: grid;
      position: absolute;

      grid-template-columns: repeat(1, 1fr);
      font-size: 10px;
    }
  }

  .emoji {
    background-color: #001d3d;
    border-radius: 50%;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 15px 30px;
  background-color: #003566;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  box-shadow: 7px 6px rgba(0, 0, 0, 0.1);
`;

export const ButtonAdd = styled.button`
  background-color: #001d3d;
  color: #ffd60a;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  cursor: pointer;
  transition: all 0.4s;
  padding: 10px;
  font-weight: bold;

  &:hover {
    background-color: #ffc300;
    color: #001d3d;
  }
`;
