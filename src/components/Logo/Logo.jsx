import styled from "styled-components";
import { CustomText } from "../../styles/category/Text";

// Algoism? 로고
export const Logo = styled(CustomText)`
  font-size: ${(props) => props.fontSize || "15px"};
  font-family: "AllertaStencil";
`;
