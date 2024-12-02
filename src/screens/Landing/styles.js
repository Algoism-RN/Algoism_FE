import styled from "styled-components";
import { ColumnWrapper } from "../../styles/category/Wrapper";
import { CustomText } from "../../styles/category/Text";

// Landing 화면 최상위 태그
export const LandingContainer = styled(ColumnWrapper)`
  align-items: center;
  justify-content: start;
`;

// Landing 화면 Welcome 멘트
export const WelcomeMent = styled(CustomText)`
  font-size: 15px;
  font-family: "AoboshiOne";
`;

// Landing 화면 구역 분할
export const LandingView = styled(ColumnWrapper)`
  width: 100%;
  height: ${(props) => props.height};

  align-items: center;
  justify-content: ${(props) => props.justifyContent || "center"};
`;
