import { ResultContainer, ResultMentView, ChartsContainer } from "./styles";
import { SafeAreaView } from "react-native";
import { Title, ResultMent } from "../../components/String/String";
import { PageTitleWrapper, Gap } from "../../styles/category/Wrapper";
import { Button } from "../../components/Button/Button";
import { Chart } from "../../components/Chart/Chart";
import { useResultEvent } from "./events";

// 결과 화면
export const Result = ({ navigation }) => {
  const { handleClickAgain } = useResultEvent({ navigation });

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
        <Chart />
      </ChartsContainer>
      <Gap height="20px" />
      <Button text="Again" onPress={handleClickAgain} />
    </ResultContainer>
  );
};
