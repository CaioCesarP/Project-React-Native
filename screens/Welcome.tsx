import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../components/colors";
import { Container } from "../components/shared";
import BigText from "../components/Text/BigText";
import SmallText from "../components/Text/SmallText";

import background from "./../assets/bgs/background_v1.png";
import RegularButton from "../components/Button/RegularButton";
import SamllButton from "../components/Button/SmallButton";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const TopSection = styled.View`
  width: 100%;
  max-height: 55%;
  flex: 1;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best payment method, connects your money to your friends, family.
          </SmallText>
          <RegularButton
            onPress={() =>
              alert("We are passing by troubles, try again other moment.")
            }
          >
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
