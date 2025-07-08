import React from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import {Box, Text} from '@src/components/core';
import {ScrollView} from 'react-native-gesture-handler';
import {ImageBackground, useWindowDimensions} from 'react-native';
import {WelcomePanel} from '@src/components/custom/WelcomePanel';

export interface ReceiptScreenProps
  extends RootStackScreenProps<'RECEIPT_SCREEN'> {}
export type ReceiptScreenRef = {};
const ReceiptScreen = React.forwardRef<ReceiptScreenRef, ReceiptScreenProps>(
  (props, _ref) => {
    const {} = props;
    const {height} = useWindowDimensions();
    return (
      <Box flex={1} color="white">
        <ImageBackground
          source={require('../../../assets/images/BG.png')}
          resizeMode="cover">
          <ScrollView
            style={{backgroundColor: '#00000000', height: '100%'}}
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
            <Box
              paddingHorizontal="7%"
              paddingVertical={height * 0.05}
              justifyContent="space-around"
              color="transparent"
              style={{gap: 15}}>
              <Text size={10}>Receipt</Text>
              <WelcomePanel />
            </Box>
          </ScrollView>
        </ImageBackground>
      </Box>
    );
  }
);

export default React.memo(ReceiptScreen);
