import React from "react";
import { Text } from "react-native";
import Animated from "react-native-reanimated";
import { SlideContainer, CategoryText, CategoryBox } from "./styles";
import { SlideAnimation } from "../../styles/category/Animation";

export const Slide = ({ direction }) => {
  const animatedStyle = SlideAnimation(direction);

  return (
    <SlideContainer direction={direction}>
      <Animated.View style={animatedStyle}>
        <CategoryBox>
          <CategoryText>Java C Python Computer Science</CategoryText>
        </CategoryBox>
        <CategoryBox>
          <CategoryText>Java C Python Computer Science</CategoryText>
        </CategoryBox>
      </Animated.View>
    </SlideContainer>
  );
};
