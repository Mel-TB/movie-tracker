import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 61.5%;
}


body{
   font-family: 'Roboto Mono', sans-serif;
   color: #e5e5e5;
   background-color: #000814;
   padding: 24px;

}

.error {
  padding: 80px;
  text-align: center;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: 30px;
    font-size: 16px
  }

}

.error span {
  padding-right: 10px;


  @media screen and (max-width: 768px) {
    display: flex;
flex-direction: column;
margin-bottom: 10px;
padding-left: 10px;
font-size: 20px;
  }
}

`;

export default GlobalStyle;
