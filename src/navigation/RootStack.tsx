import React, {memo} from 'react';
import {RootStackParamList} from '@src/navigation/types';
import {ROUTER_ROOT} from '@src/navigation/routers';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabBar} from './BottomTabBar';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        initialRouteName={ROUTER_ROOT.BOTTOM_TABS}
        screenOptions={{
          animation: 'default',
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          gestureEnabled: false,
        }}>
        <Stack.Screen name={ROUTER_ROOT.BOTTOM_TABS} component={BottomTabBar} />
        {/* <Stack.Screen name={ROUTER_ROOT.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={ROUTER_ROOT.RECEIPT_SCREEN}
          component={ReceiptScreen}
        />
        <Stack.Screen
          name={ROUTER_ROOT.HISTORY_SCREEN}
          component={HistoryScreen}
        /> */}
      </Stack.Navigator>
    </>
  );
};

export default memo(RootStack);
