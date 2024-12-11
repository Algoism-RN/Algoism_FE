import { useState } from "react";
import { GetCategoryData } from "../../services/storage/GetCategoryData";
import { getAverage } from "../../hooks/getAverage";

export const useResultEvent = ({ navigation }) => {
  // Again 클릭 시 퀴즈 풀이 회면으로 이동
  const handleClickAgain = () => {
    navigation.navigate("Quiz");
  };

  // 카테고리별 결과 배열
  const [pythonData, setPythonData] = useState([]);
  const [javaData, setJavaData] = useState([]);
  const [cData, setCData] = useState([]);
  const [csData, setCsData] = useState([]);

  // 카테고리별 결과 조회
  const handleGetData = async () => {
    setPythonData(await GetCategoryData({ key: "Python" }));
    setJavaData(await GetCategoryData({ key: "Java" }));
    setCData(await GetCategoryData({ key: "C" }));
    setCsData(await GetCategoryData({ key: "Computer Science" }));
  };

  // 카테고리별 평균
  const [pythonAvg, setPythonAvg] = useState(0);
  const [javaAvg, setJavaAvg] = useState(0);
  const [cAvg, setCAvg] = useState(0);
  const [csAvg, setCsAvg] = useState(0);

  // 카테고리별 평균 계산
  const handleCalcAverage = () => {
    setPythonAvg(getAverage({ array: pythonData }));
    setJavaAvg(getAverage({ array: javaData }));
    setCAvg(getAverage({ array: cData }));
    setCsAvg(getAverage({ array: csData }));
  };

  return {
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
  };
};
