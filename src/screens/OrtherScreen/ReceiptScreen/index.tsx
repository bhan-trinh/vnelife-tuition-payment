import React, {useState} from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import {Box, Input, Text} from '@src/components/core';
import {ScrollView} from 'react-native-gesture-handler';
import {ImageBackground, useWindowDimensions} from 'react-native';
import {WelcomePanel} from '@src/components/custom/WelcomePanel';
import {size} from '@src/common/styles/size';
import {CarOutlineSvg} from '@src/assets/svgs/CarOutlineSvg';
import {IconBox} from '@src/components/custom/IconBox';
import {servicesList} from '@src/data/ServiceButtonsData/servicesList';

export interface ReceiptScreenProps
  extends RootStackScreenProps<'RECEIPT_SCREEN'> {}
export type ReceiptScreenRef = {};
const ReceiptScreen = React.forwardRef<ReceiptScreenRef, ReceiptScreenProps>(
  (props, _ref) => {
    const {} = props;
    const {height} = useWindowDimensions();
    const [searchWord, setSearchWord] = useState('Tên dịch vụ');
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
              <Box
                radius={45}
                borderWidth={1}
                borderColor="#CCC"
                paddingHorizontal={14}
                marginHorizontal={-8}>
                <Input
                  size={size.m}
                  color="#999"
                  value={searchWord}
                  onChangeText={text => setSearchWord(text)}
                />
              </Box>
              <Box>
                <Text size={size.xl} color={'black'} weight="bold">
                  Tìm kiếm gần đây
                </Text>

                <Box flex={1} row wrap="wrap">
                  {[0, 1, 2, 3].map((_, index: number) => {
                    return (
                      <IconBox
                        key={index}
                        icon={
                          <CarOutlineSvg width={24} height={24} color="black" />
                        }
                        notif={null}
                        title={'Học mãi'}
                      />
                    );
                  })}
                </Box>
              </Box>

              <Box>
                <Text size={size.xl} color={'black'} weight="bold">
                  Tất cả dịch vụ
                </Text>

                <Box flex={1} row wrap="wrap">
                  {servicesList.map((element, index: number) => {
                    return (
                      <IconBox
                        key={index}
                        icon={element.icon}
                        notif={null}
                        title={'Học mãi'}
                      />
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </ScrollView>
        </ImageBackground>
      </Box>
    );
  },
);

export default React.memo(ReceiptScreen);
