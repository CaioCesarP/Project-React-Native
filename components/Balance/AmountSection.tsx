import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import { AmountProps } from "./types";

const AmountSectionBackground = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 5px;
  align-items: center;
`;

const AmountSection: FunctionComponent<AmountProps> = (props) => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={{ color: colors.secondary, marginBottom: 15 }}>
        Total Balance
      </SmallText>
      <RegularText textStyles={{ color: colors.tertiary, fontSize: 28 }}>
        $ {props.balance}
      </RegularText>
    </AmountSectionBackground>
  );
};

export default AmountSection;
