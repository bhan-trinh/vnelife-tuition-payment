import React from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import {Box, LinearGradient} from '@src/components/core';
import {ImageBackground, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ServicePanel} from '@src/components/custom/ServicePanel';
import {WelcomePanel} from '@src/components/custom/WelcomePanel';
import {ReceiptPanel} from '@src/components/custom/ReceiptPanel';
import {receiptList} from '@src/data/ReceiptData/receiptList';
import {servicesList} from '@src/data/ServiceButtonsData/servicesList';
import ChatBotSvg from '@src/assets/svgs/ChatBotSvg';
import {ChatBotButton} from '@src/components/custom/ChatBotButton';

export interface HomeScreenProps extends RootStackScreenProps<'HOME_SCREEN'> {}
export type HomeScreenRef = {};
const HomeScreen = React.forwardRef<HomeScreenRef, HomeScreenProps>(
  (props, _ref) => {
    const {} = props;

    return (
      <Box flex={1} color="white">
        <ImageBackground
          source={require('../../assets/images/BG.png')}
          resizeMode="cover">
          <ScrollView
            style={{backgroundColor: '#00000000', height: '100%'}}
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
            <Box
              paddingHorizontal="7%"
              paddingVertical={50}
              justifyContent="space-around"
              color="transparent"
              style={{gap: 15}}>
              <WelcomePanel />

              <ReceiptPanel receiptList={receiptList} />

              <Box color="#F2F2F2" height={8} marginHorizontal={-15} />

              <ServicePanel servicesList={servicesList} />
            </Box>
          </ScrollView>
        </ImageBackground>
        <ChatBotButton />
      </Box>
    );
  },
);

export default HomeScreen;
