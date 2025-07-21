import React from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import {Box, LinearGradient, Text} from '@src/components/core';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ServicePanel} from '@src/components/custom/ServicePanel';
import {WelcomePanel} from '@src/components/custom/WelcomePanel';
import {ReceiptPanel} from '@src/components/custom/ReceiptPanel';
import {receiptList} from '@src/data/ReceiptData/receiptList';
import {servicesList} from '@src/data/ServiceButtonsData/servicesList';
import ChatBotSvg from '@src/assets/svgs/ChatBotSvg';
import {ChatBotButton} from '@src/components/custom/ChatBotButton';
import {ROUTER_ROOT} from '@src/navigation/routers';
import {Background} from '@src/components/custom/Background/Background';
import {tuitionServiceList} from '@src/data/TuitionServiceData/tuitionServiceList';
import {size} from '@src/common/styles/size';
import {IconBox} from '@src/components/custom/IconBox';
import {tuitionServiceImages} from '@src/assets/imgComponents/imgComponents';

export interface HomeScreenProps extends RootStackScreenProps<'HOME_SCREEN'> {}
export type HomeScreenRef = {};
const HomeScreen = React.forwardRef<HomeScreenRef, HomeScreenProps>(
  (props, _ref) => {
    const {navigation} = props;

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
              <WelcomePanel />

              <ReceiptPanel
                receiptList={receiptList}
                navigate={() => navigation.navigate(ROUTER_ROOT.RECEIPT_SCREEN)}
              />

              <Box color="#F2F2F2" height={8} marginHorizontal={-15} />

              <Box>
                <Text size={size.xl} color={'black'} weight="bold">
                  Tìm kiếm gần đây
                </Text>

                <Box flex={1} row wrap="wrap">
                  {tuitionServiceList
                    .slice(1, 5)
                    .map((element, index: number) => {
                      return (
                        <IconBox
                          key={index}
                          icon={
                            tuitionServiceImages[
                              element.icon as keyof typeof tuitionServiceImages
                            ]
                          }
                          notif={null}
                          title={element.title}
                        />
                      );
                    })}
                </Box>
              </Box>
            </Box>
          </ScrollView>
        </Background>
        <ChatBotButton />
      </Box>
    );
  },
);

export default HomeScreen;
