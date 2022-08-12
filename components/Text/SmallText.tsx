import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { TextProps } from "./types";

import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 13px;
  font-family: Lato-Regular;
  color: ${colors.white};
  text-align: left;
`;

const SmallText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default SmallText;
