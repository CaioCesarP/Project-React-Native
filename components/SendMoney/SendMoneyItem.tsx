import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import { ScreenWidth } from "../shared";

import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import Profile from "../Header/Profile/Profile";

import { SendMoneyProps } from "./types";

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0 10px 10px 0;
`;

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
  return (
    <SendMoneyItemContainer
      underlayColor={colors.secondary}
      style={{ backgroundColor: props.background }}
      onPress={() => {
        alert("Send Money!");
      }}
    >
      <>
        <Profile img={props.img} imgContainerStyle={{ marginBottom: 10 }} />
        <SmallText
          textStyles={{ textAlign: "left", color: colors.white, fontSize: 12 }}
        >
          {props.name}
        </SmallText>
        <RegularText
          textStyles={{ textAlign: "left", color: colors.white, fontSize: 13 }}
        >
          {props.amount}
        </RegularText>
      </>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
