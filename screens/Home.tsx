import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import masterCardLogo from "../assets/cards/mc.png";
import visaLogo from "../assets/cards/visa_white.png";

import { colors } from "../components/colors";

import { Container } from "../components/shared";
import CardSection from "../components/Card/CardSection";

const HomeContainer = styled(Container)`
  background-color: ${colors.bgPrimary};
  width: 100%;
  flex: 1;
`;

const Home = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "3845757744",
      balance: 20000.15,
      alias: "work Debit",
      logo: visaLogo,
    },
    {
      id: 2,
      accountNo: "3845730203",
      balance: 12000.01,
      alias: "Personal Prepaid",
      logo: masterCardLogo,
    },
    {
      id: 3,
      accountNo: "3845238847",
      balance: 5600.83,
      alias: "School Prepaid",
      logo: visaLogo,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
    </HomeContainer>
  );
};

export default Home;
