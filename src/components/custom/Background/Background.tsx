import React from 'react';
import {ImageBackground} from 'react-native';

export const Background = ({children}) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/BG.png')}
      resizeMode="cover"
      imageStyle={{opacity: 0.3}}>
      {children}
    </ImageBackground>
  );
};
