import { Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  return (
    <Container>
      <Text>Home Page</Text>
    </Container>
  );
};
