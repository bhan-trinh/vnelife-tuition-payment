import React from 'react';
import {ROUTER_ROOT} from '@src/navigation/routers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@src/screens/HomeScreen';
import ReceiptScreen from '@src/screens/OrtherScreen/ReceiptScreen';
import HistoryScreen from '@src/screens/OrtherScreen/HistoryScreen';
import {ReceiptSvg} from '@src/assets/svgs/ReceiptSvg';
import {HistorySvg} from '@src/assets/svgs/HistorySvg';
import {HouseSvg} from '@src/assets/svgs/HouseSvg';
import {theme} from '@src/assets/colors/theme';
import ServiceScreen from '@src/screens/OrtherScreen/ServiceScreen';
import {ReceiptSearchSvg} from '@src/assets/svgs/ReceiptSearchSvg';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarStyle: {
    height: 70,
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarItemStyle: {
    alignItems: 'center',
    height: 50,
  },
  tabBarIcon: ({focused}) => {
    let Icon;
    let color = focused ? theme.colors.primary : '#696969';
    let iconAttributes = {width: 30, height: 30, color: color};
    if (route.name === 'Trang chủ') {
      Icon = <HouseSvg {...iconAttributes} />;
    } else if (route.name === 'Hoá đơn') {
      Icon = <ReceiptSvg {...iconAttributes} />;
    } else if (route.name === 'Lịch sử') {
      Icon = <HistorySvg {...iconAttributes} />;
    } else if (route.name === 'Tra cứu') {
      Icon = <ReceiptSearchSvg {...iconAttributes} />;
    }
    return Icon;
  },
  // // Change touch animation
  //   tabBarButton: props => {
  //     const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  //     return (
  //       <AnimatedPressable
  //         {...props}
  //         android_ripple={{color: 'transparent'}} // Remove ripple effect on Android if desired
  //       >
  //         {/* Render the default content or your custom animated content */}
  //         {props.children}
  //       </AnimatedPressable>
  //     );
  //   },
  headerShadowVisible: true,
  tabBarActiveTintColor: theme.colors.primary,
  tabBarInactiveTintColor: 'black',
  headerShown: false,
  headerStyle: {
    backgroundColor: 'transparent',
  },
});

export const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTER_ROOT.HOME_SCREEN}
      screenOptions={screenOptions}>
      <Tab.Screen name={ROUTER_ROOT.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={ROUTER_ROOT.SERVICE_SCREEN} component={ServiceScreen} />
      <Tab.Screen name={ROUTER_ROOT.HISTORY_SCREEN} component={HistoryScreen} />
    </Tab.Navigator>
  );
};
