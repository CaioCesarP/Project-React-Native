import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { TextProps } from "./types";

import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 37px;
  font-family: Lato-Bold;
  color: ${colors.white};
  text-align: left;
`;

const BigText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default BigText;
