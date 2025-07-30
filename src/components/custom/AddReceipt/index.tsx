import React from 'react';
import {Box, Text} from '@src/components/core';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Svg, {Line} from 'react-native-svg';
import {size} from '@src/utils/styles/size';
import {IconBoxSingle} from '../IconBoxSingle';
import {tuitionServiceImages} from '@src/assets/imgComponents/imgComponents';
import {theme} from '@src/assets/themes/theme';
import {ReceiptItem} from '@src/data/receipt/ReceiptItem';
import {formatMoney} from '@src/utils/func/formatMoney';
import {AddSvg} from '@src/assets/svgs/AddSvg';
import {useNavigation} from '@react-navigation/native';
import {ROUTER_ROOT} from '@src/navigation/routers';

interface AddReceiptProps {}

export const AddReceipt: React.FC<AddReceiptProps> = ({}) => {
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('@src/assets/images/Background.png')}
      resizeMode="contain">
      <Box
        top={5}
        height={310}
        width={width * 0.85}
        flex={1}
        middle
        center
        paddingHorizontal={'6%'}
        paddingVertical={'3%'}
        borderWidth={1}
        borderColor={'#00000000'}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTER_ROOT.SERVICE_SCREEN)}>
          <Box
            radius={100}
            width={60}
            height={60}
            borderColor={theme.colors.primary}
            borderWidth={1}
            middle
            center>
            <AddSvg width={40} height={40} />
          </Box>
        </TouchableOpacity>
        <Box marginHorizontal={60} marginVertical={5}>
          <Text size={16} color="black" textAlign="center">
            Bắt đầu tra cứu ngay để lưu hoá đơn
          </Text>
        </Box>
      </Box>
    </ImageBackground>
  );
};
