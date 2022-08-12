import { StyleProp, TextStyle } from "react-native";

export interface GreetingProps {
  mainTitle: string;
  subText: string;
  mainTextStyle?: StyleProp<TextStyle>;
  subTextStyle?: StyleProp<TextStyle>;
}
