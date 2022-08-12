import React, { FunctionComponent } from "react";
import { colors } from "../components/colors";

import Avi from "../assets/avi/avatar.png";

import Greeting from "../components/Header/Greating/Greeting";
import Profile from "../components/Header/Profile/Profile";

import Welcome from "../screens/Welcome";
import Home from "../screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.bgSecondary,
            shadowColor: colors.black,
            borderBottomWidth: 0.5,
            shadowOpacity: 90,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.headerText,
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{
                backgroundColor: colors.tertiary,
                right: 10,
              }}
            />
          ),
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainTitle="Oie Caio!"
                subText="Welcome Back"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
