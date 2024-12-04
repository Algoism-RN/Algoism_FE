import { ResultContainer, ResultMentView, ChartsContainer } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title, ResultMent } from "../../components/String/String";
import { PageTitleWrapper, Gap } from "../../styles/category/Wrapper";
import { Button } from "../../components/Button/Button";
import { Chart } from "../../components/Chart/Chart";

export const Result = () => {
  return (
    <ResultContainer>
      <SafeAreaView />
      <PageTitleWrapper>
        <Title text="Result" />
      </PageTitleWrapper>
      <Gap height="60px" />
      <ResultMentView>
        <ResultMent text="You are idiot ..." />
      </ResultMentView>
      <Gap height="20px" />
      <ChartsContainer>
        <Chart />
      </ChartsContainer>
      <Gap height="20px" />
      <Button text="Again" />
    </ResultContainer>
  );
};
