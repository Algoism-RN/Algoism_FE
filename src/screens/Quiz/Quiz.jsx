import { useEffect } from "react";
import { SafeAreaView, Image } from "react-native";
import {
  QuizScrollView,
  QuizContainer,
  QuestionBox,
  AnswerContainer,
  AnswerBox,
} from "./styles";
import { PageTitleWrapper, Gap } from "../../styles/category/Wrapper";
import { Title, Answer } from "../../components/String/String";
import { Hint } from "../../components/Button/Button";
import { useQuizEvent } from "./events";
import { Progress } from "../../components/Progress/Progress";
import { Loading } from "../../components/Loading/Loading";

// 퀴즈 화면
export const Quiz = ({ category, setIsStart, navigation }) => {
  const {
    randomQ,
    handleGetQuestion,
    solveNum,
    handleClickAnswer,
    handleComplete,
  } = useQuizEvent({
    setIsStart,
    category,
    navigation,
  });

  // 랜덤 문제 10개 로딩
  useEffect(() => {
    handleGetQuestion();
  }, []);

  // 마지막 문제 풀이 완료 시 결과 페이지 이동
  useEffect(() => {
    handleComplete();
  }, [solveNum]);

  return (
    <QuizScrollView>
      <QuizContainer>
        <SafeAreaView />
        <Gap height="40px" />
        <PageTitleWrapper>
          <Title text={category} />
          <Hint />
        </PageTitleWrapper>
        <Gap height="30px" />
        <Progress width={solveNum} />
        <Gap height="30px" />
        <QuestionBox>
          {/* 랜덤 10문제 데이터가 있으며, 10문제를 아직 다 안 푼 경우 */}
          {randomQ && solveNum < 10 ? (
            <Image
              source={{ uri: randomQ[solveNum].question_path }}
              style={{ width: "85%", height: "80%" }}
              resizeMode="contain"
            />
          ) : (
            <Loading />
          )}
        </QuestionBox>
        <Gap height="30px" />
        <AnswerContainer>
          {/* 랜덤 10문제 데이터가 있으며, 10문제를 아직 다 안 푼 경우 */}
          {randomQ && solveNum < 10 ? (
            <AnswerBox
              onPress={() =>
                handleClickAnswer({ num: 1, answer: randomQ[solveNum].answer })
              }
            >
              <Answer text={randomQ[solveNum].choice1} />
            </AnswerBox>
          ) : (
            <Loading />
          )}
          {/* 랜덤 10문제 데이터가 있으며, 10문제를 아직 다 안 푼 경우 */}
          {randomQ && solveNum < 10 ? (
            <AnswerBox
              onPress={() =>
                handleClickAnswer({ num: 2, answer: randomQ[solveNum].answer })
              }
            >
              <Answer text={randomQ[solveNum].choice2} />
            </AnswerBox>
          ) : (
            <Loading />
          )}
          {/* 랜덤 10문제 데이터가 있으며, 10문제를 아직 다 안 푼 경우 */}
          {randomQ && solveNum < 10 ? (
            <AnswerBox
              onPress={() =>
                handleClickAnswer({ num: 3, answer: randomQ[solveNum].answer })
              }
            >
              <Answer text={randomQ[solveNum].choice3} />
            </AnswerBox>
          ) : (
            <Loading />
          )}
          {/* 랜덤 10문제 데이터가 있으며, 10문제를 아직 다 안 푼 경우 */}
          {randomQ && solveNum < 10 ? (
            <AnswerBox
              onPress={() =>
                handleClickAnswer({ num: 4, answer: randomQ[solveNum].answer })
              }
            >
              <Answer text={randomQ[solveNum].choice4} />
            </AnswerBox>
          ) : (
            <Loading />
          )}
          {randomQ && solveNum < 10 ? (
            <Title text={randomQ[solveNum].answer} />
          ) : (
            <Loading />
          )}
        </AnswerContainer>
        <Gap height="30px" />
      </QuizContainer>
    </QuizScrollView>
  );
};
