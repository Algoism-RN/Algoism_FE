import React, { useState } from "react";
import { HomeContainer, UpContainer, DownContainer, HomeText } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Select } from "../../components/Select/Select";
import { Button } from "../../components/Button/Button";

export const Home = () => {
  const [selectedValue, setSelectedValue] = useState(null); // 상태 추가

  const handleValueChange = (value) => {
    setSelectedValue(value); // 선택된 값 업데이트
  };

  const handleButtonPress = (value) => {
    console.log("Button Pressed with Value:", value); // 버튼 클릭 시 값 출력
  };

  return (
    <HomeContainer>
      <SafeAreaView />
      <UpContainer>
        <Logo fontSize="50px">Algoism?</Logo>
        <HomeText>
          Algoism is a sleek, intuitive app designed to seamlessly{"\n"}
          integrate programming language and computer science{"\n"}
          knowledge into a developer’s daily life.{"\n"}
          It empowers users to learn and grow effortlessly,{"\n"}
          turning routine moments into opportunities for mastery.
        </HomeText>
      </UpContainer>
      <DownContainer>
        <Select onValueChange={handleValueChange} /> {/* 선택값 전달 */}
        <Button selectedValue={selectedValue} onPress={handleButtonPress} /> {/* 버튼에 값 전달 */}
      </DownContainer>
    </HomeContainer>
  );
};