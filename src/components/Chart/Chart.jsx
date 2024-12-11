import { useState, useEffect } from "react";
import {
  ChartContainer,
  ChartBarView,
  ChartCategoryView,
  Bar,
  BarContainer,
} from "./styles";
import { ChartCategory, ChartScore } from "../../components/String/String";
import { Gap } from "../../styles/category/Wrapper";

export const Chart = ({ result }) => {
  // 카테고리별 평균
  const { pythonAvg, javaAvg, cAvg, csAvg } = result;

  return (
    <ChartContainer>
      {/* 1점당 20px로 환산 -> 최대 200px */}
      <ChartBarView>
        <BarContainer>
          <ChartScore text={pythonAvg} />
          <Gap height="10px" />
          <Bar height={pythonAvg} />
        </BarContainer>
        <BarContainer>
          <ChartScore text={javaAvg} />
          <Gap height="10px" />
          <Bar height={javaAvg} />
        </BarContainer>
        <BarContainer>
          <ChartScore text={cAvg} />
          <Gap height="10px" />
          <Bar height={cAvg} />
        </BarContainer>
        <BarContainer>
          <ChartScore text={csAvg} />
          <Gap height="10px" />
          <Bar height={csAvg} />
        </BarContainer>
      </ChartBarView>
      <ChartCategoryView>
        <ChartCategory text="Python" />
        <ChartCategory text="Java" />
        <ChartCategory text="C" />
        <ChartCategory text="CS" />
      </ChartCategoryView>
    </ChartContainer>
  );
};
