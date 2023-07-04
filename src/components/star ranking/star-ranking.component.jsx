import { useState } from "react";
import StarIcon from "../star icon/star-icon.component";

import {
  ContainerStyle,
  StarContainerStyle,
  TextStyle,
} from "./star-ranking-styles";

const StarRanking = ({ maxRating = 5 }) => {
  const [ranking, setRanking] = useState(0);

  const handleRanking = (i) => {
    setRanking(i + 1);
  };

  return (
    <ContainerStyle>
      <StarContainerStyle>
        {Array.from({ length: maxRating }, (_, i) => (
          <StarIcon
            key={i}
            onRank={() => handleRanking(i++)}
            full={ranking >= i + 1}
          />
        ))}
      </StarContainerStyle>
      <TextStyle>{ranking || ""}</TextStyle>
    </ContainerStyle>
  );
};

export default StarRanking;
