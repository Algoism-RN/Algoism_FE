import { SafeAreaView } from "react-native";
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

// 퀴즈 화면
export const Quiz = ({ category, setIsStart }) => {
  const { handleClickEnd } = useQuizEvent({ setIsStart });

  return (
    <QuizScrollView>
      <QuizContainer>
        <SafeAreaView />
        <Gap height="40px" />
        <PageTitleWrapper>
          <Title text={category} />
          <Hint onPress={handleClickEnd} />
        </PageTitleWrapper>
        <Gap height="30px" />
        <Progress width="20%" />
        <Gap height="30px" />
        <QuestionBox></QuestionBox>
        <Gap height="30px" />
        <AnswerContainer>
          <AnswerBox>
            <Answer text={"1"} />
          </AnswerBox>
          <AnswerBox>
            <Answer text={"2"} />
          </AnswerBox>
          <AnswerBox>
            <Answer text={"3"} />
          </AnswerBox>
          <AnswerBox>
            <Answer text={"4"} />
          </AnswerBox>
        </AnswerContainer>
        <Gap height="30px" />
      </QuizContainer>
    </QuizScrollView>
  );
};
