import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import masterCardLogo from "../assets/cards/mc.png";
import visaLogo from "../assets/cards/visa_white.png";
import cobyAndoh from "../assets/portraits/1.jpg";
import harleenScot from "../assets/portraits/2.jpg";
import jamesCorbyn from "../assets/portraits/3.jpg";

import { colors } from "../components/colors";
import { Container } from "../components/shared";

import CardSection from "../components/Card/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

export type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)`
  background-color: ${colors.bgPrimary};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent<Props> = ({ navigation }) => {
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

  const transactionData = [
    {
      id: 1,
      amount: "-$86.00",
      date: "14 Sep 2021",
      title: "Taxi",
      subtitle: "Uber Car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$286.00",
      date: "14 Sep 2021",
      title: "Shopping",
      subtitle: "Ali Express",
      art: {
        background: colors.tertiary,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount: "-$586.00",
      date: "14 Sep 2021",
      title: "Travel",
      subtitle: "Emirates",
      art: {
        background: colors.secondary,
        icon: "airplane",
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "2450.56",
      name: "Coby Andoh",
      background: colors.tertiary,
      img: cobyAndoh,
    },
    {
      id: 2,
      amount: "4450.56",
      name: "Harleen Scot",
      background: colors.primary,
      img: harleenScot,
    },
    {
      id: 3,
      amount: "6250.56",
      name: "James Corbyn",
      background: colors.secondary,
      img: jamesCorbyn,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
