import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import CardItem from "./CardItem";

import { CardSectionProps } from "./types";

const CardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  margin-top: 35px;
`;

const CardSection: FunctionComponent<CardSectionProps> = (props) => {
  return (
    <CardList
      data={props.data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 25,
        alignItems: "center",
        height: "80%",
      }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    />
  );
};

export default CardSection;
