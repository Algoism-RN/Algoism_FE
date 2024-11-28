import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.background};
`;

const Content = styled.Text`
  width: fit-content;
  height: fit-content;

  color: ${(props) => props.theme.fontColor};
`;

export const Landing = () => {
  return (
    <Container>
      <Content>Landing Page</Content>
    </Container>
  );
};
