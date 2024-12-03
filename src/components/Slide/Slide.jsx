import React, { useState } from "react";
import Animated from "react-native-reanimated";
import { SlideContainer, CategoryText, CategoryBox } from "./styles";
import { SlideAnimation } from "../../styles/category/Animation";

export const Slide = ({ direction }) => {
  // CategoryBox의 width를 저장할 변수
  const [boxWidth, setBoxWidth] = useState(0);

  // CategoryBox의 width 측정이 완료되면 boxWidth에 width 저장
  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setBoxWidth(width);
  };

  // 애니메이션 스타일 생성
  const animatedStyle = SlideAnimation(direction, boxWidth);

  return (
    <SlideContainer direction={direction}>
      <Animated.View style={animatedStyle}>
        <CategoryBox onLayout={handleLayout}>
          <CategoryText>Java C Python Computer Science</CategoryText>
        </CategoryBox>
        <CategoryBox>
          <CategoryText>Java C Python Computer Science</CategoryText>
        </CategoryBox>
      </Animated.View>
    </SlideContainer>
  );
};
