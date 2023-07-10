import { createGlobalStyle } from "styled-components";
import CronusRound from "./fonts/Cronus/CronusRound.ttf";

const FontStyles = createGlobalStyle`
@font-face {
    font-family: 'Cronus Round';
    src: url(${CronusRound}) format('ttf');

   
}
`;

export default FontStyles;
