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

interface ReceiptProps {
  receipt: ReceiptItem;
  navigateToTransaction: () => void;
}

export const Receipt: React.FC<ReceiptProps> = ({
  receipt,
  navigateToTransaction,
}) => {
  const {height, width} = useWindowDimensions();
  return (
    <ImageBackground
      source={require('@src/assets/images/Background.png')}
      resizeMode="contain">
      <Box
        top={5}
        height={310}
        width={width * 0.85}
        flex={1}
        justifyContent="flex-start"
        paddingHorizontal={'6%'}
        paddingVertical={'3%'}
        borderWidth={1}
        borderColor={'#00000000'}>
        <Box row alignItems="center">
          <Box width="17%">
            <IconBoxSingle
              icon={
                tuitionServiceImages[
                  receipt.dich_vu.toLowerCase() as keyof typeof tuitionServiceImages
                ]
              }
            />
          </Box>

          <Box style={styles.ticketBox}>
            <Text size={size.l} weight="bold" style={[styles.normalText]}>
              {receipt.thanh_toan[0].noi_dung}
            </Text>
          </Box>
        </Box>

        <Svg height="10" width={width * 0.8} style={{marginLeft: '3%'}}>
          <Line
            x1="0"
            y1="5"
            x2={width * 0.7}
            y2="5"
            stroke="#D4D7DA"
            strokeWidth="1"
            strokeDasharray="5, 5" // Defines dash and gap lengths
          />
        </Svg>

        {/* THÔNG TIN HOÁ ĐƠN ------------------------------------------*/}
        <Box
          paddingVertical={10}
          justifyContent="space-around"
          borderColor={'#00000000'}
          borderWidth={1}>
          <Box row alignItems="center">
            <Box>
              <Text size={size.m} color={'grey'}>
                Tên học sinh
              </Text>
            </Box>
            <Box flex={1}>
              <Text size={size.l} color={'black'} textAlign="right">
                {receipt.hoc_sinh_info.ten_hoc_sinh}
              </Text>
            </Box>
          </Box>

          <Box row alignItems="center">
            <Box>
              <Text size={size.m} color={'grey'}>
                Mã định danh
              </Text>
            </Box>
            <Box flex={1}>
              <Text size={size.l} color={'black'} textAlign="right">
                {receipt.hoc_sinh_info.lop_hoc_id}
              </Text>
            </Box>
          </Box>

          <Box row alignItems="flex-start" borderColor={'black'}>
            <Box>
              <Text size={size.m} color={'grey'}>
                Tên trường
              </Text>
            </Box>
            <Box flex={1}>
              <Text size={size.l} color={'black'} textAlign="right">
                {receipt.hoc_sinh_info.ten_truong}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          borderColor={'red'}
          justifyContent="center"
          // borderWidth={1}
        >
          <Box color="#D4D7DA" height={1} />
        </Box>

        {/* SỐ TIỀN HOÁ ĐƠN ------------------------------------------*/}

        <Box
          justifyContent="space-around"
          padding={5}
          flex={1}
          borderColor={'#00000000'}
          borderWidth={1}>
          <Box>
            <Text size={size.m} color={'grey'}>
              Số tiền cần thanh toán
            </Text>
            {/* Format amount of money with dots */}
            <Text size={size.l} color={'black'} weight="bold">
              {formatMoney(receipt.thanh_toan[0].tong_tien)}
              VNĐ
            </Text>
          </Box>
          <TouchableOpacity
            style={{
              flex: 1,
              maxHeight: 50,
              backgroundColor: theme.colors.primary,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={navigateToTransaction}>
            <Text
              size={size.l}
              weight="bold"
              color={'white'}
              textAlign="center">
              Thanh toán
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  normalText: {
    color: 'black',
    fontFamily: 'Inter',
  },

  subText: {
    color: 'grey',
  },

  ticketBox: {
    flex: 1,
  },

  servicesButton: {
    borderRadius: 10000,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
  },
});
