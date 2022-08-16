import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import card_bg from "../../assets/bgs/background_transparent.png";

import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";

import { colors } from "../colors";
import { View } from "react-native";

import { BalanceCardProps } from "./types";

const CardBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
  resize-mode: contain;
  background-color: ${colors.bgSecondary};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 30%;
  height: 80%;
  resize-mode: contain;
`;

const BalanceCardItem: FunctionComponent<BalanceCardProps> = (props) => {
  return (
    <CardBackground source={card_bg}>
      <TouchableView>
        <CardRow>
          <RegularText textStyles={{ color: colors.white, fontSize: 16 }}>
            ****** {props?.accountNo?.slice(6, 10)}
          </RegularText>
        </CardRow>
        <CardRow>
          <View style={{ flex: 3 }}>
            <SmallText
              textStyles={{ marginBottom: 5, color: colors.secondary }}
            >
              Total Balance
            </SmallText>
            <RegularText textStyles={{ fontSize: 19 }}>
              ${props?.balance}
            </RegularText>
          </View>
          <Logo source={props?.logo} />
        </CardRow>
      </TouchableView>
    </CardBackground>
  );
};

export default BalanceCardItem;
