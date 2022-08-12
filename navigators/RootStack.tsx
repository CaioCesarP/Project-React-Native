import React, { FunctionComponent } from "react";
import { colors } from "../components/colors";

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
            backgroundColor: colors.thistle,
            shadowColor: colors.black,
            borderBottomWidth: 0.5,
            shadowOpacity: 90,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
