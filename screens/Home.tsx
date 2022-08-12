import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../components/colors";

import { Container } from "../components/shared";

const HomeContainer = styled(Container)`
  background-color: ${colors.bgPrimary};
  width: 100%;
  flex: 1;
`;

const Home = () => {
  return (
    <>
      <StatusBar style="dark" />
      <HomeContainer></HomeContainer>
    </>
  );
};

export default Home;
