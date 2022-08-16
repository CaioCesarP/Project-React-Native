import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { colors } from "../colors";

import RegularButton from "../Button/RegularButton";

import { Props as BalanceProps } from "../../screens/Balance";

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 25px;
  flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
  const navigation = useNavigation<BalanceProps["navigation"]>();

  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{ width: "50%" }} onPress={() => handlePress()}>
        Cancel <Ionicons name="card" size={17} color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;
