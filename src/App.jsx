import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100%;

  background-color: transparent;
`;

export default function App() {
  return (
    <Container>
      <Text>Algoism?</Text>
    </Container>
  );
}
