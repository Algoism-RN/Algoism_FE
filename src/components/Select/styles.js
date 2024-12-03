import styled from "styled-components";
import { ColumnWrapper } from "../../styles/category/Wrapper";
import { AllertaStencilText } from "../../styles/category/Text";


export const SelectContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

export const StyledPicker = styled.View`
  width: 90%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
  justify-content: center;
`;

export const PickerText = styled(AllertaStencilText)`
  color: #333;
  font-size: 16px;
`;

export const LabelText = styled(AllertaStencilText)`
  color: #555;
  font-size: 14px;
  margin-bottom: 5px;
  align-self: flex-start;
`;