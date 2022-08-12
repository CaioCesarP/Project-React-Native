import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import RegularText from "../Text/RegularText";
import { ButtonProps } from "./types";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
