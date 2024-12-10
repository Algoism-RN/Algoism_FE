import React, { useEffect } from "react";
import { HomeContainer, UpContainer, DownContainer } from "./styles";
import { Logo } from "../../components/Logo/Logo";
import { SafeAreaView } from "react-native";
import { Select } from "../../components/Select/Select";
import { Button } from "../../components/Button/Button";
import { Explain } from "../../components/Explain/Explain";
import { useHomeEvent } from "./events";
import { Quiz } from "../Quiz/Quiz";

export const Home = ({ navigation }) => {
  // 카테고리 및 카테고리 업데이트 핸들러
  const {
    setCategory,
    categoryValue,
    handleSetCategory,
    isStart,
    setIsStart,
    handleClickStart,
  } = useHomeEvent();

  // Quiz 화면에서 Home 화면으로 넘어왔을 때 저장되어있는 category 값을 초기화
  useEffect(() => {
    if (!isStart) {
      setCategory(null);
    }
  }, [isStart]);

  return isStart ? (
    <Quiz
      category={categoryValue}
      setIsStart={setIsStart}
      navigation={navigation}
    />
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
