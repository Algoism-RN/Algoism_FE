import { ProgressContainer, Fill } from "./styles";

// Progress Bar
export const Progress = ({ width }) => {
  return (
    <ProgressContainer>
      <Fill width={width} />
    </ProgressContainer>
  );
};
