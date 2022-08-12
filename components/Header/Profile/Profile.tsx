import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { ProfileProps } from "./types";

const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  width: 45px;
  height: 45px;
  border-radius: 15px;
`;

const StyledImage = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Profile: FunctionComponent<ProfileProps> = (props) => {
  return (
    <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
      <StyledImage style={props.imgStyle} source={props.img} />
    </StyledView>
  );
};

export default Profile;
