import { useState, useEffect, useCallback } from "react";
import { ResultContainer, ResultMentView, ChartsContainer } from "./styles";
import { SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Title, ResultMent } from "../../components/String/String";
import { PageTitleWrapper, Gap } from "../../styles/category/Wrapper";
import { Button } from "../../components/Button/Button";
import { Chart } from "../../components/Chart/Chart";
import { useResultEvent } from "./events";

// 결과 화면
export const Result = ({ navigation }) => {
  const {
    handleClickAgain,
    pythonData,
    javaData,
    cData,
    csData,
    pythonAvg,
    javaAvg,
    cAvg,
    csAvg,
    handleGetData,
    handleCalcAverage,
  } = useResultEvent({
    navigation,
  });

  // Result Tab이 Focus 될 때마다 실행
  useFocusEffect(
    useCallback(() => {
      handleGetData();
    }, [])
  );

  // 카테고리별 결과에 변화가 있으면, 평균값 조회
  useEffect(() => {
    handleCalcAverage();
  }, [pythonData, javaData, , cData, csData]);

  return (
    <ResultContainer>
      <SafeAreaView />
      <Gap height="40px" />
      <PageTitleWrapper>
        <Title text="Result" />
      </PageTitleWrapper>
      <Gap height="60px" />
      <ResultMentView>
        <ResultMent text="You are idiot ..." />
      </ResultMentView>
      <Gap height="20px" />
      <ChartsContainer>
        <Chart result={{ pythonAvg, javaAvg, cAvg, csAvg }} />
      </ChartsContainer>
      <Gap height="20px" />
      <Button text="Again" onPress={handleClickAgain} />
    </ResultContainer>
  );
};
