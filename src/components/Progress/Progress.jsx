import React from "react";
import Animated from "react-native-reanimated";
import { ProgressAnimation } from "../../styles/category/Animation";
import { ProgressContainer, Fill } from "./styles";

// Progress Bar
export const Progress = ({ width }) => {
  // 0문제 푼 상황에서의 진행률을 위해 +1 설정
  const BarWidth = `${(width + 1) * 10}%`;

  return (
    <ProgressContainer>
      <Fill width={BarWidth} />
    </ProgressContainer>
  );
};
