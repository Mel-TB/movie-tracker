import { StarEmptyIcon, StarFullIcon, StarStyle } from "./star-icon.styles";

const StarIcon = ({ onRank, full, onHoverIn, onHoverOut, color, size }) => {
  return (
    <StarStyle
      onClick={onRank}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? <StarFullIcon /> : <StarEmptyIcon />}
    </StarStyle>
  );
};

export default StarIcon;
