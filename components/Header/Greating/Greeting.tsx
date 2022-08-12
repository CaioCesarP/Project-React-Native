import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import RegularText from "../../Text/RegularText";
import SmallText from "../../Text/SmallText";
import { colors } from "../../colors";

import { GreetingProps } from "./types";

const StyledView = styled.View`
  flex-diretion: column;
  flex: 1;
  justify-content: center;
`;

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          { color: colors.secondary, fontSize: 22 },
          props.mainTextStyle,
        ]}
      >
        {props.mainTitle}
      </RegularText>
      <SmallText textStyles={[{ color: colors.tertiary }, props.subTextStyle]}>
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;
