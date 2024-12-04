import {
  ChartContainer,
  ChartBarView,
  ChartCategoryView,
  Bar,
  BarContainer,
} from "./styles";
import { ChartCategory, ChartScore } from "../../components/String/String";
import { Gap } from "../../styles/category/Wrapper";

export const Chart = () => {
  return (
    <ChartContainer>
      {/* 1점당 20px로 환산 -> 최대 200px */}
      <ChartBarView>
        <BarContainer>
          <ChartScore text="8" />
          <Gap height="10px" />
          <Bar height="160px" />
        </BarContainer>
        <BarContainer>
          <ChartScore text="5" />
          <Gap height="10px" />
          <Bar height="100px" />
        </BarContainer>
        <BarContainer>
          <ChartScore text="10" />
          <Gap height="10px" />
          <Bar height="200px" />
        </BarContainer>
        <BarContainer>
          <ChartScore text="2" />
          <Gap height="10px" />
          <Bar height="40px" />
        </BarContainer>
        <BarContainer>
          <ChartScore text="6" />
          <Gap height="10px" />
          <Bar height="120px" />
        </BarContainer>
      </ChartBarView>
      <ChartCategoryView>
        <ChartCategory text="C" />
        <ChartCategory text="Java" />
        <ChartCategory text="Python" />
        <ChartCategory text="Javascript" />
        <ChartCategory text="CS" />
      </ChartCategoryView>
    </ChartContainer>
  );
};
