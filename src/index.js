import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FontStyles from "./fontStyles.";

// import StarRanking from "./components/star ranking/star-ranking.component";

// const Test = () => {
//   const [movieRank, setMovieRank] = useState(0);

//   return (
//     <div>
//       <StarRanking
//         maxRating={6}
//         onSetRanking={setMovieRank}
//       />
//       <p>This movie was rated {movieRank} stars</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
