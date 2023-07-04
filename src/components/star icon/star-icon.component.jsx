import { StarEmptyIcon, StarFullIcon, StarStyle } from "./star-icon.styles";

const StarIcon = ({ onRank, full }) => {
  return (
    <StarStyle onClick={onRank}>
      {full ? <StarFullIcon /> : <StarEmptyIcon />}
    </StarStyle>
  );
};

export default StarIcon;
