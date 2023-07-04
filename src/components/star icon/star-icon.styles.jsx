import styled from "styled-components";
import { ReactComponent as StarFullSVG } from "../../assets/star-full.svg";
import { ReactComponent as StarEmptySVG } from "../../assets/star-empty.svg";

export const StarFullIcon = styled(StarFullSVG)`
  width: 30px;
  height: 30px;
`;
export const StarEmptyIcon = styled(StarEmptySVG)`
  width: 30px;
  height: 30px;
`;

export const StarStyle = styled.span`
  width: 20px;
  height: 30px;
  display: block;
  cursor: pointer;
`;
