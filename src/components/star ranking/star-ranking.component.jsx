import { useState } from "react";
import StarIcon from "../star icon/star-icon.component";

import {
  ContainerStyle,
  StarContainerStyle,
  TextStyle,
} from "./star-ranking-styles";

const StarRanking = ({
  maxRanking = 5,
  color = "#ffd83d",
  defaultRanking = 0,
  onSetRanking,
}) => {
  const [ranking, setRanking] = useState(defaultRanking);
  const [tempRanking, setTempRanking] = useState(0);

  const handleRanking = (ranking) => {
    setRanking(ranking);
    onSetRanking(ranking);
  };

  const handleHoverInRanking = (i) => {
    setTempRanking(i + 1);
  };

  const handleHoverOutRanking = (tempRanking) => {
    setTempRanking(tempRanking);
  };
  return (
    <ContainerStyle>
      <StarContainerStyle>
        {Array.from({ length: maxRanking }, (_, i) => (
          <StarIcon
            key={i}
            full={tempRanking ? tempRanking >= i + 1 : ranking >= i + 1}
            onRank={() => handleRanking(i++)}
            onHoverIn={() => handleHoverInRanking(i++)}
            onHoverOut={() => handleHoverOutRanking(0)}
          />
        ))}
      </StarContainerStyle>
      <TextStyle>{tempRanking || ranking || ""}</TextStyle>
    </ContainerStyle>
  );
};

export default StarRanking;
