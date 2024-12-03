import React from "react";
import { TouchableWithoutFeedback, Image } from "react-native";
import Animated from "react-native-reanimated";

import { LandingContainer, WelcomeMent, LandingView } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { Slide } from "../../components/Slide/Slide";
import { BlinkingAnimation } from "../../styles/category/Animation";

export const Landing = ({ setIsStart }) => {
  const animatedStyle = BlinkingAnimation();

  return (
    <TouchableWithoutFeedback onPress={() => setIsStart(true)}>
      <LandingContainer>
        <LandingView height="35%">
          <Image
            source={require("../../assets/images/BackgroundImg.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </LandingView>
        <LandingView height="40%" justifyContent="space-between">
          <Logo fontSize="50px">Algoism?</Logo>
          <Animated.Text style={animatedStyle}>
            <WelcomeMent>Click here to get started !</WelcomeMent>
          </Animated.Text>
        </LandingView>
        <LandingView height="25%">
          <Slide direction={true} />
          <Slide direction={false} />
        </LandingView>
      </LandingContainer>
    </TouchableWithoutFeedback>
  );
};
