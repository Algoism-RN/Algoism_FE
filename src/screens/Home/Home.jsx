import React, { useEffect } from "react";
import { HomeContainer, UpContainer, DownContainer } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Select } from "../../components/Select/Select";
import { Button } from "../../components/Button/Button";
import { Explain } from "../../components/Explain/Explain";
import { useHomeEvent } from "./events";

export const Home = () => {
  // 카테고리 및 카테고리 업데이트 핸들러
  const { selectedValue, handleValueChange } = useHomeEvent();

  // 변경되는 카테고리 값 확인
  useEffect(() => {
    console.log("selectedValue : ", selectedValue);
  }, [selectedValue]);

  return (
    <HomeContainer>
      <SafeAreaView />
      <UpContainer>
        <Logo fontSize="50px">Algoism?</Logo>
        <Explain />
      </UpContainer>
      <DownContainer>
        <Select onValueChange={handleValueChange} />
        <Button text={"Start"} />
      </DownContainer>
    </HomeContainer>
  );
};
