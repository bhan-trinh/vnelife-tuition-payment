import React from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import {Box, Text} from '@src/components/core';
import {ScrollView} from 'react-native-gesture-handler';
import {ImageBackground, useWindowDimensions} from 'react-native';
import {WelcomePanel} from '@src/components/custom/WelcomePanel';
import {size} from '@src/common/styles/size';
import {PastTransaction} from '@src/components/custom/PastTransaction.tsx';
import {Background} from '@src/components/custom/Background/Background';

export interface HistoryScreenProps
  extends RootStackScreenProps<'HISTORY_SCREEN'> {}
export type HistoryScreenRef = {};
const HistoryScreen = React.forwardRef<HistoryScreenRef, HistoryScreenProps>(
  (props, _ref) => {
    const {} = props;
    const {height} = useWindowDimensions();
    return (
      <Box flex={1} color="white">
        <Background>
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
              <Text size={size.xl} color={'black'} weight="bold">
                Lịch sử thanh toán
              </Text>
              <Box>
                {[0, 1, 2].map(val => (
                  <PastTransaction key={val} />
                ))}
              </Box>
            </Box>
          </ScrollView>
        </Background>
      </Box>
    );
  },
);

export default React.memo(HistoryScreen);
