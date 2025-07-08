import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import {RootStackParamList} from './types';
import {refNavigation} from './navigationHelper';

const Navigator: React.FC<any> = () => {
  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['base://'],
    config: {
      screens: {},
    },
  };
  return (
    <NavigationContainer ref={refNavigation} linking={linking}>
      <RootStack />
    </NavigationContainer>
  );
};
export default Navigator;
