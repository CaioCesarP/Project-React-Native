import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import BalanceCardItem from "./BalanceCardItem";

import { BalanceCardProps } from "./types";

const BalanceCardSectionBackground = styled.View`
  width: 100%;
  alignt-items: center
  flex: 2;
  margin-bottom: 35px;
`;

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCardItem {...props} />
    </BalanceCardSectionBackground>
  );
};

export default BalanceCardSection;
