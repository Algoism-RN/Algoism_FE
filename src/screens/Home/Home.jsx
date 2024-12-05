import React, { useEffect } from "react";
import { HomeContainer, UpContainer, DownContainer } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { SafeAreaView } from "react-native";
import { Select } from "../../components/Select/Select";
import { Button } from "../../components/Button/Button";
import { Explain } from "../../components/Explain/Explain";
import { useHomeEvent } from "./events";
import { Quiz } from "../Quiz/Quiz";

export const Home = () => {
  // 카테고리 및 카테고리 업데이트 핸들러
  const {
    categoryValue,
    handleSetCategory,
    isStart,
    setIsStart,
    handleClickStart,
  } = useHomeEvent();

  return isStart ? (
    <Quiz category={categoryValue} setIsStart={setIsStart} />
  ) : (
    <HomeContainer>
      <SafeAreaView />
      <UpContainer>
        <Logo fontSize="50px">Algoism?</Logo>
        <Explain />
      </UpContainer>
      <DownContainer>
        <Select onChange={handleSetCategory} />
        <Button text={"Start"} onPress={handleClickStart} />
      </DownContainer>
    </HomeContainer>
  );
};
