import {
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";

export interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
