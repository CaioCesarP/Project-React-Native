import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import SmallText from "../Text/SmallText";
import { ButtonProps } from "./types";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 10px;
  border-radius: 20px;
`;

const SamllButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <SmallText textStyles={props.textStyles}>{props.children}</SmallText>
    </ButtonView>
  );
};

export default SamllButton;
