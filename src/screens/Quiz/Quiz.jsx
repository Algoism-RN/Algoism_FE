import { SafeAreaView } from "react-native";
import { QuizContainer } from "./styles";
import { PageTitleWrapper, Gap } from "../../styles/category/Wrapper";
import { Title } from "../../components/String/String";
import { Hint } from "../../components/Button/Button";

export const Quiz = ({ category }) => {
  return (
    <QuizContainer>
      <SafeAreaView />
      <Gap height="40px" />
      <PageTitleWrapper>
        <Title text={category} />
        <Hint />
      </PageTitleWrapper>
    </QuizContainer>
  );
};
