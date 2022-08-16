import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { TransactionProps } from "./types";

import { colors } from "../colors";

import TransactionAvi from "./TransactionAvi";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import { View } from "react-native";

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RigthView = styled.View`
  flex: 1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{ marginLeft: 10 }}>
          <RegularText
            textStyles={{
              color: colors.secondary,
              textAlign: "left",
              marginBottom: 5,
            }}
          >
            {props.title}
          </RegularText>
          <SmallText
            textStyles={{
              color: colors.tertiary,
              textAlign: "left",
            }}
          >
            {props.subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RigthView>
        <RegularText
          textStyles={{
            color: colors.secondary,
            textAlign: "right",
            marginBottom: 5,
          }}
        >
          {props.amout}
        </RegularText>
        <SmallText
          textStyles={{
            color: colors.tertiary,
            textAlign: "right",
          }}
        >
          {props.date}
        </SmallText>
      </RigthView>
    </TransactionRow>
  );
};

export default TransactionItem;
